import React, { useContext } from "react";
import { useState } from "react";
import remarkContext from "../context/remarks/remarkContext";

const AddRemark = (props) => {
  const context = useContext(remarkContext);
  const { addRemark } = context;

  const [remark, setRemark] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addRemark(remark.title, remark.description, remark.tag);
    setRemark({
      title: "",
      description: "",
      tag: "",
    });
    props.showAlert("Remarks Added Successfully", "success");
  };

  const onChange = (event) => {
    setRemark({ ...remark, [event.target.name]: event.target.value });
  };
  return (
    
    <div className="container text-light ">
      <div className="d-flex justify-content-center">
        <h2>Customer Feedback</h2>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Item
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Add Item (Cupcake or cake)..."
            id="title"
            name="title"
            value={remark.title}
            aria-describedby="emailHelp"
            onChange={onChange}
            minLength={3}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Remarks
          </label>
          <textarea
            type="text"
            className="form-control"
            rows={3}
            placeholder="Write some Remarks..."
            id="description"
            name="description"
            value={remark.description}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>


        <div id="button" className="rowForm">
          <button
            disabled={remark.title.length < 3 || remark.description.length < 5}
            type="submit"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </form>

      <hr />
    </div>
  );
};

export default AddRemark;
