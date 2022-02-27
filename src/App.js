import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform'; 
import React, { useState } from 'react';
import Alert from './components/Alert';

//import {
  //BrowserRouter as Router,
  //Switch,
  //Route
//} from "react-router-dom";

function App() {
  const[mode, setMode]=useState('light');
  const[alert, setAlert]=useState(null);
  const showAlert = (message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(() => {
  setAlert(null);
},1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enabled","success");

    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success");
    }

  }
 return (
   <>
   {/*<Router> */}
<Navbar title="TextEdits" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
{/*<Switch> */} 
    {/*<Route exact path="/about"> <About/> 
          </Route>
 <Route exact path="/"> */}
        <Textform showAlert={showAlert} heading="Enter text to Analyze" mode={mode}/> 
        {/*  </Route>
</Switch> */}
</div>
{/*</Router> */}
</> 
 );
}

export default App;
 