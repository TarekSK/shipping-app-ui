import React from "react";
import { Link, Outlet } from "react-router-dom";
import ParcelMixMaxConfig from "./ParcelMinMaxConfig";

const CourierList = ({ courierData, setSelectedCourier, setIsEdit }) => {
  // Select Courier
  const selectCourier = (index) => {
    // Set Selected Courier
    setSelectedCourier(courierData[index]);
    // Set Is Edit - [True]
    setIsEdit(true);
  };

  return (
    <div>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Courier</th>
            <th>Parcel Min Weight Kg</th>
            <th>Parcel Max Weight Kg</th>
            <th>Parcel Min Dimension cm³</th>
            <th>Parcel Max Dimension cm³</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courierData.map((courier, index) => (
            <tr key={courier.courierId}>
              <td>{courier.courierName}</td>
              <td>
                <ParcelMixMaxConfig number={courier.parcelWeightKgMin} />
              </td>
              <td>
                <ParcelMixMaxConfig number={courier.parcelWeightKgMax} />
              </td>
              <td>
                <ParcelMixMaxConfig number={courier.parcelDimensionCmMin} />
              </td>
              <td>
                <ParcelMixMaxConfig number={courier.parcelDimensionCmMax} />
              </td>
              <td>
                <button
                  className="ui teal button"
                  onClick={() => selectCourier(index)}
                >
                  <i className="edit icon"></i>
                </button>

                <Link
                  className="ui  button"
                  to={`/ParcelWeightPricing/${courier.courierId}`}
                >
                  Parcel Weight Pricing
                </Link>
                <Link
                  className="ui  button"
                  to={`/ParcelDimensionsPricing/${courier.courierId}`}
                >
                  Parcel Dimensions Pricing
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Outlet />
    </div>
  );
};

export default CourierList;
