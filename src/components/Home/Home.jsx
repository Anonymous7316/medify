import Banner from '../Banner/Banner';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import Form from '../HomeForm/Form';
import { Box } from '@mui/material';

function Home() {

  return (
    <Box sx={{position:'relative'}}>
      <Banner/>
      <Navbar/>
      <Hero/>
      <img style={{height:171.79, width:173.8, position:'absolute',top:340, left:1550}} src="dotGrid.png" alt="" />
      <Box sx={{display:'flex', justifyContent:'center'}}>
        <Form/>
      </Box>
    </Box>
  )
}

export default Home
