import React from "react";
import PropTypes from "prop-types";

const StockList = ({ stocks }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>symbol</th>
        <th>sector</th>
        <th>securityType</th>
        <th>bidPrice</th>
        <th>bidSize</th>
        <th>askPrice</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {stocks.map(stock => {
        return (
          <tr key={stock.symbol}>
            <td>{stock.symbol}</td>
            <td>{stock.sector}</td>
            <td>{stock.securityType}</td>
            <td>{stock.bidPrice}</td>
            <td>{stock.bidSize}</td>
            <td>{stock.askPrice}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

StockList.propTypes = {
  stocks : PropTypes.array
};

export default StockList;
