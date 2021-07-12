import Link from 'next/link'
import LogoIcon from '../../components/logoicon'
import styles from '../../styles/rsenha.module.scss'
import { Typography, Container, Grid, Button, TextField } from '@material-ui/core'
import { Select, MenuItem } from '@material-ui/core'


export default function PasswordReset(){
  return(
    <>
      <div className={styles.header}>
        <Container maxWidth='xs'>
          <Grid container justifyContent='left' alignItems='row'>
            <Grid item={12}>
              <LogoIcon />
            </Grid>
            <Grid item>
              Password Reset
            </Grid>
            <Grid item>
              <Select>
                <Link href='/account/redefinirsenha'>
                  Portuguese(Brasil)
                </Link>
              </Select>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={styles.body}>
        <Container maxWidth='sm'>
          <Grid container justifyContent='center' alignItems='column' spacing={2}>
            <Grid item={12}>
              <Typography variant='h4'><strong>Find your Chipper account</strong></Typography>
              <Typography variant='subtitle1'>Enter your email, phone number or username.</Typography>
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
                <strong>Search</strong>
              </Button>
            </form>
          </Grid>
        </Container>
      </div>
    </>
  )
}