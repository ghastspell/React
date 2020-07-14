import React from "react";

const Carousal = (props) => {
  console.log(props.data);
  return (
    <div>
      {props.data.map((info) => {
        return (
          <div>
            <p> Firstname : {info.fname}</p>
            <p> LastName :{info.lname}</p>
            <p> Address :{info.address}</p>
            <p> PhoneNumber:{info.phonenumber}</p>
            <p> School :{info.school}</p>
          </div>
        );
      })}
      {props.car.map((ooe) => {
        return (
          <div>
            <p> ooe : {ooe.name} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Carousal;
