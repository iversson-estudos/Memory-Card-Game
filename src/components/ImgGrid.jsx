import ButtonWithImg from './ButtonWithImg'
import styles from './ImgGrid.module.css'

export default function ImgGrid ({imgOnClick,order=[0,1,2,3,4,5,6,7,8,9,10,11,12,13]}){

        return(
        <div className={styles.imgGrid}>
            {order.map((value)=>(
                <ButtonWithImg onClick={imgOnClick} key={value} cardID={value} imgUrl={`/public/cards/${value}.jpg`}/>
            ))}
        </div>
    )
}