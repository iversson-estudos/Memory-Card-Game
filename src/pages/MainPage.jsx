import ImgGrid from '../components/ImgGrid'
import Header from '../components/Header';
import randomNumbersArray from '../utils/randomNumbersArray'
import { useEffect, useState} from 'react';
import styles from './MainPage.module.css'

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
  <div className={styles.mainPage}>
    <Header score={score} highestScore={highestScore}/>
    <ImgGrid order={randomNumbersArray(14)} imgOnClick={handleClick}/>
  </div>
  )}

