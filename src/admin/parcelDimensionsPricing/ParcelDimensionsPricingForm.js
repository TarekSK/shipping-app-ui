import React, { useState, useEffect } from "react";
import CourierSelectInput from "../courier/CourierSelectInput";
import {
  parcelDimensionPricingCreate,
  parcelDimensionPricingEdit,
} from "../../api/apiParcelDimensionsPricing";
import { ParcelDimensionsPricingModel } from "../model/ParcelDimensionsPricingModel";

const ParcelDimensionsPricingForm = ({
  isEdit,
  setIsEdit,
  selectedParcelDimensionsPricing,
  setIsSave,
}) => {
  // Parcel Dimensions Pricing - State
  const [parcelDimensionsPricingData, setParcelDimensionsPricingData] =
    useState(ParcelDimensionsPricingModel);

  // Check Selected - Parcel Dimensions Pricing
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
      // Parcel Dimension Pricing - Create
      parcelDimensionsPricingCreate(parcelDimensionsPricingData);
    }
    // IsSave
    setIsSave(true);
    // IsEdit - False - [Reset]
    setIsEdit(false);
  };

  // Input - Change
  const handleChange = (e) => {
    setParcelDimensionsPricingData({
      ...parcelDimensionsPricingData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <CourierSelectInput />
    </div>
  );
};

export default ParcelDimensionsPricingForm;
