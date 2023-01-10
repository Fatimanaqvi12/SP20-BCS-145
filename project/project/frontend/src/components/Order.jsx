import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Order = () => {
  const navigate = useNavigate();
  // const updateOrder = props.updateOrder

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [order, setOrder] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const onFnameChange = (event) => {
    setFname(event.target.value);
  };

  const onLnameChange = (event) => {
    setLname(event.target.value);
  };

  const onAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const onCityChange = (event) => {
    setCity(event.target.value);
  };

  const onNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onOrderChange = (event) => {
    setOrder(event.target.value);
  };

  const onTimeChange = (event) => {
    setTime(event.target.value);
  };

  const onDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // API Call

      const response = await fetch("http://localhost:5000/api/cakes/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname: fname,
          lname: lname,
          address: address,
          city: city,
          number: number,
          email: email,
          order: order,
          time: time,
          date: date
        }),
      });

      const json = await response.json();
      console.log(json);
      navigate("/list");
    }

    
    
  return (
    <div className="text-light">
      <div className="text-center">
        <h1>
          <u>Order Form</u>
        </h1>
      </div>

      <div>
        <form className="container" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputfname"
                name="fname"
                value={fname}
                onChange={onFnameChange}
              />
            </div>
            <div className="col-md-6">
              <label for="inputPassword" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputlname"
                name="lname"
                value={lname}
                onChange={onLnameChange}
              />
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                name="address"
                value={address}
                onChange={onAddressChange}
              />
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                name="city"
                value={city}
                onChange={onCityChange}
              />
            </div>
            <div className="col-md-6">
              <label for="inputCity" className="form-label">
                Contact Number
              </label>
              <input
                type="text"
                className="form-control"
                id="inputNumber"
                name="number"
                value={number}
                onChange={onNumberChange}
              />
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
                value={email}
                onChange={onEmailChange}
              />
            </div>

            <div className="col-md-4">
              <label for="inputState" className="form-label">
                Order
              </label>
              <select id="inputState" className="form-select" name="order" onChange={onOrderChange}>
                <option selected>Choose...</option>
                <option value="Cake">Cake</option>
                <option value="Cupcake">Cupcake</option>
              </select>

            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">
                Delivery time
              </label>
              <input
                type="time"
                className="form-control"
                id="inputTime"
                name="time"
                value={time}
                onChange={onTimeChange}
              />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">
                Delivery Date
              </label>
              <input
                type="date"
                className="form-control"
                id="inputDate"
                name="date"
                value={date}
                onChange={onDateChange}
              />
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <div className="col-12"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Order;
