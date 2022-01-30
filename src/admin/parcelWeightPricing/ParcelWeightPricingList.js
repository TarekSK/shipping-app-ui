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
    <div className="ui grid">
      <div className="sixteen wide column">
        <div className="ui cards">
          {parcelWeightPricingData.map((parcelWeightPricing, index) => (
            <div
              className="card "
              key={parcelWeightPricing.parcelWeightPricingId}
            >
              <div className="content">
                <div className="header">{parcelWeightPricing.courier}</div>
                <div className="description">
                  <div>
                    <div>parcelWeightKgFrom</div>
                    <div> {parcelWeightPricing.parcelWeightKgFrom}</div>
                  </div>
                  <div>
                    <div>parcelWeightKgTo</div>
                    <div> {parcelWeightPricing.parcelWeightKgTo}</div>
                  </div>
                  <div>
                    <div className="metadata">parcelWeightPrice</div>
                    <div>{parcelWeightPricing.parcelWeightPrice}</div>
                  </div>
                  <div>
                    <div className="summary">parcelWeightIsAddKgPrice</div>
                    <div> {parcelWeightPricing.parcelWeightIsAddKgPrice}</div>
                  </div>
                  <div>
                    <div className="metadata">parcelKgPrice</div>
                    <div>{parcelWeightPricing.parcelKgPrice}</div>
                  </div>
                </div>
              </div>
              <div
                className="ui bottom attached button"
                onClick={() => selectParcelWeightPricing(index)}
              >
                <i className="edit icon"></i>
                Edit
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParcelWeightPricingList;
