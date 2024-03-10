import AsyncStorage from "@react-native-async-storage/async-storage";
import { type StateCreator, create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

import { createSessionsSlice, type SessionsSliceType } from "./slices/sessions";
import { createUserSettingsSlice, type UserSettingsSliceType } from "./slices/userSettings";

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
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        userSettings: state.userSettings,
      }),
    }
  ))

export default useBoundedStore