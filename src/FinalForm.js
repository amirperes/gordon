import React, { useEffect, useState } from "react";
import './FinalForm.css';
import axios from "axios";

function FinalForm(props) {
  const [studentName, setStudentName] = useState('')
  const [studentClass, setStudentClass] = useState('')
  const [photo, setPhoto] = useState(props.photo)


  function handleNameChange(e) {
    setStudentName(e.target.value)
  }

  function handleClassChange(e) {
    setStudentClass(e.target.value)
  }

  function sendForm() {
    // var numGen = Math.random() * (100000 - 10000) + 10000;
    // const base64 = photo // Place your base64 url here.
    // fetch(base64)
    //   .then(res => res.blob())
    //   .then(blob => {
    //     const fd = new FormData();
    //     const file = new File([blob], "S"+numGen+".jpeg");
    //     fd.append('image', file)
      

    //     // Let's upload the file
    //     // Don't set contentType manually → https://github.com/github/fetch/issues/505#issuecomment-293064470
    //     const API_URL = 'https://localhost:44324/api/DataManageGordon/upload'
    //     fetch(API_URL, { method: 'POST', body: fd})
    //       .then(res => res.json())
    //       .then(res => console.log(res))
    //     })
    var numGen = Math.random() * (100000 - 10000) + 10000;
    // document.body.appendChild(image);
    const formData = new FormData();
    formData.append('file', photo);
    try{
      const res = axios.post("https://localhost:44324/api/DataManageGordon/upload",formData)
    } catch(ex){console.log(ex)}

    
    // let options = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'multipart/form-data' },
    //   body: formData
    // }

    // fetch(`https://localhost:44324/api/DataManageGordon/upload`,options)
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   // .then((fileId) => {
    //   //     setFilesIds(prevFilesIds => [...prevFilesIds, fileId])
    //   // })
    //   .catch(err => {
    //     console.log('Error, Contact Support')
    //   })
    // console.log(studentName)
    // console.log(studentClass)
  }

  return (
    <div className="FinalForm">
      <input className='inputName' placeholder="שם מלא" value={studentName} onChange={(e) => handleNameChange(e)} />
      <input className='inputName' placeholder="כיתה" value={studentClass} onChange={(e) => handleClassChange(e)} />
      <img src={props.photo} />
      <div onClick={sendForm}>שלח</div>
    </div>
  );
}

export default FinalForm;