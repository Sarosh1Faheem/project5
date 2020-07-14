import React,{useState} from 'react';
import './App.css';
import NavBar from './components/navbar.js'
import Info from './components/info.js'
import FootNav from './components/footer.js'


function App() {
  const ScreenConfig = useState(0);
  
  return (
    <div className="App">
      <NavBar />
      <Info currentScreen={ScreenConfig[0]}/>
      <FootNav ScreenConfig={ScreenConfig}/>
    </div>
  );
}

export default App;
