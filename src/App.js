import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Courier from "./admin/courier/Courier";
import ShippingCalc from "./app/client/ShippingCalc";
import ParcelDimensionsPricing from "./admin/parcelDimensionsPricing/ParcelDimensionsPricing";
import ParcelWeightPricing from "./admin/parcelWeightPricing/ParcelWeightPricing";

function App() {
  return (
    <div className="App">
      <div className="ui pointing menu">
        <div className="header item">Cargo4You</div>
        <Link className="item" to="/ShippingCalc">
          Shipping Calculator
        </Link>

        <div className="right menu">
          <div className="header item">Admin</div>
          <Link className="item" to="/Courier">
            Courier
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/ShippingCalc" element={<ShippingCalc />} />
        <Route path="/Courier" element={<Courier />} />
        <Route
          path="/ParcelDimensionsPricing"
          element={<ParcelDimensionsPricing />}
        >
          <Route path=":courierId" element={<ParcelDimensionsPricing />} />
        </Route>

        <Route path="/ParcelWeightPricing" element={<ParcelWeightPricing />}>
          <Route path=":courierId" element={<ParcelWeightPricing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
