import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return;
//   }
//   console.log(
//     "🚀 ~ file: store.js ~ line 6 ~ loggerMiddleware ~ action",
//     action.type,
//     action.payload
//   );
//   console.log(`current state:`, store.getState());
//   next(action);
//   console.log(`next state: `, store.getState());
// };

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
