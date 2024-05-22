import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

const [inputValue,setInputValue] = useState("");
const [Tareas, setTareas] = useState([]);


	return (
		<div className="Container">
            <h1>Lista de TODO</h1>
			  <ul>
				<li>
					<input type="text" placeholder=" Indica la tarea"
					onChange={(Event) => setInputValue(Event.target.value)}
					value={inputValue}
					onKeyUp={(Event) => { if (Event.key === "Enter") 
						{ setTareas(Tareas.concat(inputValue));
						setInputValue("") }}}>

					</input>
					
				
				</li>

				{Tareas.map((item,index) => (
					<li key={index}>
						{item}
						<button onClick={() => setTareas(Tareas.filter((t, tindex) => index != tindex))}>🗑</button>
					</li>
					
				))}
				
				
				</ul>
				<div>{Tareas.length}Tareas</div>
		</div>
	);
};

export default Home;
