import { useState, } from "react";

function CustomInput({placeholder, value, onChange, show, }) {
  return !show ? <input placeholder={placeholder} value={value} onChange={onChange}></input> : null
};

function Button({show, onClick, }) {
  return !show ? <button onClick={onClick}>Submit</button> : null
}

function Paragraphs({show, value, }) {
  return show ? <p>{value}</p>: null
};

function Edit({show, onClick, }) {
  return show ? <button onClick={onClick}>Edit</button> : null
}

CustomInput.defaultProps = {
  placeholder: ""
};


export default function App() {

  const [showbutton, setShowButton] = useState(false)
  
  const [value, setValue] = useState(""); 

  const [secondvalue, setSecondValue] = useState(""); 

  const [thirdvalue, setThirdValue] = useState(""); 

  const [fourthvalue, setFourthValue] = useState(""); 

  const [fifthvalue, setFifthValue] = useState(""); 

  const [sixthvalue, setSixthValue] = useState(""); 

  const [seventhvalue, setSeventhValue] = useState(""); 

  const [eighthvalue, setEighthValue] = useState(""); 

  function showtextvalue(e ) {
    setValue(e.target.value)
  }
  function showsecondtextvalue(e) {
    setSecondValue(e.target.value)
  }
  function showthirdtextvalue(e) {
    setThirdValue(e.target.value)
  }
  function showfourthtextvalue(e) {
    setFourthValue(e.target.value)
  }
  function showfifthtextvalue(e) {
    setFifthValue(e.target.value)
  }
  function showsixthtextvalue(e) {
    setSixthValue(e.target.value)
  }
  function showseventhtextvalue(e) {
    setSeventhValue(e.target.value)
  }
  function showeighthtextvalue(e) {
    setEighthValue(e.target.value)
  }
  

  

  return (
    <>
      <CustomInput show={showbutton} placeholder = "Name" value={value} onChange={showtextvalue}/>
      <CustomInput show={showbutton} placeholder = "Phone" value={secondvalue} onChange={showsecondtextvalue}/>
      <CustomInput show={showbutton} placeholder = "Email" value={thirdvalue} onChange={showthirdtextvalue}/>
      <CustomInput show={showbutton} placeholder = "School Name" value={fourthvalue} onChange={showfourthtextvalue}/>
      <CustomInput show={showbutton} placeholder = "Title Of Study" value={fifthvalue} onChange={showfifthtextvalue}/>
      <CustomInput show={showbutton} placeholder = "Company Name" value={sixthvalue} onChange={showsixthtextvalue}/>
      <CustomInput show={showbutton} placeholder = "Job Role" value={seventhvalue} onChange={showseventhtextvalue}/>
      <CustomInput show={showbutton} placeholder = "Starting Date Working For That Company" value={eighthvalue} onChange={showeighthtextvalue}/>
      <Button show={showbutton} onClick={() => setShowButton(true)}/>      
      <Paragraphs show={showbutton} value={value}/> 
      <Paragraphs show={showbutton} value={secondvalue}/> 
      <Paragraphs show={showbutton} value={thirdvalue}/> 
      <Paragraphs show={showbutton} value={fourthvalue}/> 
      <Paragraphs show={showbutton} value={fifthvalue}/> 
      <Paragraphs show={showbutton} value={sixthvalue}/> 
      <Paragraphs show={showbutton} value={seventhvalue}/> 
      <Paragraphs show={showbutton} value={eighthvalue}/> 
      <Edit show={showbutton} onClick={() => setShowButton(false)}/>
  </>
  );
}

// component that returns an input using placeholder, onChange, value. and a button using state prop, onClick
// 2nd component returns a paragrph using value, state ref and a button using state, onClick, 
// first component return multiple inputs. 2nd componentn return multiple paragraphs
// defaultValue={value} onChange={TheFinalValue} function TheFinalValue(e) {setShowFinalValue(e.target.value)}