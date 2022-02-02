import React, { useState } from "react";
import { ParcelPricingModel } from "../../admin/model/parcelPricingModel";
import { parcelPricingCalc } from "../../api/apiParcelPricing";

const ShippingCalcForm = ({ selectedCourier }) => {
  // Corier - Init
  ParcelPricingModel.courierId = selectedCourier;

  // Parcel Weight Pricing - State
  const [parcelPricingData, setParcelPricingData] =
    useState(ParcelPricingModel);

  // Parcel Pricing - Calc
  const parcelPricingSave = (e) => {
    // Disable Reload
    e.preventDefault();

    // Parcel Pricing - Create
    parcelPricingCalc(parcelPricingData);
  };

  // Input - Change
  const handleChange = (e) => {
    setParcelPricingData({
      ...parcelPricingData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form className="ui form" onSubmit={(e) => parcelPricingSave(e)}>
        <div className="field">
          <div className="ui right labeled input">
            <label>Parcel Width</label>
            <input
              type="number"
              name="parcelWidth"
              value={parcelPricingData.parcelWidth}
              required
              onChange={(e) => handleChange(e)}
            />
            <div className="ui basic label">cm.</div>
          </div>
        </div>
        <div className="field">
          <div className="ui right labeled input">
            <label>Parcel Height</label>
            <input
              type="number"
              name="parcelHeight"
              value={parcelPricingData.parcelHeight}
              required
              onChange={(e) => handleChange(e)}
            />
            <div className="ui basic label">cm.</div>
          </div>
        </div>

        <div className="field">
          <div className="ui right labeled input">
            <label>Price Depth</label>
            <input
              type="number"
              name="parcelDepth"
              value={parcelPricingData.parcelDepth}
              required
              onChange={(e) => handleChange(e)}
            />
            <div className="ui basic label">cm.</div>
          </div>
        </div>

        <div className="field">
          <div className="ui right labeled input">
            <label>Price Weight</label>
            <input
              type="number"
              name="parcelWeight"
              value={parcelPricingData.parcelWeight}
              required
              onChange={(e) => handleChange(e)}
            />
            <div className="ui basic label">kg.</div>
          </div>
        </div>

        <button className="ui button" type="submit">
          Calculate
        </button>
      </form>
    </div>
  );
};

export default ShippingCalcForm;
