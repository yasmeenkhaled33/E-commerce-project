import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box, Dialog, DialogContent, Rating, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import "./../../App.css"
import { useTheme } from '@emotion/react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import Details from './Details';
import axios from 'axios';
import { useEffect } from 'react';


export default function Main() {
    const [open, setOpen] = useState(false);
    const [data, setdata] = useState(null);
    const [category, setcategory] = useState({});
    const [info, setinfo] = useState({});
    let [renderdata, setRenderData] = useState(data)
    const [alignment, setAlignment] = useState('left');
    const [active, setactive] = useState(null);



    const handleClickOpen = (el) => {
        setOpen(true);
        setinfo(el)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAlignment = (even,newAlignment) => {
        if(newAlignment !== null) {
            setAlignment(newAlignment);
        }
};
const theme=useTheme()

useEffect (()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(function(response){
        setRenderData(response?.data)
        setdata(response?.data)
    })

    axios.get("https://fakestoreapi.com/products/categories")
    .then(function(response){
        setcategory(response)
    })

},[])

function handelcategory (el) {
    setRenderData(data.filter((item)=>{
        return item.category === el
    }))
setactive(el)
}
    return (
        <div className="container" style={{marginTop:"20px",paddingBottom:"20px",paddingtop:"100px"}}>
            <div className="info" style={{display:"flex",flexWrap:"wrap",paddingtop:"70px",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
                <div className="name" style={{paddingBottom:"30px"}}>
                    <Typography variant='h4'style={{paddingBottom:"20px"}}>Selected Products</Typography>
                    <Typography variant='body' fontWeight={300}>All our new arrivals in a exclucive brand selection</Typography>
                </div>
                <div className="buttons" style={{textAlign:"right"}}>
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        className='toggle'
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        >
                        <ToggleButton id='cate' sx={{color:theme.palette.text.primary}} className={renderdata===data?"activve":"null"}  onClick={()=>{setRenderData(data)}} value="left" aria-label="left aligned">
                            all products
                        </ToggleButton>
                        {category?.data?.map((el,index)=>(
                            <ToggleButton id='cate' key={index} sx={{color:theme.palette.text.primary}} className={(active===el && renderdata!==data)?"activve":""} onClick={()=>{handelcategory(el)}} value="center" aria-label="centered">{el}</ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </div>
            </div>
            <div className="content">
                { 
                renderdata?.map((el)=>{ 
                            return ( 
                            <Card key={el.id} style={{maxWidth:"333px",margintop:"20px"}}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="320"
                                    image={el.image}
                                />
                                <CardContent>
                                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                        <Typography variant='h6' component={"p"}>{el.title}</Typography>
                                        <Typography variant='subtitle1'>{el.price}</Typography>
                                    </Stack>
                                    {/* <Typography>
                                        {el.discription}
                                    </Typography> */}
                                </CardContent>
                                <CardActions style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <Button onClick={()=>{handleClickOpen(el)}} sx={{textTransform:"capitalize"}}><AddShoppingCartIcon sx={{marginRight:"5px"}} fontSize='small'/>add to cart</Button>
                                    <Rating name="read-only" value={el.rating.rate} readOnly precision={0.5}/>
                                </CardActions>
                            </Card>
                        )
                    })
                } 
            </div>
            
            <Dialog
            onClick={handleClose}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent style={{padding:"0px", backgroundColor: theme.palette.bg.main}}>
                    <Box style={{width:"30px",position:"absolute",top:"0px",right:"0px"}}>
                        <CloseIcon  sx={{":hover":{rotate:"180deg",transition:"0.3s",color:"red"}}} onClick={handleClose}/>
                    </Box>
                    <Details detail={info}/>
                </DialogContent>
            </Dialog>
        </div>
    )
    

    
}