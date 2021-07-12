import styles from '../styles/logoicon.module.scss'

export default function LogoIcon() {
  return(
    <img className={styles.image}
      src='../../imagens/twitterlogo.png' 
      alt='Logo do Twitter' />
  )
}
