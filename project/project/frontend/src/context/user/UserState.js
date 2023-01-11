import React from "react";
import { useState } from "react";
import UserContext from "./userContext";

const UserState = (props) => {
 

  const [user, setUser] = useState("");

  // Get all a remark
  const getUserData = async () => {
    // API Call
    const response = await fetch("http://localhost:5000/api/auth/getuser", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    const json = await response.json();

    setUser(json);

    console.log("json: ", json);
    return json;
  };

  return (
    <UserContext.Provider value={{ user, getUserData }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
