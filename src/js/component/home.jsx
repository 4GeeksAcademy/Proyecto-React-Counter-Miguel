import React, { useEffect, useState } from "react";
import SecondsCounter from "./secondsCounter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {

	// [variable,funcion que modifica la variable] = useState(el valor inicial de la variable)
	const [count, setCount] = useState(0);
	const [inputValue, setInputValue] = useState("");
	const [isCountingDown, setIsCountingDown] = useState(false);
	const [isStop, setIsStop] = useState(false);
	const [alerta,setAlerta] = useState(null);
	//Usamos el Hook de React useEffect para trabajar con el codigo una vez renderizado
	//nos permiten ejecutar un trozo de código según el momento en el que se encuentre el ciclo de vida de nuestro componente
	useEffect(() => {

		if (count == NaN) {
			console.log("Hola");
			
		}
		//Creamos una variable con el metodo setInterval para cambiar el valor cada segundo
		//Dependiendo si estamos contando hacia arriba o abajo sumara o restara
		let interval = null;
		
		if(!isStop){
			interval = setInterval(() => {

				setCount(prev => {
					if (isCountingDown) {
						if (prev > 0) {
							if (prev == alerta) {
								alert(`Te quedan ${alerta} segundos`);
							}
							return prev - 1;	
						}
						else{
							clearInterval(interval);
							return 0;
						}
					}
					else{
						if (alerta && prev + 1 === alerta) {
							alert (`Llegaste al alert : ${alerta}`);
						}
						return prev + 1;
					}
				});
			},1000);

		}
		if (counter == NaN) {
			alert("Debes introducir un numero");
			clearInterval(interval);
		}
		else{
			clearInterval(interval);
		}
		return () => {
			clearInterval(interval);
		};
	},[isCountingDown,alerta,isStop]);

	//Funcion que va a cambiar el valor del counter
	const handleInputChange = (e) => {
		//Guardamos el valor del input transformado en un numero entero
		const value = e.target.value;
		if (value === "" || isNaN(value)) {
			alert("Debes introducir un numero");
			setCount(0);
			setInputValue("");
		}
		else{
			const numValue = parseInt(value);
			//Modificamos los valores del counter y el input por el valor que nos han introducido en el input
			setInputValue(numValue);
			setCount(numValue);
		}
	

	};
	//Funcion q	ue vamos a usar para cambiar el tipo de cuenta que vamos a realizar
	const toggleCountingMode = () => {

		setIsCountingDown(!isCountingDown);
	};

	//Creamos la funcion que va a parar el contador
	const handleStopCounter = () => {
		setIsStop(!isStop);
	};
	
	const counter6 = Math.floor((count%1000000)/100000);
	const counter5 = Math.floor((count%100000)/10000);
	const counter4 = Math.floor((count%10000)/1000);
	const counter3 = Math.floor((count%1000)/100);
	const counter2 = Math.floor((count%100)/10);
	const counter = Math.floor((count%10)/1);

	console.log(count);
	

	return (
		<>
		
			<div className="text-center">
				<SecondsCounter digito={counter} digito2={counter2} digito3={counter3} digito4={counter4} digito5={counter5} digito6={counter6} />
			</div>
		
			<div className="container d-flex justify-content-around">
				<div className="row col-4">
				<input type="number" value={inputValue} placeholder="Introduce un numero para contar" onChange={handleInputChange}/>
				<input type="number" placeholder="Introduce cuando salta la alerta" value={alerta} onChange={(e) => setAlerta(parseInt(e.target.value))}/>
				<button type="button" className="btn btn-primary" onClick={toggleCountingMode}>
					{isCountingDown ? "Switch to counting Up" : "Switch to counting Down"}
				</button>
				<button type="button" className="btn btn-secondary" onClick={handleStopCounter}>
					{isStop ? "Start the counter" : "Stop the counter"}
				</button>

				</div>
				
				
			</div>
		</>
		
	);
};

export default Home;

