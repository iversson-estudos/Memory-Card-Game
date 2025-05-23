import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ImgGrid from './components/ImgGrid'
import randomNumbersArray from './utils/randomNumbersArray'

const handleClick = (value)=>{
  console.log(value);
}

const order = randomNumbersArray(14);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImgGrid order={order} imgOnClick={handleClick}/>
  </StrictMode>
)

