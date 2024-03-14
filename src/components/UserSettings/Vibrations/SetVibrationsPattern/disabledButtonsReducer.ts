export interface DisabledButtonsState {
  define: boolean
  play: boolean
  stop: boolean
  reset: boolean
}

export type DisabledButtonActions =
  { type: "define" | "stop" | "play/start" | "reset" }
  | { type: "play/end", isDefaultPattern: boolean };

export function disabledButtonsReducer(state: DisabledButtonsState, action: DisabledButtonActions): DisabledButtonsState {
  switch (action.type) {
    case "define": return ({
      play: true,
      define: false,
      stop: false,
      reset: true,
    })
    case "play/start": return ({
      play: true,
      define: true,
      stop: true,
      reset: true,
    })
    case "play/end": return ({
      ...state,
      define: !action.isDefaultPattern,
      play: false,
      reset: action.isDefaultPattern,
    })
    case "stop": return ({
      define: true,
      play: false,
      stop: true,
      reset: false,
    })
    default: return {
      define: false,
      play: false,
      stop: true,
      reset: true,
    }
  }
}