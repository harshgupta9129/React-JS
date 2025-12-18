import { useState } from "react";
import About from "./components/About.js";
import Navbar from "./components/Navbar.js"
import TextForm from "./components/TextForm.js"
import Alert from "./components/Alert.js";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [mode,setmode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,status)=> {
    setAlert({
      msg:message,
      type:status
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleChange = ()=> {
    if (mode==='light') {
      setmode('dark');
      document.body.style.background = 'black';
      document.body.style.color = 'white';
      showAlert('Dark Mode Successfully On','Success');
    }
    else {
      setmode('light');
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      showAlert('Light Mode Successfully On','Success')
    }
  }


  return (
    <BrowserRouter>
    <div>
      <Navbar title = "TextUtils" aboutText = "About Us" mode={mode} toggleChange={toggleChange}/>
      <Alert alert={alert}/>
    </div>
    <div className="container">
    <Routes>
      <Route exact path="/" element={<TextForm heading="Enter A Text to Analyse" mode={mode} showAlert={showAlert}/>} />
      <Route exact path="/about" element={<About />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
