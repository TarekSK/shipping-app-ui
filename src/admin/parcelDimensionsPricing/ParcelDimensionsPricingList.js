import React from "react";

const ParcelDimensionsPricingList = ({
  parcelDimensionsPricingData,
  setSelectedParcelDimensionsPricing,
  setIsEdit,
}) => {
  // Select ParcelDimensionsPricing
  const selectParcelDimensionsPricing = (index) => {
    // Set Selected ParcelDimensionsPricing
    setSelectedParcelDimensionsPricing(parcelDimensionsPricingData[index]);
    // Set Is Edit - [True]
    setIsEdit(true);
  };
  return (
    <div className="">
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Parcel Dimensions Cm. From</th>
            <th>Parcel Dimensions Cm. To</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {parcelDimensionsPricingData.map((parcelPricing, index) => (
            <tr key={parcelPricing.parcelDimensionsPricingId}>
              <td>{parcelPricing.parcelDimensionsCmFrom}</td>
              <td>{parcelPricing.parcelDimensionsCmTo}</td>
              <td>{parcelPricing.parcelDimensionsPrice}</td>
              <td>
                <button
                  className="ui teal button"
                  onClick={() => selectParcelDimensionsPricing(index)}
                >
                  <i className="edit icon"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParcelDimensionsPricingList;
