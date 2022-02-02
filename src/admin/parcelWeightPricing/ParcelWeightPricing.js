import React, { useState, useEffect } from "react";
import ParcelWeightPricingForm from "./ParcelWeightPricingForm";
import ParcelWeightPricingList from "./ParcelWeightPricingList";
import { parcelWeightPricingGet } from "../../api/apiParcelWeightPricing";
import { useParams } from "react-router-dom";

const ParcelWeightPricing = () => {
  // CourierId
  let courierId = useParams().courierId;

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
    setTimeout(function () {
      parcelWeightPricingListGET();
    }, 500);
  }, [isSave]);

  // ParcelWeightPricing List - GET
  const parcelWeightPricingListGET = async () => {
    const response = await parcelWeightPricingGet(courierId);
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
          <h2 className="ui left floated header">Parcel Weight Pricing</h2>
          <div
            className="ui right floated teal labeled icon button"
            onClick={() => newParcelWeightPricing()}
          >
            Create Parcel Weight Pricing
            <i className="add icon"></i>
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
          <h3 className="ui header">Parcel Weight Pricing</h3>
          <ParcelWeightPricingForm
            courierId={courierId}
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
