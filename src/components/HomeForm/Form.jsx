import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Input from "./input";
import '../HomeForm/Form.css';
import FormCard from "../HomeFormCard/HomeFormCard";
import axios from "axios";

let img=[
    {img:'Doctor.png',label:'Doctors'},
    {img:'Drugstore.png',label:'Labs'},
    {img:'Hospital.png',label:'Hospitals'},
    {img:'Capsule.png',label:'Medical Store'},
    {img:'Ambulance.png',label:'Ambulance'},
];

function Form(){
    const [selected, setSelected] = useState(null);
    const [states,setStates] = useState([]);
    const [city, setCity] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(()=>{
        async function getStates(){
            try{
                const res = await axios('https://meddata-backend.onrender.com/states');
                setStates(res.data);
            }
            catch(e){
                console.error(e);
            }
        }
        getStates();
    },[]);

    useEffect(()=>{
        async function getCity(){
            try{
                const res = await axios(`https://meddata-backend.onrender.com/cities/${selectedState}`);
                setCity(res.data);
            }
            catch(e){
                console.log(e);
            }
        }
        if(selectedState!='')
            getCity();

    },[selectedState]);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        data.type=selected;
        const res = await axios(`https://meddata-backend.onrender.com/data?state=${data.State}&city=${data.City}`);
        e.target.reset();
        console.log(res.data);
    };

    return(
        <Box sx={{height:429, width:'72%', position:'absolute', top:530, backgroundColor:'#FFFFFF', borderRadius:5, boxShadow: "rgba(0, 0, 0, 0.14) 0px 10px 15px", textAlign:'center'}}>
            <form action="" onSubmit={(e)=>handleSubmit(e)}>
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:18, padding:6, paddingBottom:8, position:'relative'}}>
                    <Input data={states} setterFunc={setSelectedState} placeholder={'State'}/>
                    <Input data={city} setterFunc={setSelectedCity} placeholder={'City'}/>
                    <Button type='submit' variant="contained" sx={{backgroundColor:'#2AA8FF', position:'absolute', right:50, borderRadius:2, width:121, height:50, fontSize:16, fontWeight:500}}><SearchIcon/>Search</Button>
                </Box>
                <Typography sx={{color:'#102851',fontSize:20, marginBottom:5, fontWeight:500}}>You may be looking for</Typography>
                <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                    {img.map((card,index)=>{
                        return(
                            <Box key={index} className={selected===card.label?'SelectedCard':'Card'} onClick={()=>{setSelected(card.label)}}>
                                <FormCard  Img={card.img} label={card.label}/>
                            </Box>
                        )
                    })}
                </Box>
            </form>
        </Box>  
    )
}
export default Form;