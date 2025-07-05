import React from 'react';
import { useAtom } from 'jotai'; 
import { exampleAtom } from '../Jotai/exampleAtom';
export const Summary = () => {
  const [exampleData] = useAtom(exampleAtom);
  return (
    <div>
      <h1>Summary Page</h1>
      <p>This page summarizes the information collected from the forms.</p>
      <h1>Name: {exampleData.name}</h1>
      <h2>Email: {exampleData.email}</h2>
      <h3>Age: {exampleData.age}</h3>
      <h4>Department: {exampleData.department}</h4>
    </div>
  );
}