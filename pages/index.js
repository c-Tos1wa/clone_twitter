import { Container, Button } from '@material-ui/core'
import { TextField, Typography } from '@material-ui/core'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Entrar no Chipper/Chipper</title>
        <meta name="description" content="Login do Twitter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth='xs'>
        <div className={styles.icone}>
          <img className={styles.image} src='imagens/twitterlogo.png' alt="icone do twitter"/>
          <Typography component='h1' variant='h4' className={styles.titulo}>
            <strong>Entrar no Chipper</strong>
          </Typography>
        </div>

        <form className={styles.formulario}>
          <TextField className={styles.form}
            variant={'outlined'}
            margin='normal'
            fullWidth
            label='Celular, e-mail ou nome de usuário' 
            placeholder="Celular, e-mail ou nome de usuário" 
          />
          <TextField className={styles.form}
            variant='outlined'
            margin='normal'
            fullWidth
            type="password"
            label='Senha'
            placeholder="Senha" 
          />
          <Button className={styles.button}
            type='submit'
            fullWidth
            variant='contained'
          >
            <strong>Entrar</strong>
          </Button>
          
          <div className={styles.footer}>
            <Link href='account/redefinirsenha'>
              <a>Esqueceu sua senha?</a>
            </Link>
            <Typography> · </Typography>
            <Link href='account/signup'>
              <a>Inscrever-se no Chipper</a>
            </Link>
          </div>
        </form>
      </Container>
    </div>
  )
}
