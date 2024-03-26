import { type StateCreator, create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

import { createSessionsSlice, type SessionsSliceType } from "./slices/sessions";
import { createUserSettingsSlice, type UserSettingsSliceType } from "./slices/userSettings";
import { storage } from "../storage";

import type { SessionType, UserSettings } from "@/types";

export type ImmerStateCreator<T> = StateCreator<
  T,
  [["zustand/immer", never], never],
  [],
  T
>;

interface PersistedState {
  userSettings: UserSettings
  sessions: SessionType[]
}

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
        sessions: state.sessions,
      }),
      version: 0,
      merge(persistedState, currentState) {
        return {
          ...currentState,
          ...persistedState as PersistedState,
          userSettings: {
            ...currentState.userSettings,
            ...(persistedState as PersistedState).userSettings,
          },
        }
      },
    }
  ))

export default useBoundedStore