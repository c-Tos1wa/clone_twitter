import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

export default function Year() {
  return (
    <FormControl variant='outlined'>
      <InputLabel id='year'>Ano</InputLabel>
      <Select
        labelId='year'
        id='year-select'
        fullWidth
      >
        <MenuItem></MenuItem>
        <MenuItem>1990</MenuItem>
        <MenuItem>2000</MenuItem>
        <MenuItem>2010</MenuItem>
        <MenuItem>2021</MenuItem>
      </Select>
    </FormControl>
  )
}

