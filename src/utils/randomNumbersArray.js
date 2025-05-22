/*
RECEIVES A PARAMETER OF SIZE,
RETURNS AN ARRAY OF SIZE WITH NUMBERS FROM ZERO TO SIZE RANDOMIZED,
NUMBERS DONT REPEAT
*/



export default function randomNumbersArray(size){
    
    const array =  [];

    for(let i=0;i<size;i++){
        
        const num = Math.floor(Math.random() * size);
        
        if(array.includes(num)){
            i--;
        }
        else{
            array[i]=num;
        }
    }

    return array;
}