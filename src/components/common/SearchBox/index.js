import React, { useEffect, useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import '../../../styles/Common/SearchBox/index.css';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default function SearchBox() {
  const [searchType, setSearchType] = useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const x = () => {
      setSearchType(10);
    }
    x()
  }, [])

  return (
    <div className="search-box-container">

      <FormControl variant="outlined" className="search-box-type">
        <InputLabel id="search-box-type-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={searchType ? searchType : 10}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={10}>Title</MenuItem>
          <MenuItem value={20}>Create Time</MenuItem>
          <MenuItem value={30}>Updata Time</MenuItem>
        </Select>
      </FormControl>

      {searchType === 10 && <TextField className="search-box-text" type="search" variant="outlined" />}
    



      <Button variant="contained" disableRipple color="primary">Search</Button>
    </div>
  );

}
