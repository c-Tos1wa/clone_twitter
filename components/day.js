import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'


export default function Day() {
  return (
    <FormControl variant='outlined'>
      <InputLabel id='day'>Dia</InputLabel>
      <Select
        labelId='day'
        id='day-select'
        fullWidth
      >
        <MenuItem></MenuItem>
        <MenuItem>01</MenuItem>
        <MenuItem>15</MenuItem>
        <MenuItem>22</MenuItem>
        <MenuItem>31</MenuItem>
      </Select>
    </FormControl>
  )
}