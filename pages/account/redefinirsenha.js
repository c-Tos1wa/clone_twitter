import Link from 'next/link'
import LogoIcon from '../../components/logoicon'
import styles from '../../styles/rsenha.module.scss'
import { Typography, Container, Grid, Button, TextField } from '@material-ui/core'

export default function RedefinirSenha(){
  return(
    <>
      <div className="header">
        <Container>
          <Grid>
            <LogoIcon />
            Redefinir Senha
              <label for="language"></label>
                <select id="language" name="language">
                    <option>English</option>
                  <option>Portuguese(Brazil)</option>
                </select>
          </Grid>
        </Container>
      <div className="body">
        <Container>
          <Grid>
            <Typography variant='h4'>Encontre sua conta do Chipper</Typography>
            <Typography variant='subtitle1'>Digite seu e-mail, número de celular ou nome de usuário.</Typography>
            <form>
              <TextField>
                variant='outlined'
              </TextField>
          <input type="text" />
        </form>
        <input type="submit" value="Buscar" />

          </Grid>
        </Container>
      </div>
    </div>
    </>
  )
}