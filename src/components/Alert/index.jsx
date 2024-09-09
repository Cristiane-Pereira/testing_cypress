import React, { useMemo, useState, useEffect } from "react";

const Alert = ({ type, message, timeout = 300 }) => {
  const [isActive, setIsActive] = useState(true);
  
   useEffect(() => { 
       setTimeout(() => {
           setIsActive(false);
       }, [timeout]);
      
  }, [timeout]);

  const color = useMemo(() => {
    return {
      success: "#28A745",
      error: "#C82333",
      warning: "#FFC107",
    };
  }, [type]);
    
  const colorType = color[type] || "";

  return (
    <>
      {isActive && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "25px",
          }}
        >
          <div
            data-cy="message-alert"
            style={{
              backgroundColor: `${colorType}`,
              color: "#fff",
              width: "130px",
              height: "40px",
              borderRadius: 7,
              fontWeight: "bolder",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {message}
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
