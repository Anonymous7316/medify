import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import { memo } from "react";
import './Banner.css';

function Banner(){
    return(
        <Box sx={{
            backgroundColor:'#2AA7FF',
            color:'white',
            height:40,
            width:'100%',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
        }}>
            <Typography variant="caption">
                The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
            </Typography>
        </Box>
    )
}

export default memo(Banner);