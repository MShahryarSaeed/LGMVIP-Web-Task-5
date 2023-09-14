import './App.css';
import data from './data';
import { useState } from 'react';
import Results from './Results';


function App() {

  const [name, setName] = useState("");
  const [rollno, setRollno] = useState("");
  // for Result
  const [result, setResult] = useState("");

  function Clear() {
    setName('');
    setRollno('');
    setResult('');
  }
  const lowercase = name.toLowerCase();
  const student = data.find((student) => student.name.toLowerCase() === lowercase);
  const foundRollno = data.find((student) => student.rollno === rollno);



  function submitHandler() {
    const lowercase = name.trim().toLowerCase();
    if (lowercase === '' || rollno === '') {
      setResult(<h1 style={{ color: 'red' }}>Blank Student name or Password</h1>);
    }

    else if (student && foundRollno && student.name.toLowerCase() === lowercase && student.rollno === rollno) {
      setResult(
        <div className='result-container'>
          <h3>CGPA : <span>{student.CGPA}</span></h3>
          <h3>Status : <span>{student.Status}</span></h3>
        </div>
      );
    }
    else {
      setResult(<h1 style={{color:'yellow'}}>Incorrect username or Rollno</h1>);
    }
  }
  
  return (
    <div className="App">

      <div className="main-container">

        <h1>Result Management System </h1>
        <h2 style={{ textAlign: 'center' }}>BSCS-M1-20-24</h2>


        <input type="text" name="username" id="username" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Student Name...' />

        <input type="text" name="rollno" id="rollno" value={rollno} onChange={(e) => setRollno(e.target.value)} placeholder='Enter Student Rollno...' />

        <button onClick={submitHandler}>Check Result</button>
        <button className='clear' onClick={Clear}>Clear</button>

        {result ? <Results result={result} /> : ''}

        {/* <Results result={result}/> */}



      </div>





    </div>
  );
}

export default App;
