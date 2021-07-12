import LogoIcon from '../../components/logoicon'
import Month from '../../components/month'
import Day from '../../components/day'
import Year from '../../components/year'
import { Container, Button, Grid } from '@material-ui/core'
import { TextField, Typography } from '@material-ui/core'
import styles from '../../styles/signup.module.scss'

export default function SignUp() {
  return (
    <>
      <div>
        <div className={styles.logo}>
          <LogoIcon />
        </div>
        <Container maxwidth='xs'>
          <Typography className={styles.title} variant='h5'>
            <strong>Criar sua conta</strong>
          </Typography>

          <form className={styles.dados}>
            <TextField
              variant={'outlined'}
              margin='normal'
              fullWidth
              type='text'
              label='Nome'
              placeholder='Nome' />

            <TextField
              variant={'outlined'}
              margin='normal'
              fullWidth
              type='text'
              label='Celular'
              placeholder='celular' />

            <div className={styles.data}>
              <Typography>
                <strong>Data de nascimento</strong>
              </Typography>
              <Typography>
                Isso não será exibido publicamente. Confirme sua própria idade,
                mesmo se esta conta for de empresa, de um animal de estimação ou outros.
              </Typography>
              <div className={styles.calendario}>
                <Month />
                <Day />
                <Year />
              </div>
            </div>

            <Button className={styles.button}
              type='submit'
              fullWidth
              variant='contained'
            >
              <strong>Avançar</strong>
            </Button>
          </form>

        </Container>
      </div>
    </>
  )
}