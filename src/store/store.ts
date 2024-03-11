import { type StateCreator, create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

import { createSessionsSlice, type SessionsSliceType } from "./slices/sessions";
import { createUserSettingsSlice, type UserSettingsSliceType } from "./slices/userSettings";
import { storage } from "../storage";

export type ImmerStateCreator<T> = StateCreator<
  T,
  [["zustand/immer", never], never],
  [],
  T
>;

const useBoundedStore = create<SessionsSliceType & UserSettingsSliceType>()(
  persist(
    immer(
      (...a) => ({
        ...createSessionsSlice(...a),
        ...createUserSettingsSlice(...a),
      })
    ),
    {
      name: "user-settings",
      storage: createJSONStorage(() => ({
        setItem: (name, value) => {
          return storage.set(name, value)
        },
        getItem: (name) => {
          const value = storage.getString(name)
          return value ?? null
        },
        removeItem: (name) => {
          return storage.delete(name)
        },
      })),
      partialize: (state) => ({
        userSettings: state.userSettings,
      }),
    }
  ))

export default useBoundedStore