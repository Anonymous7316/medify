import { Box, Button, Typography } from "@mui/material";
import { memo } from "react";

function Hero(){
    return(
        <Box sx={{height:736, backgroundImage:'linear-gradient(to right, #E7F0FF, #E8F1FF78)'}}>
            <Box sx={{display:'flex', justifyContent:'space-evenly'}}>
                <Box sx={{padding:7 , paddingRight:0}}>
                    <Box sx={{height:207, width:663, color:"black"}}>
                        <Typography variant="h4" sx={{fontWeight:500}}>Skip the travel! Find Online</Typography>
                        <Typography variant="h2" sx={{fontWeight:700}}>Medical <span style={{color:'#2AA8FF'}}>Centers</span></Typography>
                        <Typography variant="h6" sx={{color:'#5C6169', fontSize:20}}>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</Typography>
                    </Box>
                    <Button variant="contained" sx={{backgroundColor:'#2AA8FF', padding:'12px 36px 12px 36px', borderRadius:2,}}>Find Centers</Button>
                </Box>
                <img style={{height:481, width:585, filter: 'drop-shadow(2px 10px 0.40rem grey)'}} src="NicePng_doctor-png_336282.png" alt="" />
            </Box>
        </Box>
    )
}
export default memo(Hero);