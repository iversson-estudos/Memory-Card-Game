import ButtonWithImg from './ButtonWithImg'
import styles from './ImgGrid.module.css'

export default function ImgGrid (){

    return(
        <div className={styles.imgGrid}>
            <ButtonWithImg imgUrl='/src/data/cards/0.jpg'/>
            <ButtonWithImg imgUrl='/src/data/cards/0.jpg'/>
            <ButtonWithImg imgUrl='/src/data/cards/0.jpg'/>
            <ButtonWithImg imgUrl='/src/data/cards/0.jpg'/>
            <ButtonWithImg imgUrl='/src/data/cards/0.jpg'/>
            <ButtonWithImg imgUrl='/src/data/cards/0.jpg'/>
        </div>
    )
}