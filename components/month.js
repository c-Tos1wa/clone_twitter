import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core'


export default function Month(){
return(
  <FormControl variant='outlined'>
  <InputLabel id='month'>Mês</InputLabel>
  <Select
    labelId='month'
    id='month-select'
    fullWidth
  >
    <MenuItem></MenuItem>
    <MenuItem>Janeiro</MenuItem>
    <MenuItem>Fevereiro</MenuItem>
    <MenuItem>Março</MenuItem>
    <MenuItem>Abril</MenuItem>
    <MenuItem>Maio</MenuItem>
    <MenuItem>Junho</MenuItem>
    <MenuItem>Julho</MenuItem>
    <MenuItem>Agosto</MenuItem>
    <MenuItem>Setembro</MenuItem>
    <MenuItem>Outubro</MenuItem>
    <MenuItem>Novembro</MenuItem>
    <MenuItem>Dezembro</MenuItem>
  </Select>
  </FormControl>

)  
}