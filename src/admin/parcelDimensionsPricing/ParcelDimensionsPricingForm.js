import React, { useState, useEffect } from "react";
import {
  parcelDimensionsPricingCreate,
  parcelDimensionsPricingEdit,
} from "../../api/apiParcelDimensionsPricing";
import { ParcelDimensionsPricingModel } from "../model/ParcelDimensionsPricingModel";

const ParcelDimensionsPricingForm = ({
  isEdit,
  setIsEdit,
  selectedParcelDimensionsPricing,
  setIsSave,
  courierId,
}) => {
  // CourierId - SET - [Init]
  ParcelDimensionsPricingModel.courierId = courierId;

  // Parcel Dimensions Pricing - State
  const [parcelDimensionsPricingData, setParcelDimensionsPricingData] =
    useState(ParcelDimensionsPricingModel);

  // Add Price Per KG
  const [isAddPricePerKG, setIsAddPricePerKG] = useState(
    parcelDimensionsPricingData.parcelDimensionsIsAddKgPrice
  );

  // Check Selected ParcelDimensionsPricing
  useEffect(() => {
    if (isEdit) {
      setParcelDimensionsPricingData(selectedParcelDimensionsPricing);
    } else {
      setParcelDimensionsPricingData(ParcelDimensionsPricingModel);
    }
  }, [selectedParcelDimensionsPricing, isEdit]);

  // Parcel Dimensions Pricing - Save
  const parcelDimensionsPricingSave = (e) => {
    // Disable Reload
    e.preventDefault();

    // Parcel Dimensions Pricing - Save
    if (isEdit) {
      // Parcel Dimensions Pricing - Edit
      parcelDimensionsPricingEdit(parcelDimensionsPricingData);
    } else {
      // Parcel Dimensions Pricing - Create
      const v1 = parcelDimensionsPricingCreate(parcelDimensionsPricingData);
    }

    // IsEdit - False - [Reset]
    //setIsEdit(false);

    // IsSave
    setIsSave(true);
  };

  // Input - Change
  const handleChange = (e) => {
    // Is Add Price Per KG
    if (e.target.name === "parcelDimensionsIsAddKgPrice") {
      // Set Is Add Price Per KG. [Depend on User Input]
      setIsAddPricePerKG(e.target.checked);
      // Update State
      setParcelDimensionsPricingData({
        ...parcelDimensionsPricingData,
        [e.target.name]: e.target.checked,
      });
    } else {
      setParcelDimensionsPricingData({
        ...parcelDimensionsPricingData,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div>
      <form
        className="ui form"
        onSubmit={(e) => parcelDimensionsPricingSave(e)}
      >
        <div className="field">
          <label>Parcel Dimensions From</label>
          <input
            type="number"
            name="parcelDimensionsCmFrom"
            onChange={handleChange}
            value={parcelDimensionsPricingData.parcelDimensionsCmFrom}
            required
          />
        </div>
        <div className="field">
          <label>Parcel Dimensions To</label>
          <input
            type="number"
            name="parcelDimensionsCmTo"
            step=".1"
            onChange={handleChange}
            value={parcelDimensionsPricingData.parcelDimensionsCmTo}
            required
          />
        </div>

        <div className="field">
          <label>Price</label>
          <input
            type="number"
            name="parcelDimensionsPrice"
            step=".1"
            onChange={handleChange}
            value={parcelDimensionsPricingData.parcelDimensionsPrice}
            required
          />
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ParcelDimensionsPricingForm;
