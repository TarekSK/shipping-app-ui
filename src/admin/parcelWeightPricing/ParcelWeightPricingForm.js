import React, { useState, useEffect } from "react";
import {
  parcelWeightPricingCreate,
  parcelWeightPricingEdit,
} from "../../api/apiParcelWeightPricing";
import CourierSelectInput from "../courier/CourierSelectInput";
import { ParcelWeightPricingModel } from "../model/ParcelWeightPricingModel";

const ParcelWeightPricingForm = ({
  isEdit,
  setIsEdit,
  selectedParcelWeightPricing,
  setIsSave,
}) => {
  // Parcel Weight Pricing - State
  const [parcelWeightPricingData, setParcelWeightPricingData] = useState(
    ParcelWeightPricingModel
  );

  // Selected Courier - State
  const [selectedCourierId, setSelectedCourierId] = useState(
    parcelWeightPricingData.courier.courierId
  );

  // Add Price Per KG
  const [isAddPricePerKG, setIsAddPricePerKG] = useState(
    parcelWeightPricingData.parcelWeightIsAddKgPrice
  );

  // Check Selected ParcelWeightPricing
  useEffect(() => {
    if (isEdit) {
      setParcelWeightPricingData(selectedParcelWeightPricing);
    } else {
      setParcelWeightPricingData(ParcelWeightPricingModel);
    }
  }, [selectedParcelWeightPricing, isEdit]);

  // Selected Courier
  useEffect(() => {
    setParcelWeightPricingData({
      ...parcelWeightPricingData,
      courierId: selectedCourierId,
    });
  }, [selectedCourierId]);

  // Parcel Weight Pricing - Save
  const parcelWeightPricingSave = (e) => {
    console.log(parcelWeightPricingData);

    // Disable Reload
    e.preventDefault();

    // Parcel Weight Pricing - Save
    if (isEdit) {
      // Parcel Weight Pricing - Edit
      parcelWeightPricingEdit(parcelWeightPricingData);
    } else {
      // Parcel Weight Pricing - Create
      const v1 = parcelWeightPricingCreate(parcelWeightPricingData);
    }
    // IsSave
    setIsSave(true);
    // IsEdit - False - [Reset]
    setIsEdit(false);
  };

  // Input - Change
  const handleChange = (e) => {
    // Is Add Price Per KG
    if (e.target.name === "parcelWeightIsAddKgPrice") {
      // Set Is Add Price Per KG. [Depend on User Input]
      setIsAddPricePerKG(e.target.checked);
      // Update State
      setParcelWeightPricingData({
        ...parcelWeightPricingData,
        [e.target.name]: e.target.checked,
      });
    } else {
      setParcelWeightPricingData({
        ...parcelWeightPricingData,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div>
      <form className="ui form" onSubmit={(e) => parcelWeightPricingSave(e)}>
        <CourierSelectInput
          formData={parcelWeightPricingData}
          setFormData={setParcelWeightPricingData}
        />
        <div className="field">
          <label>Parcel Weight From</label>
          <input
            type="number"
            name="parcelWeightKgFrom"
            onChange={handleChange}
            value={parcelWeightPricingData.parcelWeightKgFrom}
            required
          />
        </div>
        <div className="field">
          <label>Parcel Weight To</label>
          <input
            type="number"
            name="parcelWeightKgTo"
            step=".1"
            onChange={handleChange}
            value={parcelWeightPricingData.parcelWeightKgTo}
            required
          />
        </div>

        <div className="field">
          <label>Price</label>
          <input
            type="number"
            name="parcelWeightPrice"
            step=".1"
            onChange={handleChange}
            value={parcelWeightPricingData.parcelWeightPrice}
            required
          />
        </div>

        <div className="field">
          <label>Add Price Per KG ?</label>
          <input
            type="checkbox"
            name="parcelWeightIsAddKgPrice"
            onChange={handleChange}
            className="ui center"
            value={parcelWeightPricingData.parcelWeightIsAddKgPrice}
          />
        </div>

        <div className="field">
          <label>Price Per KG</label>
          <input
            type="number"
            name="parcelKgPrice"
            onChange={handleChange}
            value={parcelWeightPricingData.parcelKgPrice}
            disabled={!isAddPricePerKG}
          />
        </div>

        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ParcelWeightPricingForm;
