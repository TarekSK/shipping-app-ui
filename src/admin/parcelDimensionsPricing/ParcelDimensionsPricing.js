import React, { useState, useEffect } from "react";
import ParcelDimensionsPricingForm from "./ParcelDimensionsPricingForm";
import ParcelDimensionsPricingList from "./ParcelDimensionsPricingList";
import { parcelDimensionsPricingGet } from "../../api/apiParcelDimensionsPricing";
import { useParams } from "react-router-dom";

const ParcelDimensionsPricing = () => {
  // CourierId
  let courierId = useParams().courierId;

  // ParcelDimensionsPricingList - State
  const [parcelDimensionsPricingList, setParcelDimensionsPricingList] =
    useState([]);
  // Selected ParcelDimensionsPricingList - State
  const [selectedParcelDimensionsPricing, setSelectedParcelDimensionsPricing] =
    useState(null);
  // Is Edit
  const [isEdit, setIsEdit] = useState(false);
  // Is Save
  const [isSave, setIsSave] = useState(false);

  // ParcelDimensionsPricing List - GET - [1st Load and On [isSave] Changed]
  useEffect(() => {
    console.log("SAVE Changed");
    parcelDimensionsPricingListGET();
  }, [isSave]);

  // ParcelDimensionsPricing List - GET
  const parcelDimensionsPricingListGET = async () => {
    const response = await parcelDimensionsPricingGet(courierId);
    setParcelDimensionsPricingList(response);
  };

  // New ParcelDimensionsPricing
  const newParcelDimensionsPricing = () => {
    // IsEdit - False
    setIsEdit(false);
  };

  return (
    <div className="ui grid">
      <div className="twelve wide column">
        <div className="ui segment">
          <h2 className="ui left floated header">Parcel Dimensions Pricing</h2>
          <div
            className="ui right floated teal labeled icon button"
            onClick={() => newParcelDimensionsPricing()}
          >
            Create Parcel Dimensions Pricing
            <i className="add icon"></i>
          </div>
          <ParcelDimensionsPricingList
            parcelDimensionsPricingData={parcelDimensionsPricingList}
            setSelectedParcelDimensionsPricing={
              setSelectedParcelDimensionsPricing
            }
            setIsEdit={setIsEdit}
          />
        </div>
      </div>

      <div className="four wide column">
        <div className="ui segment">
          <h3 className="ui header">Parcel Dimensions Pricing</h3>
          <ParcelDimensionsPricingForm
            courierId={courierId}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            selectedParcelDimensionsPricing={selectedParcelDimensionsPricing}
            setIsSave={setIsSave}
          />
        </div>
      </div>
    </div>
  );
};

export default ParcelDimensionsPricing;
