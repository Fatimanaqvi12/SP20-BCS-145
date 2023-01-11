import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import remarkContext from "../context/remarks/remarkContext";
import AddRemark from "./AddRemark";
import RemarkItem from "./RemarkItem";

const Remarks = (props) => {
  const showAlert = props.showAlert;
  const context = useContext(remarkContext);
  const { remarks, getRemarks, editRemark } = context;
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getRemarks();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);

  const updateRemark = (currentRemark) => {
    ref.current.click();
    setRemark({
      id: currentRemark._id,
      etitle: currentRemark.title,
      edescription: currentRemark.description,
      etag: currentRemark.tag,
    });
  };

  const [remark, setRemark] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "General",
  });

  const handleClick = (e) => {
    e.preventDefault();
    editRemark(remark.id, remark.etitle, remark.edescription, remark.etag);
    refClose.current.click();
    showAlert("Updated Successfully", "success");
  };

  const onChange = (event) => {
    setRemark({ ...remark, [event.target.name]: event.target.value });
  };

  return (
    <>
      <AddRemark showAlert={props.showAlert} />

      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      />
      <div
        className="modal fade text-light"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content text-bg-dark ">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Remark
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={remark.etitle}
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={3}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    rows={2}
                    id="edescription"
                    name="edescription"
                    value={remark.edescription}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>

             
              </form>
            </div>
            <div className="modal-footer">
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #485563 0%,#29323c  100%)",
                }}
              >
                {" "}
                <button
                  type="button"
                  className="btn btn-light text-light"
                  style={{
                    background:
                      "linear-gradient(135deg, #485563 0%,#29323c  100%)",
                  }}
                  data-bs-dismiss="modal"
                  ref={refClose}
                >
                  Close
                </button>
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #485563 0%,#29323c  100%)",
                }}
              >
                <button
                  type="button"
                  className="btn btn-light text-light"
                  style={{
                    background:
                      "linear-gradient(135deg, #0575E6 0%,#021B79  100%)",
                  }}
                  onClick={handleClick}
                  disabled={
                    remark.etitle.length < 3 || remark.edescription.length < 5
                  }
                >
                  Update Remark
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 row text-light">
        <div className="d-flex justify-content-center">
          <h2>Your Remark</h2>
        </div>
        <div className="container mt-2 mx-2">
          {remarks.length === 0 && "No Remarks to display..."}
        </div>
        {remarks.map((remark) => {
          return (
            <RemarkItem
              key={remark._id}
              updateRemark={updateRemark}
              remark={remark}
              showAlert={props.showAlert}
            />
          );
        })}
      </div>
    </>
  );
};

export default Remarks;
