import { Button, Typography } from "@mui/material";
import "./../../App.css"
import { styled } from '@mui/material/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from "react";
import { Buynum } from "../../contexts/buycontext";
import { Buypagecontext } from "../../contexts/buybagecontext";


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function Details ({detail}) {
    const{buynum,setbuynum}=useContext(Buynum)
    const{buybage,setbuypage}=useContext(Buypagecontext)
    function handelclick() {
        setbuynum(+buynum+1)
        setbuypage([...buybage,detail])
    }
    console.log(detail)
        return (
            <div className="boox" style={{display:"flex",padding:"20px" ,alignItems:"center",gap:"10px"}}>
                <div >
                    <img src={detail.image} alt="" style={{width:"300px"}}/>
                </div>
                <div >
                    <Typography style={{fontWeight:"25",fontSize:"25px"}}>{detail.title}</Typography>
                    <Typography style={{color:"red"}}>${detail.price}</Typography>
                    <Typography sx={{lineHeight:"1.8"}}>{detail.description}</Typography>
                    <Button
                    onClick={handelclick}
                        component="label"
                        sx={{marginTop:"20px"}}
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<AddShoppingCartIcon sx={{marginRight:"5px"}} fontSize='small'/>}
                        >
                        buy Now
                    </Button>
                </div>
            </div>
        )
    }