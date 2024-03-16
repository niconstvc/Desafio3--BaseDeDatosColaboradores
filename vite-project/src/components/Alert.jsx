import React from "react";
import Badge from "react-bootstrap/Badge";

const Alert = ({ message, type }) => {
  let alertVariant = "success";

  if (type === "danger") {
    alertVariant = "danger";
  }

  return (
    <div className="alert-container">
      {message && (
        <Badge variant bg={alertVariant} className="badgeStyle">
          {message}
        </Badge>
      )}
    </div>
  );
};

export default Alert;