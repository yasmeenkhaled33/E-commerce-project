import {  ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import "./../../App.css"

export default function Links ({title}) {
    return (
        <>
            <box className="box" style={{display:"flex",alignItems:"center",position:"relative"}}>
                <Typography>{title}</Typography>
                <ExpandMore/>
                <box className="hoverr-show"  style={{position:"absolute",zIndex:4,display:"none",top:"100%",minWidth:"170px",left:"50%",transform:"translatex(-50%)"}}>
                    <Paper style={{marginTop:"17px"}}>
                        <nav aria-label="secondary mailbox folders">
                            <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                <ListItemText sx={{".MuiTypography-root":{fontSize:"13px"}}} primary="Dashboard" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding className="keey">
                                <ListItemButton style={{position:"relative"}}>
                                <ListItemText sx={{".MuiTypography-root":{fontSize:"13px"}}} primary="Products" />
                                <KeyboardArrowRightOutlined/>
                                <box className="list-show" style={{display:"none"}}>
                                    <Paper style={{ position:"absolute",left:"100%",top:"0px"}}>
                                        <nav aria-label="secondary mailbox folders">
                                            <List>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                <ListItemText style={{minWidth:"100px"}} primary="Add product" />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemButton component="a" href="#simple-list">
                                                <ListItemText primary="Edit product" />
                                                </ListItemButton>
                                            </ListItem>
                                            </List>
                                        </nav>
                                    </Paper>
                                </box>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="#simple-list">
                                <ListItemText sx={{".MuiTypography-root":{fontSize:"13px"}}} primary="orders" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="#simple-list">
                                <ListItemText sx={{".MuiTypography-root":{fontSize:"13px"}}} primary="profile" />
                                </ListItemButton>
                            </ListItem>
                            </List>
                        </nav>
                    </Paper>
                </box>
            </box>
        </>
    )
}

