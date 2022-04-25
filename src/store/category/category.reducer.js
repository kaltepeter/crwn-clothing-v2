import { CATEGORIES_ACTION_TYPE } from "./category.types";

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoryReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true, error: null };
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, error: null, isLoading: false };
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
