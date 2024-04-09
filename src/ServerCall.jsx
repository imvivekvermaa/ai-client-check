import React from "react";
import axios from "axios"

function ServerCall() {

    async function dataCall(value){
      // console.log("checking from datacall fun", value)
        const data= await axios.get('http://127.0.0.1:8787/')
        const response= await data.data
        console.log(response)
        document.getElementById("A").innerHTML=response
        
    }

    function getData(){
        const value= document.getElementById('input').value
        // console.log(value)
        dataCall(value)

    }
  return (
    <div>
      <div id="A"></div>
      <label htmlFor='input' >Type</label>
      <input onKeyUp={() => getData()} id="input" type="text" placeholder="type here" />
      <button onClick={() => getData()}>Submit</button>
    </div>
  );
}

export default ServerCall;
