import React from "react";
import { connect } from "react-redux";
import * as stockActions from "../../redux/actions/stockActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import StockList from "./StockList";
import { Redirect } from "react-router-dom";

class StockPage extends React.Component {
  state = {
    redirectToAddstockPage: false,


  };

  componentDidMount() {
    this.props.actions.loadStocks(this.state.symbol);
  }


  handlChange = event => {
    event.preventDefault();
    this.setState({ symbol : event.target.value});
  };

  getStocks = event => {
    event.preventDefault();
    this.props.actions.loadStocks(this.state.symbol);
  };

  render = () => {
    return (
      <>
        {this.state.redirectToAddstockPage && <Redirect to="/stocks" />}
        <h2>Stocks</h2>
        <input type="test" id="symbol" onChange={this.handlChange}/> 

        <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-stock"
              onClick={this.getStocks}
            >
              Add Stock
            </button>

            <StockList stocks={this.props.stocks}/>
      </>
    );
  }
}

StockPage.propTypes = {
  stocks: PropTypes.array,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    stocks : state.stocks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadStocks: bindActionCreators(stockActions.loadStocks, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockPage);
