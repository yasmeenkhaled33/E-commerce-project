import { Link } from "react-router-dom"; 
import Hrader1 from "./header/header1";
import {  CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext,useMode } from "./../them";
import { useContext, useState } from "react";
import { Buynum } from "../contexts/buycontext";
import Scrollbar from "../scroll/scrol";    
import { Buypagecontext } from "../contexts/buybagecontext";
import Button from '@mui/material/Button';
import { Box } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export default function Buybage () {
    const [theme, colorMode] = useMode();
    const{buynum,setbuynum}=useContext(Buynum)
    const{buybage,setbuypage}=useContext(Buypagecontext)
    console.log(buybage)
    function handeldelete(el) {
        setbuypage(buybage.filter((item)=>{
            return(item!==el)
        }))
        setbuynum(buynum-1)
    }

    return(
        <>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Hrader1/>
                    <Scrollbar/>
                </ThemeProvider>
            </ColorModeContext.Provider>
            <div className="container">
                <p>CART({buynum})</p>
                {buybage?.map((el)=>{
                    return(
                        <Box key={el.id} bgcolor={theme.palette.bg.main} sx={{padding:"20px"}}>
                            <div style={{width:"100%",borderRadius:"6px",display:"flex",alignItems:"start"}}>
                                <div  style={{width:"10%",display:"flex",flexDirection:"column"}}>
                                    <img src={el.image} style={{maxWidth:"100px"}} alt=""/>
                                    <Button onClick={()=>{handeldelete(el)}} sx={{textTransform:"capitalize",alignItems:"center",justifyContent:"left"}}><DeleteOutlineIcon sx={{marginRight:"5px"}} fontSize='large'/>REMOVE</Button>
                                </div>
                                <div style={{width:"90%",marginTop:"-15px",display:"flex",justifyContent:"space-between",alignItems:"start"}}>
                                    <p style={{marginLeft:"20px",fontSize:"27px"}}>j{el.title}</p>
                                    <p style={{fontSize:"25px",color:"red",fontWeight:"bold",marginRight:"20px"}}>{el.price}$</p>
                                </div>
                            </div>
                            <hr/>   
                        </Box>
                    )
                })} 
                <Link to={"/"}>
                    <p style={{color:"white",border:"none"}}>return</p>
                </Link>
            </div>
        </>
    )
}
