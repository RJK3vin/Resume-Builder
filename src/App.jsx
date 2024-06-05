import { useState } from "react";

function CustomInput({placeholder, value, onChange}) {
  return <input placeholder={placeholder} value={value} onChange={onChange}></input>
};

function Edit({show, onClick}) {
  return show ? <button onClick={onClick}>Edit</button> : null
};

function Text({intext, value}) {
  return intext ? <p>{value}</p> : null
}

function Changevalue({create, defaultValue, onChange}) {
  return create ? <input defaultValue={defaultValue} onChange={onChange}/> : null
}

function ShowSubmit({create, onClick}) {
  return create ? <button onClick={onClick}>Submit</button> : null
}

function ShowFinal({final, value}) {
  return final ? <p>{value}</p> : null
}

CustomInput.defaultProps = {
  placeholder: ""
};


export default function App() {
  // first state
  const [showbutton, setShowButton] = useState(false)
  // second state 
  const [showedit, setShowEdit] = useState(false)
   
  const [value, setValue] = useState(""); 

  const [showfinalvalue, setShowFinalValue] = useState("")

  const [showfinaltext, setShowFinalText] = useState(false)


  function showtextvalue(e) {
    setValue(e.target.value)
  }

  function TheFinalValue(e) {
    setShowFinalValue(e.target.value)
  }

  return (
    <>
      <CustomInput placeholder = "Name" value={value} onChange={showtextvalue}/>      
      <button onClick={() => setShowButton(true)}>
      Submit
      </button>
      <Text intext={showbutton} value={value}/>  
      <Edit show={showbutton} onClick={() => setShowEdit(true)}/> 
      <Changevalue create={showedit} defaultValue={value} onChange={TheFinalValue}/>
      <ShowSubmit create={showedit} onClick={() => setShowFinalText(true)}/>
      <ShowFinal final={showfinaltext} value={showfinalvalue}/>
  </>
  );
}



