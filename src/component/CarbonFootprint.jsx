import { useState } from "react"
import Graph from "../Util/BarChart.js";
import Chart from "chart.js/auto"
import {Bar} from "react-chartjs-2"


const Calcu=()=>{
    const[energyUse,setEnergyuse]=useState(0);
    const[carMiles,setCarMiles]=useState(0);
    const[flightHours,setFlightHours]=useState(0);
    const[foodConsumption,setFoodConsumption]=useState("omnivore");
    const[carbonFootprint,setCarbonFootprint]=useState(null);
    const[values,setValues]=useState([0,0,0,0]);
  
    const energyFactor=0.233/52;
    const carFactor=0.411/52;
    const flightFactor=90.0/52;
    const foodFactor={
        Vegetarian:1500/52,
        Onlymeat:3000/52,
        Omnivore:2500/52,
        Vegan:1000/52,
    };

    const calculateFootprint=(e)=>{
        e.preventDefault();
        const energyCO2=energyUse*energyFactor;
        const carCO2=carMiles*carFactor;
        const flightCO2=flightHours*flightFactor;
        const foodCO2=foodFactor[foodConsumption];
        
        const totalFootprint=energyCO2+carCO2+flightCO2+foodCO2;
        setCarbonFootprint(totalFootprint);
        setValues([energyCO2,carCO2,flightCO2,foodCO2]);
    }

    return(
        <section class="h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-xl-10">
                        <div class="card rounded-3 text-black" style={{backgroundColor:"lightgreen"}}>
                            <div  class="row g-0">
                                <div class="col-lg-6">
                                    <div clas="card-body p-md-5 mx-md-4">
                                        <h1 className="d-flex justify-content-center">Carbon Footprint Calculator</h1>
                                        <form className="col-md-8" onSubmit={calculateFootprint}>
                                            <div className="p-2">
                                                <label>Energy use (KWh per week)</label>
                                                <input class="form-control" 
                                                type="number" 
                                                min={0} 
                                                value={energyUse} 
                                                onChange={(e)=>setEnergyuse(Number(e.target.value))} 
                                                placeholder="eg: 5000" 
                                                required/>
                                            </div>
                                            <div className="p-2">
                                                <label>Car miles driven per week</label>
                                                <input class="form-control" 
                                                type="number" 
                                                min={0} 
                                                value={carMiles} 
                                                onChange={(e)=>setCarMiles(Number(e.target.value))} 
                                                placeholder="eg: 100" 
                                                required/>
                                            </div>
                                            <div className="p-2">
                                                <label>Flight hours per week</label>
                                                <input class="form-control" 
                                                type="number" 
                                                min={0} 
                                                value={flightHours} 
                                                onChange={(e)=>setFlightHours(Number(e.target.value))} 
                                                placeholder="eg 2" 
                                                required/>
                                            </div>
                                            <div className="p-2">
                                                <label>Food consumption</label>
                                                <select className="form-select" value={foodConsumption} onChange={(e)=>setFoodConsumption(e.target.value)}>
                                                    <option value="Vegetarian">Vegetarian</option>
                                                    <option value="Omnivore">Omnivore</option>
                                                    <option value="Vegan">Vegan</option>
                                                </select>
                                            </div>
                                            <button  className="btn btn-dark btn-md mx-2 px-4 py-2" type="submit">Calculate</button>
                                        </form>
                                    </div>
                                </div>
                                <div  class="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <Graph values={values}/>
                                </div>
                                {carbonFootprint !==null &&(
                                    <div>
                                        <h2>Your estimate carbon footprint is : {carbonFootprint.toFixed(2)} kg CO2 per week</h2>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}
  export default Calcu;