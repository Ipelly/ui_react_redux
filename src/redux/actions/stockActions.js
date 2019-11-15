import * as types from "./actionTypes";
import * as stockService from "../../service/service.stocks";

export function loadStocksSuccess(stocks){
  return { type: types.LOAD_STOCK_SUCCESS , stocks };
}

export const loadStocks = (symbol) => async dispatch => {
  try{
    let res = await stockService.fetchStocks(symbol);
    /*if(res === undefined) {
      res = symbol == 'aapl' ? {
        "symbol": "AAPL",
        "sector": "technologyhardwareequipment",
        "securityType": "commonstock",
        "bidPrice": 0,
        "bidSize": 0,
        "askPrice": 0,
        "askSize": 0,
        "lastUpdated": 1573765200001,
        "lastSalePrice": 262.77,
        "lastSaleSize": 100,
        "lastSaleTime": 1573765191429,
        "volume": 193051,
        "marketPercent": 0.00943
        }: {
            "symbol": "GE",
            "sector": "capitalgoods",
            "securityType": "commonstock",
            "bidPrice": 0,
            "bidSize": 0,
            "askPrice": 0,
            "askSize": 0,
            "lastUpdated": 1573766888444,
            "lastSalePrice": 11.295,
            "lastSaleSize": 210,
            "lastSaleTime": 1573765193948,
            "volume": 650107,
            "marketPercent": 0.02115
          };
    }*/
    dispatch(loadStocksSuccess(res));
  } catch(error) {
    throw error;
  }
}
