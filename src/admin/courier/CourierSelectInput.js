import React, { useEffect, useState } from "react";
import { courierGet } from "../../api/apiCourier";

const CourierSelectInput = ({ formData, setFormData }) => {
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
    let courierIndex =
      e.target.options[e.target.selectedIndex].getAttribute(
        "data-courier-index"
      );
    setFormData({
      ...formData,
      [e.target.name]: courierList[courierIndex],
      courierId: courierList[courierIndex].courierId,
    });
  };

  return (
    <div className="ui segment">
      <div className="field">
        <label>Courier</label>
        <select
          className="ui fluid dropdown"
          name="courier"
          onChange={(e) => handleChange(e)}
          value={formData.courierId}
        >
          {courierList.map((courier, index) => (
            <option
              key={courier.courierId}
              value={courier.courierId}
              data-courier-index={index}
            >
              {courier.courierName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CourierSelectInput;
