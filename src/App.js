import React, { useEffect, useState } from "react";
import './App.css';
import Home from './Home';
import Iframe from 'react-iframe'
import FaceARApp from "./FaceARApp";
import FinalForm from "./FinalForm";
import uploadButton from './camera.png'

function App() {


  const [step, setStep] = useState(1)
  const [stepsTitles, setStepsTitles] = useState(['צור תמונה', '', 'המשך'])
  const [lastTimeStamp, setLastTimeStamp] = useState(0)
  function NextStep() {
    setStep(step + 1)
  }
  function LastStep() {
    setStep(step - 1)
  }

  function Testing() {

    document.getElementById("appIframe").contentWindow.document.getElementById("screenshotButton").addEventListener('click', function () {
      setTimeout(function () {
        setLastTimeStamp(document.getElementById("appIframe").contentWindow.lastTimeStamp)
        
        setStep(step + 1)
      }, 1000);
    }, false);
    console.log(lastTimeStamp)
  }
  function redirectGoogle(){
    window.location.href = "https://forms.gle/QP5P1xA1s6sqsDfVA"
  }

  return (
    <div className="App">
      {
        step === 1 ?
          (<div><Home />
            <a className='uploadButtonA'>
              <img src={uploadButton} className='uploadButton' onClick={NextStep} />
            </a>
          </div>)
          :
          (<div></div>)
      }
      {
        step === 2 ?
          (<Iframe url="./camera.html"
            width='100%'
            height='100%'
            id="appIframe"
            className="myClassname"
            display="initial"
            scrolling='no'
            position="relative" onLoad={Testing} />
          )
          :
          (<div></div>)
      }
      {
        step === 3 ?
          (
            <div>
              <div className="titlePara">התמונה שלך:</div>
              <br/><br/><br/>
              <img className="finallImg" src={localStorage.getItem("tmp" + lastTimeStamp)} />
              <br/><br/>
              <div className="titlePara">התמונה כבר מחכה לך בתיקיית ההורדות</div>
              <br/><br/>
              <div className='actionButtons'>
              <a className="anotherPicA" ><div className="anotherPic" onClick={LastStep}>תמונה נוספת</div></a>
              <br/><br/><a className="continueA" ><div className="continue" onClick={redirectGoogle}>המשך</div></a>
            </div></div>
          )
          :
          (<div></div>)
      }

      {step}
    </div>
  );
}

export default App;
