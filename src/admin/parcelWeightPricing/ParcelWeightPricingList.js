import React from "react";

const ParcelWeightPricingList = ({
  parcelWeightPricingData,
  setSelectedParcelWeightPricing,
  setIsEdit,
}) => {
  // Select ParcelWeightPricing
  const selectParcelWeightPricing = (index) => {
    // Set Selected ParcelWeightPricing
    setSelectedParcelWeightPricing(parcelWeightPricingData[index]);
    // Set Is Edit - [True]
    setIsEdit(true);
  };
  return (
    <div className="">
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Parcel Weight From</th>
            <th>Parcel Weight To</th>
            <th>Price</th>
            <th>Add Price Per KG ?</th>
            <th>Price Per KG</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {parcelWeightPricingData.map((parcelPricing, index) => (
            <tr key={parcelPricing.parcelWeightPricingId}>
              <td>{parcelPricing.parcelWeightKgFrom}</td>
              <td>{parcelPricing.parcelWeightKgTo}</td>
              <td>{parcelPricing.parcelWeightPrice}</td>
              <td>
                {parcelPricing.parcelWeightIsAddKgPrice ? (
                  <i className=" check icon"></i>
                ) : (
                  <i className="x icon"></i>
                )}
              </td>
              <td>{parcelPricing.parcelKgPrice}</td>

              <td>
                <button
                  className="ui teal button"
                  onClick={() => selectParcelWeightPricing(index)}
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

export default ParcelWeightPricingList;
