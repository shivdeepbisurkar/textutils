
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState} from 'react';




function App() {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#040232';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    
<Navbar title="TextUtils" aboutus="About" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
<TextForm heading="Enter the Text to Analyze Below" mode={mode}/>
{/* <About/> */}
</div>

    </>
  );
}

export default App;
