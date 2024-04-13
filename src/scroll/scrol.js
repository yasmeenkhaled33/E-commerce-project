import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Zoom } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';

export default function Scrollbar() {
    return (
        <Zoom in={useScrollTrigger({threshold:100})}>
        <Fab color='primary'
            variant='extended' 
            size='small' aria-label="add" 
            sx={{position:"fixed",right:"33px",bottom:"33px"}}
            onClick={()=>{
                window.scrollTo(0,0)
            }}>
            <KeyboardArrowUpIcon fontSize='medium'/>
        </Fab>
        </Zoom>
    )
}