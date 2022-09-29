import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import { wildlife, trees,elevation } from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  console.log(trees);
  wildlife();
  elevation()

  return (
    <>

    <h1>Colorado State Parks!</h1>
    <MesaVerde />
    </>
  
)}

export default ColoradoStateParks