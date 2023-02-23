import { Outlet, Link } from "react-router-dom";
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';

import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import { padding } from "@mui/system";
function Layout() {
    
  return (
    <div  style={{padding:'150px'}}>
      <Paper className="layout" sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
      <MenuItem>
        
        <ListItemIcon>
          <SendIcon />
          <Link className="linkbtn" to="/home">Home</Link>
        </ListItemIcon>
        
        </MenuItem>
        <MenuItem>
        
        <ListItemIcon>
          <SendIcon />
          <Link className="linkbtn" to="/blogs">Blogs</Link>
        </ListItemIcon>
        
        </MenuItem>
        <MenuItem>
        
        <ListItemIcon>
        <InboxIcon />
          <Link className="linkbtn" to="/contact">Contact</Link>
        </ListItemIcon>
        
        </MenuItem>
        <Divider />
        <MenuItem>
        <ListItemIcon>
        <DraftsIcon />
          <Link className="linkbtn" to="/login">Login</Link>
        </ListItemIcon>
        </MenuItem>
        <MenuItem>
        <ListItemIcon>
        <DraftsIcon />
          <Link className="linkbtn" to="/register">Register</Link>
        </ListItemIcon>
        </MenuItem>
         
        </MenuList>
      </Paper>

      <Outlet />
    </div>
  )
};

export default Layout;