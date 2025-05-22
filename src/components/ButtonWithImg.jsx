import styles from './ButtonWithImg.module.css'

export default function ButtonWithImg({imgUrl}){

    return(
        <>
            <button className={styles.buttonImg}>
                <img className={styles.card} src={imgUrl}/>
            </button>
        </>
    )
}