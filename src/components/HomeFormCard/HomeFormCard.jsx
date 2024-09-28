import { Box, Typography } from "@mui/material";

export default function formCard({Img,label}){
    return(
        <Box>
            <img style={{width:60, height:60}} src={Img} alt="" />
            <Typography>{label}</Typography>
        </Box>
    );
};