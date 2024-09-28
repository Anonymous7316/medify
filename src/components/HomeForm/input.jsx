import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import { Autocomplete, TextField } from '@mui/material';

export default function Input({data,setterFunc,placeholder}) {
    // console.log(data);
  return (
    <Box

      sx={{ p: '2px 4px', border:'1px solid #F0F0F0', display: 'flex', alignItems: 'center', width: 285, backgroundColor:'#FAFBFE' ,borderRadius:2 }}
    >
      <IconButton type="button" sx={{ p: '10px', color:'#ABB6C7' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Autocomplete
        onChange={(e,value)=>setterFunc(value)}
        sx={{ ml: 1, flex: 1, color:'#ABB6C7', border:'none',
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            }, 
            '.MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
        }}
        placeholder={placeholder}
        disablePortal
        options={data}
        renderInput={(params) => <TextField name={placeholder} size='small' sx={{'& .MuiFormLabel-root': {color:'#ABB6C7'}}} {...params} label={placeholder} />}
      />
    </Box>
  );
}