import React, { useState, useEffect } from "react";
import ParcelWeightPricingForm from "./ParcelWeightPricingForm";
import ParcelWeightPricingList from "./ParcelWeightPricingList";
import { parcelWeightPricingGet } from "../../api/apiParcelWeightPricing";

const ParcelWeightPricing = () => {
  // ParcelWeightPricingList - State
  const [parcelWeightPricingList, setParcelWeightPricingList] = useState([]);
  // Selected ParcelWeightPricingList - State
  const [selectedParcelWeightPricing, setSelectedParcelWeightPricing] =
    useState(null);
  // Is Edit
  const [isEdit, setIsEdit] = useState(false);
  // Is Save
  const [isSave, setIsSave] = useState(false);

  // ParcelWeightPricing List - GET - [1st Load and On [isSave] Changed]
  useEffect(() => {
    parcelWeightPricingListGET();
  }, [isSave]);

  // ParcelWeightPricing List - GET
  const parcelWeightPricingListGET = async () => {
    const response = await parcelWeightPricingGet();
    setParcelWeightPricingList(response);
  };

  // New ParcelWeightPricing
  const newParcelWeightPricing = () => {
    // IsEdit - False
    setIsEdit(false);
  };

  return (
    <div className="ui grid">
      <div className="twelve wide column">
        <div className="ui segment">
          <div className="ui">
            <h2 className="ui left floated header">Parcel Weight Pricing</h2>
            <div
              className="ui right floated teal labeled icon button"
              onClick={() => newParcelWeightPricing()}
            >
              Create Parcel Weight Pricing
              <i className="add icon"></i>
            </div>
          </div>
          <ParcelWeightPricingList
            parcelWeightPricingData={parcelWeightPricingList}
            setSelectedParcelWeightPricing={setSelectedParcelWeightPricing}
            setIsEdit={setIsEdit}
          />
        </div>
      </div>
      <div className="four wide column">
        <div className="ui segment">
          <ParcelWeightPricingForm
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            selectedParcelWeightPricing={selectedParcelWeightPricing}
            setIsSave={setIsSave}
          />
        </div>
      </div>
    </div>
  );
};

export default ParcelWeightPricing;
