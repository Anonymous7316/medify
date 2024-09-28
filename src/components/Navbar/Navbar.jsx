import { Box, Button, Typography } from "@mui/material";
import {useNavigate} from 'react-router-dom';

function Navbar(){
    const navigate = useNavigate();

    return(
        <Box sx={{display:'flex', justifyContent:'space-around', alignItems:'center', color:'black', height:96, backgroundImage:'linear-gradient(to right, #E7F0FF, #E8F1FF78)'}}>
            <img style={{height:27, width:92}} src="Group 7.png" alt="" />
            <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'50%', color:'#102851'}}> 
                <Typography sx={{cursor:'pointer'}} variant="subtitle2" onClick={()=>navigate('/findDoctors')}>Find Doctors</Typography>
                <Typography sx={{cursor:'pointer'}} variant="subtitle2">Hospitals</Typography>
                <Typography sx={{cursor:'pointer'}} variant="subtitle2">Medicines</Typography>
                <Typography sx={{cursor:'pointer'}} variant="subtitle2">Surgeries</Typography>
                <Typography sx={{cursor:'pointer'}} variant="subtitle2">Software for Provider</Typography>
                <Typography sx={{cursor:'pointer'}} variant="subtitle2">Facilities</Typography>
                <Button variant="contained" sx={{backgroundColor:'#2AA8FF', padding:'12px 36px 12px 36px', borderRadius:2, height:40}} onClick={()=>navigate('/myBookings')}>My Booking</Button>
            </Box>
        </Box>
    )
}
export default Navbar;