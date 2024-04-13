import { Box, Button, Link, Typography } from "@mui/material"
import "./../../App.css"
import photo from "./../../imgs/banner-16.jpg"
import photo2 from "./../../imgs/banner-17.jpg"
import photo3 from "./../../imgs/banner-25.jpg"
import photo4 from "./../../imgs/banner-15.jpg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./../../App.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';import 'swiper/css';
import 'swiper/css/pagination';
import "./../../slider.css";
import Icon from "./icons"

export default function Hero () {
    return(
        <>
        <div className="container" style={{overflow:"hidden",marginBottom:"20px"}}>
            <div style={{marginTop:"25px",display:"flex",gap:"5px",alignItems:"center",justifyContent:'space-between'}}>
                <Swiper
                    pagination={{
                    dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    loop={true}
                >
                    <SwiperSlide style={{position:"relative"}} className="swiperslide">
                        <img src={photo4} alt=""/>
                        <Box style={{position:"absolute",left:"10%",textAlign:"left"}} className="box">
                            <Typography className="lifestyle" style={{color:"#222",marginBottom:"10px"}} variant="h5">LIFESTYLE COLLECTION</Typography>
                            <Typography style={{color:"#222",fontWeight:"400",marginBottom:"10px"}} variant="h3">MEN</Typography>
                            <div style={{display:"flex",maxWidth:"100%",marginBottom:"10px"}}>
                                <Typography style={{color:"#222"}} variant="h4">SALE UP TO</Typography>
                                <Typography style={{color:"red"}} variant="h4">30% OFF</Typography>
                            </div>
                            <p style={{color:"#222"}}>Get Free Shopping on orders over $99.00</p>
                            <Button className="butt" sx={{backgroundColor:"#222",color:"#fff",borderRadius:"5px","&:hover":{backgroundColor:"#151515"}}} variant="contained">shop now</Button>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide className="swiperslide" style={{position:"relative"}}>
                        <img src={photo3} alt=""/>
                        <Box style={{position:"absolute",left:"10%",textAlign:"left"}} className="box">
                            <Typography className="lifestyle" style={{color:"#222",marginBottom:"10px"}} variant="h5">LIFESTYLE COLLECTION</Typography>
                            <Typography style={{color:"#222",fontWeight:"400",marginBottom:"10px"}} variant="h3">WOMEN</Typography>
                            <div style={{display:"flex",maxWidth:"100%",marginBottom:"10px"}}>
                                <Typography style={{color:"#222"}} variant="h4">SALE UP TO</Typography>
                                <Typography style={{color:"red"}} variant="h4">30% OFF</Typography>
                            </div>
                            <p style={{color:"#222"}}>Get Free Shopping on orders over $99.00</p>
                            <Button className="butt" sx={{backgroundColor:"#222",color:"#fff",borderRadius:"5px","&:hover":{backgroundColor:"#151515"}}} variant="contained">shop now</Button>
                        </Box>
                    </SwiperSlide>
                </Swiper>
                <Box className="rightside" style={{minWidth:"26.7%"}}>
                    <Box style={{position:"relative"}}> 
                        <img src={photo2} alt="pp" style={{width:"100%"}}/>
                        <div style={{position:"absolute",top:"50%",transform:"translatey(-50%)",left:"33px"}}>
                            <Typography variant="caption" sx={{color:"#283445",fontSize:"15px",paddingBottom:"20px"}}>
                                NEW ARRIVALS
                            </Typography>
                            <Typography variant="h6" sx={{color:"#283445",lineHeight:"16px"}}>
                                SUMMER
                            </Typography>
                            <Typography variant="h6" sx={{color:"#283445"}}>
                                SALE 20% OFF
                            </Typography>
                            <Link sx={{color:"#283445",
                            display:"flex",
                            alignItems:"center",
                            gap:"5px",
                            transition:"0.2s",
                            "&:hover":{color:"red"}}} href="#" underline="none">
                                shop new 
                                <ArrowForwardIcon sx={{fontSize:"13px"}}/>
                            </Link>
                        </div>
                    </Box>
                    <Box style={{position:"relative"}}> 
                        <img src={photo} alt="" style={{width:"100%"}} />
                        <div style={{position:"absolute",top:"50%",transform:"translatey(-50%)",left:"33px"}}>
                            <Typography variant="caption" sx={{color:"#283445",fontSize:"15px",paddingBottom:"20px"}}>
                                GAMING 4K
                            </Typography>
                            <Typography variant="h6" sx={{color:"#283445",lineHeight:"16px"}}>
                                DESKTOPS &
                            </Typography>
                            <Typography variant="h6" sx={{color:"#283445"}}>
                                LAPTOPS
                            </Typography>
                            <Link sx={{color:"#283445", 
                            display:"flex",
                            alignItems:"center",
                            gap:"5px",
                            transition:"0.2s",
                            "&:hover":{color:"red"}}} href="#" underline="none">
                                shop new 
                                <ArrowForwardIcon sx={{fontSize:"13px"}}/>
                            </Link>
                        </div>
                    </Box>
                </Box>
            </div>
            <Icon/>
        </div>
        </>
    )}