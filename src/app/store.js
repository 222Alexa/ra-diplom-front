import { configureStore } from "@reduxjs/toolkit";

import { combineEpics, createEpicMiddleware } from "redux-observable";

import topSalesReducer from "../features/services/topSalesSlice";
import catalogReducer from "../features/services/catalogSlice";
import cartReducer from "../features/services/cartSlice";
import formReducer from "../features/services/formSlice";

import {
  categoriesEpic,
  topSalesEpic,
  categoryItemsEpic,
  nextItemsEpic,
  getSelectedItemEpic,
  changeSearchEpic,
  searchItemsEpic,
  setOrderEpic 
} from "../features/services/Epics/index";

const epic = combineEpics(
  topSalesEpic,
  categoriesEpic,
categoryItemsEpic,
  nextItemsEpic,
  getSelectedItemEpic,
  
  searchItemsEpic,
  setOrderEpic 
);
const epicMiddleware = createEpicMiddleware();

export default configureStore({
  reducer: {
    topSales: topSalesReducer,
    catalog: catalogReducer,
    cart: cartReducer,
    form: formReducer,
  
  },
  middleware: [epicMiddleware],
});

epicMiddleware.run(epic);
