import React from 'react';
import { useAtom } from 'jotai';
import { exampleAtom } from '../Jotai/exampleAtom';
import { useNavigate } from 'react-router-dom';

export const Test3 = () => {
  const navigate = useNavigate();
  const [exampleData, setExampleData] = useAtom(exampleAtom);
  const handleChange = (e) => {
    setExampleData({ ...exampleData, department: e.target.value });
  }
  const handleChange1 = (e) => {
    setExampleData({ ...exampleData, email: e.target.value });
  }
  const handleNext = () => {
    navigate('/summary');
  }
  return (
    <div>
      <h1>Test3 Page</h1>
      <p>This is a third test page for demonstration purposes.</p>
      <input type="text" placeholder="Enter your email" onChange={handleChange1} />
      <p>Your email is {exampleData.email}</p>
      <input type="text" placeholder="Enter your department"  onChange={handleChange} />
      <p>Your department is {exampleData.department}</p>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};