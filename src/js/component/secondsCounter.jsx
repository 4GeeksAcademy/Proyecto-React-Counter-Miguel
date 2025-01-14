import React from "react";
import Digit from "./Digit";

const CounterStyles = {

    backgroundColor: "black",
    color: "white",
    fontSize: "xxx-large",
    display: "flex",
    justifyContent: "center",
   


};

const DigitStyles = {

    margin: "5px",
    backgroundColor: "grey",
    borderRadius: '7px',
    padding: "10px",
    height: "70px",
    marginTop:"20px"

}


const SecondsCounter = (props) => {

        return(
            <>

           
            <div className="container" style={CounterStyles}>

                <p><i class="fa-solid fa-clock" style={DigitStyles}></i></p>
                <Digit digits={props.digito6}/>
                <Digit digits={props.digito5}/>
                <Digit digits={props.digito4}/>
                <Digit digits={props.digito3}/> 
                <Digit digits={props.digito2}/>
                <Digit digits={props.digito}/>


            </div>

            </>
        );
}


export default SecondsCounter;