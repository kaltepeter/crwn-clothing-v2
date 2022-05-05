import { Middleware } from "redux";
import { RootState } from "../store";

export const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (!action.type) {
      return;
    }
    console.log(
      "🚀 ~ file: store.js ~ line 6 ~ loggerMiddleware ~ action",
      action.type,
      action.payload
    );
    console.log(`current state:`, store.getState());
    next(action);
    console.log(`next state: `, store.getState());
  };
