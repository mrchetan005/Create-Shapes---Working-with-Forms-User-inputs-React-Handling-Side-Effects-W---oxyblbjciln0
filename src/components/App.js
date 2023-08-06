import React, { useState } from 'react'
import '../styles/App.css';
import Shape from './Shape';

const App = () => {
  const [shape, setShape] = useState('square');
  const [shapeHolder, setShapeHolder] = useState([]);

  const renderShape = () => {
    setShapeHolder(oldShapes => [...oldShapes, shape]);
  }

  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={(e) => setShape(e.target.value)}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={renderShape}>Add Shape</button>
      </div>

      <div id="shapes-holder">
        {
          shapeHolder.map((shape, index) => (
            <Shape key={index + 1} shape={shape} count={index + 1} />
          ))
        }
      </div>
    </div>
  )
}


export default App;
