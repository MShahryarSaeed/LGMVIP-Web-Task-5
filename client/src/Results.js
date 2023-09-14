import React from 'react';
import './App.css';

const Results = ({result}) => {
  return (
    <div className='result'>
        <h3>Result Status :</h3>
        
        {result}
    </div>
  )
}

export default Results