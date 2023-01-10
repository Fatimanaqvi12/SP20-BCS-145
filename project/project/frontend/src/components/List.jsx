import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const List = (props) => {
  const [orders, setOrders] = useState([]);
  // const navigate = useNavigate();

  const getOrders = async () => {
    // API Call
    const response = await fetch(
      "http://localhost:5000/api/cakes/fetchallcakes",
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
      }
    );
    const json = await response.json();
    setOrders(json);
    console.log("json: ", json);
  };

const handleDelete = async (id) => {
  const response = await fetch(
    `http://localhost:5000/api/cakes/${id}`,
    {
      method: "DELETE",
      
      headers: {
        "Content-Type": "application/json",

      },
     
    }
  );

  
  const json = await response.json();
  const newOrders= orders.filter((ord) => {
    return ord._id !== id;
  });
  setOrders(newOrders);
  console.log("json: ", json);

  
}



  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="text-dark">
      <h2>Listed Orders</h2>
      <Link to="/order" className="btn btn-dark">
        Add New Order
      </Link>
      <table className="table text-light">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Order</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>

          </tr>
        </thead>

        <tbody>
          {orders.map((order) => {
            return (
              <>
                <tr>
                  <td>{order.fname}</td>
                  <td>{order.lname}</td>
                  <td>{order.address}</td>
                  <td>{order.city}</td>
                  <td>{order.number}</td>
                  <td>{order.email}</td>
                  <td>{order.order}</td>
                  <td>{order.date}</td>
                  <td>{order.time}</td>
               
                  <td>
                    <Link
                      to=""
                      onClick= { () => {
                        
                      
                        handleDelete(order._id)
                      }}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default List;

