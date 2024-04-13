import React from "react";
import "./../../App.css"
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';    
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import { Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function Icon () {
    const theme=useTheme()
    return(
        <div className="container" style={{overflow:"hidden",marginTop:"20px",maxWidth:"100%",backgroundColor:theme.palette.mode==="dark"?"#000":"#fff"}}>
            <div className="parent" style={{textAlign:"left"}}>
                <Mybox icon={<ElectricBoltIcon />} title="Fast Delivery" body="start from $10"/>
                <Mybox icon={<WorkspacePremiumOutlinedIcon />} title="Money Quarantee" body="7 Days Back"/>
                <Mybox icon={<AccessAlarmOutlinedIcon />} title="365 Days" body="for free return"/>
                <Mybox icon={<CreditScoreOutlinedIcon />} title="Payment" body="scure system" />
            </div>
        </div>
    )
}


function Mybox({icon,title,body}) {
    return (
        <div style={{display:"flex",alignItems:"center",padding:"20px"}}>
            <div style={{marginRight:"20px"}}>{icon}</div>
            <Stack>
                <Typography variant="body1">{title}</Typography>
                <Typography sx={{fontWeight:"300",color:"#777"}}>{body}</Typography>
            </Stack>
        </div>
    )
}