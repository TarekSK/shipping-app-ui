import React from "react";
import ParcelDimensionsPricingForm from "./ParcelDimensionsPricingForm";
import ParcelDimensionsPricingList from "./ParcelDimensionsPricingList";

const ParcelDimensionsPricing = () => {
  return (
    <div className="ui grid">
      <div className="twelve wide column">
        <div className="ui segment">
          <h2 className="ui left floated header">Parcel Dimensions Pricing</h2>
          <ParcelDimensionsPricingList />
        </div>
      </div>
      <div className="four wide column">
        <div className="ui segment">
          <ParcelDimensionsPricingForm />
        </div>
      </div>
    </div>
  );
};

export default ParcelDimensionsPricing;
