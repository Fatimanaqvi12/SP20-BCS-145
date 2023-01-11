import React from "react";
import Remarks from "./Remarks";

const Home = (props) => {
  const { showAlert } = props;
  return (
    <div className="container my-3">
      <Remarks showAlert={showAlert} />
    </div>
  );
};

export default Home;
