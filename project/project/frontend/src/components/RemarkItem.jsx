import React, { useContext } from "react";
import remarkContext from "../context/remarks/remarkContext";

const RemarkItem = (props) => {
  const { remark, updateRemark /*, showAlert */} = props;
  const context = useContext(remarkContext);
  const { deleteRemark } = context;
  return (
    <>
      
      <div className="col-md-3 my-2">
        <div
          className="card text-bg-dark "
          style={{
            background: "linear-gradient(135deg, #0F2027 0%, #2C5364  100%)",
            boxShadow:
              "1rem 1rem 3rem rgba(0, 0, 0, 0.4), -1rem -1rem 3rem rgba(0, 0, 0, 0.4)",
          }}
        >
          <div
            style={{
              position: "absolute",
              justifyContent: "flex-end",
              display: "flex",
              right: "0",
            }}
          >
            <span className="badge rounded-pill text-bg-danger mx-1 my-1">
              {remark.tag}
            </span>
          </div>

          <div className="card-body">
            <div className="d-flex align-items-center">
              <h5 className="card-title mt-2">{remark.title}</h5>
            </div>
            <p className="card-text">{remark.description} </p>
            <i
              className="fa-solid fa-pen-to-square  mx-2"
              onClick={() => {
                updateRemark(remark);
              }}
            ></i>
            <i
              className="fa-solid fa-trash-can mx-2"
              onClick={() => {
                deleteRemark(remark._id);
                props.showAlert("Deleted Successfully", "success");
              }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default RemarkItem;
