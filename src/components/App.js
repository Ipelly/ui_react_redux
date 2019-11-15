import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import StockPage from "./stocks/StockPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/stocks" component={StockPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
