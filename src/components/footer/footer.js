import { Typography } from "@mui/material"
import "./../../App.css"


export default function Footer() {
    return(
        <div >
            <div style={{backgroundColor:"#203445",padding:"20px",borderTopLeftRadius:8,borderTopRightRadius:8}}>
                <Typography 
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
                color={"HighlightText"}
                variant="h6"
                sx={{fontSize:18}}
                >
                    Designed and developed by
                        <button style={{color:"#ff7790",cursor:"pointer",border:"none",textTransform:"capitalize",fontSize:"18px",backgroundColor:"transparent"}}>
                            yasmeen khaled
                        </button> 2024
                </Typography>
            </div>
        </div>
    )
}