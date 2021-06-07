import React, {useState} from 'react';
import './App.css';
import { FaBars, FaTimes} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function App() {
    const [isOpen, setIsOpen] = useState(true);
    const handleClick = () => {
      setIsOpen(!isOpen);
    }
  return (
    <div className="navbar" style={{color: 'blue'}}>
      <div className="navbarContainer container">
        <div className="logo"> 
          <MdFingerprint />
            LAVISH
        </div>   
        <div className="bars" onClick={handleClick}> 
          {isOpen ? <FaBars /> : <FaTimes /> }
          
        </div>  
      </div>
    </div>
  );
}

export default App;
