import React from "react";

const AlertBox = ({ title, message, onClose, type = "success" }) => {
  const iconClass = type === "success" ? "swal-icon--success" : "swal-icon--warning";
  const buttonClass = type === "success" ? "swal-button--confirm" : "swal-button--warning";

  return (
    <div className="swal-overlay swal-overlay--show-modal">
      <div className="swal-modal">
        <div className={`swal-icon ${iconClass}`}>
          {type === "success" ? (
            <>
              <span className="swal-icon--success__line swal-icon--success__line--long"></span>
              <span className="swal-icon--success__line swal-icon--success__line--tip"></span>
              <div className="swal-icon--success__ring"></div>
              <div className="swal-icon--success__hide-corners"></div>
            </>
          ) : (
            <>
              <span className="swal-icon--warning__body">!</span>
              <div className="swal-icon--warning__ring"></div>
            </>
          )}
        </div>
        <div className="swal-title">{title}</div>
        <div className="swal-text">{message}</div>
        <div className="swal-footer">
          <div className="swal-button-container">
            <button className={`swal-button ${buttonClass}`} onClick={onClose}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertBox;