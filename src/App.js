
import './App.css';
import ArmLion from './images/ArmLion.png'
import ArmEagle from './images/ArmEagle.png'
import EagleLion from './images/Eagle&Lion.png'
import SilverShield from './images/SilverShield.png'
import Fade from 'react-reveal/Fade';
import React, { useState } from 'react'
import Zoom from 'react-reveal/Zoom';
import Jump from 'react-reveal/Jump';
import brightKnight from './images/brightKnight0.png'
import darkKnight from './images/darkKnight0.png'


function App() {
  const [showCoat, setShowCoat] = useState(false)
  const [beginFuse, setBeginFuse] = useState('2')
  const [showFuse, setShowFuse] = useState('0')
  const [showFused, setShowFused] = useState('0')
  const [coatJump, setCoatJump] = useState(false)

const fuse = {
  boxShadow: `0 0 40px 5px #fff,
  inset  0 0 20px #fff,
    0 0 160px 90px #08f,
    inset 0 0 20px #08f,
    0 0 320px 50px #08f,
    inset 0 0 20px #08f`,
    position:'absolute', 
    top:'27%',
    zIndex:'10',
    opacity:showFuse,
    height:beginFuse
    
}

  return (
    <Fade duration={2000} wait={1500} onReveal={ () => setShowCoat(true)}>
    <div  className="mainCont">
      
    <Jump when={coatJump}>
        <div style={{position:'relative', }}>
        <Zoom left when={showCoat}  duration={2000} onReveal={ () => {
          setTimeout(() => {
            setShowFuse('1')
            
          }, 2200);
          setTimeout(() => {
            
            setBeginFuse('215px')
          }, 3000);
          setTimeout(() => {
            
            setShowFuse('0')
            setShowFused('1')
          }, 6000);
          setTimeout(() => {
            
            setCoatJump(true)
          }, 9000);
          
        }}>
            
            <img  src={ArmEagle} alt="" />
        
          </Zoom>
          <span  class="neon-light" style={fuse}></span>
          <Zoom right when={showCoat} duration={2000} >
          <img src={ArmLion} alt="" />
          </Zoom>
          
        <img style={{position:'absolute', top:'0',left:'0',opacity:showFused,transition:'all 3s'}}
         src={EagleLion} alt="" />
        </div>
        
        </Jump>

    </div>
    </Fade>
  );
}

export default App;

/*

<Jump when={coatJump}>
        <div style={{position:'relative', }}>
        <Zoom left when={showCoat}  duration={2000} onReveal={ () => {
          setTimeout(() => {
            setShowFuse('1')
            
          }, 2200);
          setTimeout(() => {
            
            setBeginFuse('215px')
          }, 3000);
          setTimeout(() => {
            
            setShowFuse('0')
            setShowFused('1')
          }, 6000);
          setTimeout(() => {
            
            setCoatJump(true)
          }, 9000);
          
        }}>
            
            <img  src={ArmEagle} alt="" />
        
          </Zoom>
          <span  class="neon-light" style={fuse}></span>
          <Zoom right when={showCoat} duration={2000} >
          <img src={ArmLion} alt="" />
          </Zoom>
          
        <img style={{position:'absolute', top:'0',left:'0',opacity:showFused,transition:'all 3s'}}
         src={EagleLion} alt="" />
        </div>
        
        </Jump>


*/