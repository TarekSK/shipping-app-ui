import React, { useState, useEffect } from 'react';
import CourierForm from './CourierForm';
import CourierList from './CourierList';
import { courierGet, courierCreate } from '../../api/apiCourier';

const Courier = () => {
  // Courier - State
  const [courierList, setCourierList] = useState([]);
  // Selected Courier - State
  const [selectedCourier, setSelectedCourier] = useState(null);
  // Is Edit
  const [isEdit, setIsEdit] = useState(false);
  // Is Save
  const [isSave, setIsSave] = useState(false);

  // Courier List - GET - [1st Load and On [isSave] Changed]
  useEffect(() => {
    courierListGET();
  }, [isSave]);

  // Courier List - GET
  const courierListGET = async () => {
    const response = await courierGet();
    setCourierList(response);
  };

  // New Courier
  const newCourier = () => {
    // IsEdit - False
    setIsEdit(false);
  };

  return (
    <div className="ui grid">
      <div className="twelve wide column">
        <div className="ui segment">
          <h2 className="ui left floated header">Couriers</h2>
          <div
            className="ui right floated teal labeled icon button"
            onClick={() => newCourier()}
          >
            Create New Courier
            <i className="add icon"></i>
          </div>
          <CourierList
            courierData={courierList}
            setSelectedCourier={setSelectedCourier}
            setIsEdit={setIsEdit}
          />
        </div>
      </div>
      <div className="four wide column">
        <div className="ui segment">
          <h3 className="ui header">Courier</h3>
          <CourierForm
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            courierList={courierList}
            setCourierList={setCourierList}
            selectedCourier={selectedCourier}
            setIsSave={setIsSave}
          />
        </div>
      </div>
    </div>
  );
};

export default Courier;
