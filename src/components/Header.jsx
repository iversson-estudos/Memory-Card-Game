import styles from './Header.module.css'

export default function Header({score,highestScore}){
    return(
        <div className={styles.headerContainer}>
            <p>Score: {score}</p>
            <p>HighestScore: {highestScore}</p>
        </div>

    )
}