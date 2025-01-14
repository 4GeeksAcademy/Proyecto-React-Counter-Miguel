//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let counter = 0 ;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;

//setInterval(()=>{
//    if (counter == 10 ) {
//        counter2++;
//        counter = 0;
//    }
//    if (counter2 == 10) {
//        counter3++;
//        counter2 = 0;
//    }
//    if (counter3 == 10) {
//        counter4++;
//        counter3 = 0;
//    }
//    if (counter4 == 10) {
//        counter5++;
//        counter4 = 0;
//    }
//    if (counter5 == 10) {
//        counter6++;
//        counter5 = 0;
//    }
//   
//    ReactDOM.createRoot(document.getElementById('app')).render(<Home counter={counter} counter2={counter2} counter3={counter3} counter4={counter4} counter5={counter5} counter6={counter6}/>);
//    counter++;
//   
//},1000);

ReactDOM.createRoot(document.getElementById('app')).render(<Home />);
   counter++;

