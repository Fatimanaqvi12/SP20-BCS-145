// import React from "react";
// import { useState } from "react";
// import CakeContext from "./cakeContext";

// const CakeState = (props) => {
//   const host = "http://localhost:5000";
//   const cakesInitial = [];

//   const [cakes, setCakes] = useState(cakesInitial);

//   // Get all a Note
//   const getCakes = async () => {
//     // API Call
//     const response = await fetch(`${host}/api/cakes/getallcakes`, {
//       method: "GET",
//       mode: "cors",
//       cache: "no-cache",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token": localStorage.getItem("token"),
//       },
//       redirect: "follow",
//       referrerPolicy: "no-referrer",
//     });
//     const json = await response.json();

//     setCakes(json);
//   };

//   // Add a Note
//   const addCake = async (title, description, tag) => {
//     // API Call
//     const response = await fetch(`${host}/api/cakes/addcakes`, {
//       method: "POST",
//       mode: "cors",
//       cache: "no-cache",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token": localStorage.getItem("token"),
//       },
//       redirect: "follow",
//       referrerPolicy: "no-referrer",
//       body: JSON.stringify({ title, description, tag }),
//     });

//     const cake = await response.json();
//     // Adding a new note
//     setCakes(cakes.concat(cake));
//   };

//   // Delete a Note
//   const deleteCake = async (id) => {
//     // API Call
//     const response = await fetch(`${host}/api/cakes/deletecake/${id}`, {
//       method: "DELETE",
//       mode: "cors",
//       cache: "no-cache",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token": localStorage.getItem("token"),
//       },
//       redirect: "follow",
//       referrerPolicy: "no-referrer",
//     });

//     // eslint-disable-next-line no-unused-vars
//     const json = response.json();

//     const newCakes = cakes.filter((cake) => {
//       return cake._id !== id;
//     });
//     setCakes(newCakes);
//   };

//   // Edit a Note
//   const editCake= async (id, title, description, tag) => {
//     // API Call
//     const response = await fetch(`${host}/api/cakes/updatecake/${id}`, {
//       method: "PUT",
//       mode: "cors",
//       cache: "no-cache",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token": localStorage.getItem("token"),
//       },
//       redirect: "follow",
//       referrerPolicy: "no-referrer",
//       body: JSON.stringify({ title, description, tag }),
//     });
//     // eslint-disable-next-line no-unused-vars
//     const json = await response.json();

//     let newCakes = JSON.parse(JSON.stringify(cakes));
//     // Login to edit in client
//     for (let index = 0; index < newCakes.length; index++) {
//       const element = newCakes[index];
//       if (element._id === id) {
//         newCakes[index].title = title;
//         newCakes[index].description = description;
//         newCakes[index].tag = tag;
//         break;
//       }
//     }
//     setCakes(newCakes);
//   };

//   return (
//     <CakeContext.Provider
//       value={{
//         cakes,
//         setCakes,
//         addCake,
//         deleteCake,
//         editCake,
//         getCakes,
//       }}
//     >
//       {props.children}
//     </CakeContext.Provider>
//   );
// };
// export default CakeState;
