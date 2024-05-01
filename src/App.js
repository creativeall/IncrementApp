import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

 const App = () =>{
  let [Count,setCount] = useState(0);
  const increase = () =>{
    console.log("value added",Count);
    setCount(Count++);
  }
  const decrease = () =>{
    if(Count>0){
    setCount(Count--);
    }
    else{
      alert("sorry,Zero limited reached")
      setCount(0);
    }
  }
   return<>
   <h2>Number Game🎲</h2>
    <div className="main_div">
        <div className="center_div">
            <h1>{Count}</h1>
            <Tooltip title="Add"> 
            <Button onClick={increase}> <AddIcon /></Button>
            </Tooltip>
            <Tooltip title="Delete"> 
            <Button onClick={decrease}> <RemoveIcon/></Button>
            </Tooltip>
        </div>
    </div>
   </>
 }
 export default App;