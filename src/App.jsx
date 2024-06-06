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

function Editone({show, }) {
  return !show ? <button>Edit</button> : null
}
function Edittwo({show, }) {
  return !show ? <button>Edit</button> : null
}
function Editthree({show, }) {
  return !show ? <button>Edit</button> : null
}


CustomInput.defaultProps = {
  placeholder: ""
};


export default function App() {

  const [showfirstsection, setShowFirstSection] = useState(false)

  const [showsecondsection, setShowSecondSection] = useState(false)

  const [showthirdsection, setShowThirdSection] = useState(false)

  const [showeditbutton, setShowEditButton] = useState(false)
  
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
  
  function FirstSection() {
    setShowFirstSection(true)
    setShowEditButton(true)
  }
  function SecondSection() {
    setShowSecondSection(true)
    setShowEditButton(true)
  }
  function ThirdSection() {
    setShowThirdSection(true)
    setShowEditButton(true)
  }
  function NormalFirstSection() {
    setShowFirstSection(false)
    setShowEditButton(false)
  }
  function NormalSecondSection() {
    setShowSecondSection(false)
    setShowEditButton(false)
  }
  function NormalThirdSection() {
    setShowThirdSection(false)
    setShowEditButton(false)
  }
  

  return (
    <>
    <div>
      <CustomInput show={showfirstsection} placeholder = "Name" value={value} onChange={showtextvalue}/>
      <CustomInput show={showfirstsection} placeholder = "Phone" value={secondvalue} onChange={showsecondtextvalue}/>
      <CustomInput show={showfirstsection} placeholder = "Email" value={thirdvalue} onChange={showthirdtextvalue}/>
      <Button show={showfirstsection} onClick={FirstSection}/>      
      <Editone show={showfirstsection}/>
    </div>
    <div>
      <CustomInput show={showsecondsection} placeholder = "School Name" value={fourthvalue} onChange={showfourthtextvalue}/>
      <CustomInput show={showsecondsection} placeholder = "Title Of Study" value={fifthvalue} onChange={showfifthtextvalue}/>
      <Button show={showsecondsection} onClick={SecondSection}/>      
      <Edittwo show={showsecondsection}/>
    </div> 
    <div>
      <CustomInput show={showthirdsection} placeholder = "Company Name" value={sixthvalue} onChange={showsixthtextvalue}/>
      <CustomInput show={showthirdsection} placeholder = "Job Role" value={seventhvalue} onChange={showseventhtextvalue}/>
      <CustomInput show={showthirdsection} placeholder = "Starting Date Working For That Company" value={eighthvalue} onChange={showeighthtextvalue}/>
      <Button show={showthirdsection} onClick={ThirdSection}/>      
      <Editthree show={showthirdsection}/>
    </div>  
    <div>
      <Paragraphs show={showfirstsection} value={value}/> 
      <Paragraphs show={showfirstsection} value={secondvalue}/> 
      <Paragraphs show={showfirstsection} value={thirdvalue}/> 
      <Edit show={showfirstsection} onClick={NormalFirstSection}/>
    </div>
    <div>
      <Paragraphs show={showsecondsection} value={fourthvalue}/> 
      <Paragraphs show={showsecondsection} value={fifthvalue}/> 
      <Edit show={showsecondsection} onClick={NormalSecondSection}/>
    </div>
    <div>
      <Paragraphs show={showthirdsection} value={sixthvalue}/> 
      <Paragraphs show={showthirdsection} value={seventhvalue}/> 
      <Paragraphs show={showthirdsection} value={eighthvalue}/> 
      <Edit show={showthirdsection} onClick={NormalThirdSection}/>
    </div>
      
      
     
  </>
  );
}
