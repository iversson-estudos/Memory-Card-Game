import ButtonWithImg from './ButtonWithImg'
import styles from './ImgGrid.module.css'

export default function ImgGrid ({order=[0,1,2,3,4,5,6,7,8,9,10,11,12,13]}){

    return(
        <div className={styles.imgGrid}>
            {order.map((value,index)=>(
                <ButtonWithImg key={index} imgUrl={`/src/data/cards/`+value+`.jpg`}/>
            ))}
        </div>
    )
}