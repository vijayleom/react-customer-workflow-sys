import React, { useState, useEffect } from "react";

const Workflow = () => {
  
  const [seconds, setSeconds] = useState(0); // State to track workflow
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
          if(prevSeconds < 5){
            prevSeconds = prevSeconds + 1;
          }
          return prevSeconds;
      }); // Increment seconds
    }, 3000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []); // Empty dependency array ensures this runs once on mount

  const workflowStyle = {
      textAlign: 'center',
      marginTop: '20%',
      fontSize: '18px',
      color: 'blue'
  };

  const displayStatus = (secondCount) => {
    console.log(secondCount);
    var value = '- - - - - - - -';
    switch (secondCount) {
        case 0:
          value = "Assessing... ? . ? . ? . ? . ? .";
          break;
        case 1:
          value = "Encashing the points ** ** ** ** ** ** **";
          break;
        case 2:
          value = "Message sent to customer........... => => => =>";
          break;
        case 3:
          value = "....................Finalizing the Order";
          break;
        default:
          value = "Request Completed Successfully";
          break;
      }
      return value;
  };

  return (
    <div>
      <label style={workflowStyle}><b>Workflow Action:</b> {displayStatus(seconds)}</label>
    </div>
  );
};

export default Workflow;