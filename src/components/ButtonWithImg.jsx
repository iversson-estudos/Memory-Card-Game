import styles from './ButtonWithImg.module.css'

export default function ButtonWithImg({imgUrl,onClick,cardID}){

    return(
        <button onClick={()=>onClick(cardID)} className={styles.buttonImg}>
                <img className={styles.card} src={imgUrl}/>
        </button>
        
    )
}