import React, { useEffect, useState } from "react";
import { courierGet } from "../../api/apiCourier";

const CourierSelectInput = ({ formData, setSelectedCourier }) => {
  // Courier - State
  const [courierList, setCourierList] = useState([]);

  // Courier List - GET
  useEffect(() => {
    courierListGET();
  }, []);

  // Courier List - GET
  const courierListGET = async () => {
    const response = await courierGet();
    setCourierList(response);
  };

  // Handle Change
  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectedCourier({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="ui segment">
      <div className="field">
        <label>Courier</label>
        <select
          className="ui fluid dropdown"
          name="courierId"
          onChange={(e) => handleChange(e)}
          value={formData.courierId}
        >
          {courierList.map((courier, index) => (
            <option key={courier.courierId} value={courier.courierId}>
              {courier.courierName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CourierSelectInput;
