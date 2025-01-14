import React from "react";

const DigitStyles = {

    margin: "5px",
    backgroundColor: "grey",
    borderRadius: '7px',
    paddingBottom: "20px",
    height: "70px",
    paddingRight: "10px",
    paddingLeft: "10px",
    marginTop: "20px"

}

const Digit = (props) =>{

        
        return(

            <p style={DigitStyles}>{props.digits}</p>

        );



};

export default Digit;