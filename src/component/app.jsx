import React, { useState } from "react";

const Calcu = () => {
  const [energyUse, setEnergyUse] = useState(0);  // kWh of electricity
  const [carMiles, setCarMiles] = useState(0);    // Miles driven per year
  const [flightHours, setFlightHours] = useState(0);  // Hours of flights per year
  const [foodConsumption, setFoodConsumption] = useState(""); // Food habits
  const [carbonFootprint, setCarbonFootprint] = useState(null);

  // Carbon footprint calculation factors
  const energyFactor = 0.233;       // kg CO2e per kWh
  const carFactor = 0.411;          // kg CO2e per mile (average car)
  const flightFactor = 90.0;        // kg CO2e per flight hour
  const foodFactors = {
    vegetarian: 1500/52,      // kg CO2e per year
    omnivore: 2500/52 ,        // kg CO2e per year
    vegan: 1000/52,           // kg CO2e per year
  };

  const calculateFootprint = (e) => {
    e.preventDefault();
    const energyCO2 = energyUse * energyFactor;
    const carCO2 = carMiles * carFactor;
    const flightCO2 = flightHours * flightFactor;
    const foodCO2 = foodFactors[foodConsumption];

    const totalFootprint = energyCO2 + carCO2 + flightCO2 + foodCO2;
    setCarbonFootprint(totalFootprint);
  };

  return (
    <section class="h-100 gradient-form">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-10">
                    <div class="card rounded-3 text-black" style={{backgroundColor:"lightgreen"}}>
                        <div class="row g-0">
                            <div class="col-lg-6">
                                <div class="card-body p-md-5 mx-md-4">
                                    <h1 className="d-flex justify-content-center">Carbon Footprint Calculator</h1>
                                        <form className="col-md-8" onSubmit={calculateFootprint}>
                                            <div>
                                                <label>Energy Use (kWh per week): </label>
                                                <input class="form-control"
                                                    type="number"
                                                    min={0}
                                                    value={energyUse}
                                                    onChange={(e) => setEnergyUse(Number(e.target.value))} 
                                                    /*(e): This represents the event object from the input change event.
                                                    e.target.value: This retrieves the value of the input field as a string.
                                                    Number(e.target.value): This converts the string value to a number.
                                                    setEnergyUse: This function updates the state with the new numeric value. */
                                                    placeholder="e.g., 5000"
                                                    required
                                                />
                                            </div>

                                            <div className="p-2">
                                                <label>Car Miles Driven per Week: </label>
                                                <input class="form-control"
                                                    type="number"
                                                    min={0}
                                                    value={carMiles}
                                                    onChange={(e) => setCarMiles(Number(e.target.value))}
                                                    placeholder="e.g., 12000"
                                                    required
                                                />
                                            </div>

                                            <div  className="p-2">
                                                <label>Flight Hours per Week: </label>
                                                <input class="form-control"
                                                    type="number"
                                                    min={0}
                                                    value={flightHours}
                                                    onChange={(e) => setFlightHours(Number(e.target.value))}
                                                    placeholder="e.g., 20"
                                                    required
                                                />
                                            </div>

                                            <div  className="p-2">
                                                <label>Food Consumption: </label>
                                                <select className="form-select"
                                                    value={foodConsumption}
                                                    onChange={(e) => setFoodConsumption(e.target.value)}>
                                                    <option value="omnivore">Omnivore</option>
                                                    <option value="vegetarian">Vegetarian</option>
                                                    <option value="vegan">Vegan</option>
                                                </select>
                                            </div>
                                            <button className="btn btn-dark btn-md mx-2 px-4 py-2" type="submit">Calculate</button>
                                        </form>
                                    </div>
                                </div>

                                <div class="col-lg-6 d-flex align-items-center">
                                    <div class="text-black px-3 py-4 p-md-5 mx-md-4">
                                        <h4 class="mb-4">We are more than just a company</h4>
                                        <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            {carbonFootprint !== null && (
                                <div className="p-2">
                                    <h2 className="d-flex justify-content-center">Your estimated carbon footprint is: {carbonFootprint.toFixed(2)} kg CO2e per week</h2>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  );
};

export default Calcu;