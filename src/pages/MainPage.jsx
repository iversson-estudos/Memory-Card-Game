import ImgGrid from '../components/ImgGrid'
import randomNumbersArray from '../utils/randomNumbersArray'
import { useEffect, useState} from 'react';

export default function MainPage(){



const [clickedCards,setClickedCards] = useState([]);
const [score,setScore]  = useState(0);
const [highestScore,setHighestScore]= useState(0);

useEffect(()=>{
  if(score>highestScore){
    setHighestScore(score);
  }
},[score,highestScore]);






const handleClick = (value)=>{  
 
  if(clickedCards.includes(value))
    { 
      setClickedCards([]);
      setScore(0);
    }
  else
    {
      setClickedCards([...clickedCards,value]);
      setScore(score+1);
    }
}






return(
    <ImgGrid order={randomNumbersArray(14)} imgOnClick={handleClick}/>
)}

