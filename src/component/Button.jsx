import React from "react";

const Button = ({textvalue}) => {
  return (
    <>
      <button style={{width:"50%",height:"2rem" ,backgroundColor:"black",color:"white"}}>{textvalue}</button>
    </>
  );
};

export default Button;
