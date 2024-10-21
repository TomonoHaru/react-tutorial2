import { useState } from "react";

export default function App() {
  const [showStory,setShowStory] = useState(false);
  const xItems = ["Willy the Goblin","Big Daddy","Father Christmas"]
  const yItems = ["the soup kitchen","Disneyland","the White House"]
  const zItems = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"]
  const [xItem,setXItem] = useState(randomValueFromArray(xItems));
  const [yItem,setYItem] = useState(randomValueFromArray(yItems));
  const [zItem,setZItem] = useState(randomValueFromArray(zItems));
  const [customname,setCustomname] = useState("");
  const [diplayName,setDisplayName] = useState("Bob");
  const [ukus,setUkus] = useState("us");
  const [weight,setWeight] = useState("");
  const [temperature,setTemperature] = useState("");
  const [diplayWeight,setDisplayWeight] = useState("300 pounds");
  const [diplayTemperture,setDisplayTemperture] = useState("94 fahrenheit");
  


  function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input 
        type="text" 
        placeholder="" 
        onChange={(e)=> setCustomname(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input type="radio" value={ukus} checked={ukus === "us"} onChange={()=>{setUkus("us"); setWeight("300 pounds"); setTemperature("94 fahrenheit")}}/>
        <label htmlFor="uk">UK</label>
        <input type="radio" value={ukus} checked={ukus === "uk"} onChange={()=>{setUkus("uk"); setWeight("21.4 stones"); setTemperature("34.4 celsius")}}/>
      </div>
      <div>
        <button onClick ={()=>{
            setShowStory(true);
            setDisplayWeight(weight?weight:diplayWeight);
            setDisplayTemperture(temperature?temperature:diplayTemperture);
            setXItem(randomValueFromArray(xItems));
            setYItem(randomValueFromArray(yItems));
            setZItem(randomValueFromArray(zItems));
            setDisplayName(customname?customname:"Bod");
            
            }}>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was {diplayTemperture} outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          {diplayName} saw the whole thing, but was not surprised — {xItem} weighs {diplayWeight}, and it was a hot day.
        </p>
      )}
    </>
  );
}