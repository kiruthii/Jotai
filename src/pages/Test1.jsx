
import {useAtom} from 'jotai';
import { exampleAtom } from '../Jotai/exampleAtom';
import { useNavigate } from 'react-router-dom';

export const Test1=()=>{
  const navigate=useNavigate();
  const [exampleData,setExampleData]=useAtom(exampleAtom);
  const handleChange=(e)=>{
    setExampleData({...exampleData,name:e.target.value});
  }
  const handleNext=()=>{
    navigate('/test2');
  }

  return(
   <div>
    <input type="text" placeholder="Enter your name" onChange={handleChange}/>
    <button onClick={handleNext}>Next</button>
    <p>{exampleData.name}</p>
   </div>
  )
}