import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPE } from "./category.types";

export const setCategories = (categories) => {
  return createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categories);
};

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categories = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
