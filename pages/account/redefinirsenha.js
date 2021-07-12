import Link from 'next/link'
import LogoIcon from '../../components/logoicon'
import styles from '../../styles/rsenha.module.scss'
import { Typography, Container, Grid, Button, TextField } from '@material-ui/core'
import { Select, MenuItem } from '@material-ui/core'


export default function RedefinirSenha(){
  return(
    <>
      <div className={styles.header}>
        <Container maxWidth='xs'>
          <Grid container justifyContent='left' alignItems='row'>
            <Grid item={12}>
              <LogoIcon />
            </Grid>
            <Grid item>
              Redefinir Senha
            </Grid>
            <Grid item>
              <Select>
                <MenuItem>
                  <Link href='/account/passwordreset'>
                    English
                  </Link>
                </MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={styles.body}>
        <Container maxWidth='sm'>
          <Grid container justifyContent='center' alignItems='column' spacing={2}>
            <Grid item={12}>
              <Typography variant='h4'><strong>Encontre sua conta do Chipper</strong></Typography>
              <Typography variant='subtitle1'>Digite seu e-mail, número de celular ou nome de usuário.</Typography>
            </Grid>

            <form className={styles.form}>
              <TextField
                variant='outlined'
                margin='normal'
                fullwidth
              />
              <Button className={styles.button}
                type='submit'
                fullWidth
                variant='contained'
              >
                <strong>Buscar</strong>
              </Button>
            </form>
          </Grid>
        </Container>
      </div>
    </>
  )
}