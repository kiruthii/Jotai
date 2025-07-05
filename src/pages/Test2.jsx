import React from "react";
import { useAtom } from 'jotai';
import { exampleAtom } from '../Jotai/exampleAtom';
import { useNavigate } from 'react-router-dom';

export const Test2 = () => {
  const navigate = useNavigate();
  const [exampleData, setExampleData] = useAtom(exampleAtom);
  const handleChange = (e) => {
    setExampleData({ ...exampleData, age: e.target.value });
  }
  const handleNext = () => {
    navigate('/test3');
  }
  return (
    <div>
      <h1>Test2 Page</h1>
      <p>This is another test page for demonstration purposes.</p>
      <input
        type="number"
        placeholder="Enter your age"
        
        onChange={handleChange}
      />
      <button onClick={handleNext}>Next</button>
      <p>{exampleData.age}</p>
      <p>{exampleData.name}</p>




    </div>
  );
}