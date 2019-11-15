import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function stockReducer(state = initialState.stocks, action) {
  switch (action.type) {
    case types.LOAD_STOCK_SUCCESS:
      return [...state, { ...action.stocks }];
    default:
      return state;
  }
}
