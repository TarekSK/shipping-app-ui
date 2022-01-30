import react, { useState } from "react";

const CourierSelect = ({ courierList, setSelectedCourier }) => {
  // IsActive
  const [isActiveIndex, setIsActiveIndex] = useState(0);

  // Courier - Select
  const courierSelect = (index) => {
    setSelectedCourier(courierList[index]);
    setIsActiveIndex(index);
  };

  // Rendered List
  const renderedList = courierList.map((courier, index) => (
    <a
      key={courier.courierId}
      className={"item " + `${isActiveIndex === index ? "active" : ""}`}
      onClick={() => courierSelect(index)}
    >
      {courier.courierName}
    </a>
  ));

  return (
    <div>
      <div>
        <div className="ui vertical pointing menu">{renderedList}</div>
      </div>
    </div>
  );
};

export default CourierSelect;
