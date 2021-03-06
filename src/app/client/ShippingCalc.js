import React, { useState, useEffect } from "react";
import { courierGet } from "../../api/apiCourier";
import CourierSelect from "./CourierSelect";
import ShippingCalcForm from "./ShippingCalcForm";

const ShippingCalc = () => {
  // Courier - State
  const [courierList, setCourierList] = useState([]);
  // Selected Courier - State
  const [selectedCourier, setSelectedCourier] = useState();

  // Courier List - GET
  useEffect(() => {
    courierListGET();
  }, []);

  // Courier List - GET
  const courierListGET = async () => {
    const response = await courierGet();
    // Set Couriers
    setCourierList(response);
    // Select 1st Courier
    setSelectedCourier(courierList[0]);
  };

  return (
    <div className="ui grid">
      <div className="sixteen wide column">
        <div className="ui segment">
          <h3 className="ui header">Shipping Calculator</h3>
        </div>
      </div>
      <div className="six wide column">
        <div className="ui segment">
          <h3 className="ui header">Choose Courier</h3>
          <CourierSelect
            courierList={courierList}
            setSelectedCourier={setSelectedCourier}
          />
        </div>
        <div className="ten wide column">
          <ShippingCalcForm selectedCourier={selectedCourier} />
        </div>
      </div>
    </div>
  );
};

export default ShippingCalc;
