import { useState,useEffect } from "react";

const Tempapp=()=>{
    useEffect(()=>{
        const fetchAPI=async()=>{
            const url="https://api.geoapify.com/v1/routing?waypoints=50.96209827745463%2C4.414458883409225%7C50.429137079078345%2C5.00088081232559&mode=drive&apiKey=3bfd0abfc2974eb989aa70c4a8c4a79a";
            const response=await fetch(url)
            console.log(response)
            const resJson=await response.json()  
        }
        fetchAPI()
    })
}
export default Tempapp;