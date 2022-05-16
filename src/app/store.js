import { configureStore } from '@reduxjs/toolkit';
import changeReducer from '../page/CommentPage/reducerComment';
import categoryReducer from '../page/DetailCategoryPage/reducerCategory';
export const store = configureStore({
  reducer: {
    comment: changeReducer,
    sideBar: categoryReducer
  },
});
