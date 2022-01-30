import React, { useEffect, useState } from "react";
import { courierCreate, courierEdit } from "../../api/apiCourier";
import { CourierModel } from "../model/CourierModel";

const CourierForm = ({ isEdit, setIsEdit, selectedCourier, setIsSave }) => {
  // Courier Data - State
  const [courierData, setCourierData] = useState(CourierModel);

  // Check Selected Courier
  useEffect(() => {
    if (isEdit) {
      setCourierData(selectedCourier);
    } else {
      setCourierData(CourierModel);
    }
  }, [selectedCourier, isEdit]);

  // Courier - Save
  const courierSave = (e) => {
    // Disable Reload
    e.preventDefault();

    // Courier - Save
    if (isEdit) {
      // Courier - Edit
      courierEdit(courierData);
    } else {
      // Courier - Create
      courierCreate(courierData);
    }
    // IsSave
    setIsSave(true);
    // IsEdit - False - [Reset]
    setIsEdit(false);
  };

  // Input - Change
  const handleChange = (e) => {
    setCourierData({
      ...courierData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="ui form" onSubmit={(e) => courierSave(e)}>
      <div className="field">
        <label>Courier Name</label>
        <input
          type="text"
          name="courierName"
          onChange={handleChange}
          value={courierData.courierName}
          required
        />
      </div>
      <div className="field">
        <label>Parcel Min Weight Kg</label>
        <input
          type="number"
          name="parcelWeightKgMin"
          step=".1"
          onChange={handleChange}
          value={courierData.parcelWeightKgMin}
          required
        />
      </div>

      <div className="field">
        <label>Parcel Max Weight Kg</label>
        <input
          type="number"
          name="parcelWeightKgMax"
          step=".1"
          onChange={handleChange}
          value={courierData.parcelWeightKgMax}
          required
        />
      </div>

      <div className="field">
        <label>Parcel Min Dimension cm³</label>
        <input
          type="number"
          name="parcelDimensionCmMin"
          onChange={handleChange}
          value={courierData.parcelDimensionCmMin}
          required
        />
      </div>

      <div className="field">
        <label>Parcel Max Dimension cm³</label>
        <input
          type="number"
          name="parcelDimensionCmMax"
          onChange={handleChange}
          value={courierData.parcelDimensionCmMax}
          required
        />
      </div>

      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default CourierForm;
