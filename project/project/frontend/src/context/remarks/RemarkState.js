import React from "react";
import { useState } from "react";
import RemarkContext from "./remarkContext";

const RemarkState = (props) => {
  const host = "http://localhost:5000";
  const remarksInitial = [];

  const [remarks, setRemarks] = useState(remarksInitial);

  // Get all a Note
  const getRemarks = async () => {
    // API Call
    const response = await fetch(`${host}/api/remarks/getallcakes`, {
      method: "GET",
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

    setRemarks(json);
  };

  // Add a remark
  const addRemark = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/remarks/addremarks`, {
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
      body: JSON.stringify({ title, description, tag }),
    });

    const remark = await response.json();
    // Adding a new remark
    setRemarks(remarks.concat(remark));
  };

  // Delete a remark
  const deleteRemark = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/remarks/deleteremark/${id}`, {
      method: "DELETE",
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

    // eslint-disable-next-line no-unused-vars
    const json = response.json();

    const newRemarks = remarks.filter((remark) => {
      return remark._id !== id;
    });
    setRemarks(newRemarks);
  };

  // Edit a Nremarks
  const editRemark = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/remarks/updateremark/${id}`, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ title, description, tag }),
    });
    // eslint-disable-next-line no-unused-vars
    const json = await response.json();

    let newRemarks = JSON.parse(JSON.stringify(remarks));
    // Login to edit in client
    for (let index = 0; index < newRemarks.length; index++) {
      const element = newRemarks[index];
      if (element._id === id) {
        newRemarks[index].title = title;
        newRemarks[index].description = description;
        newRemarks[index].tag = tag;
        break;
      }
    }
    setRemarks(newRemarks);
  };

  return (
    <RemarkContext.Provider
      value={{
        remarks,
        setRemarks,
        addRemark,
        deleteRemark,
        editRemark,
        getRemarks,
      }}
    >
      {props.children}
    </RemarkContext.Provider>
  );
};
export default RemarkState;
