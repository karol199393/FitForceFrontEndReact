import { ListItemText } from "@mui/material";
import { List } from "@mui/material";
import React from "react";
import ListItemButton from '@mui/material/ListItemButton';
import './VerticalMenu.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function VerticalMenu() {
    return (
        <Router>
            <List component="nav" className="menu">
                <Link to="/treningi">
                    <ListItemButton>
                        <ListItemText primary="Treningi" />
                    </ListItemButton>
                </Link>
                <Link to="/podopieczni">
                    <ListItemButton>
                        <ListItemText primary="Podopieczni" />
                    </ListItemButton>
                </Link>
                <Link to="/kalendarz">
                    <ListItemButton>
                        <ListItemText primary="Kalendarz" />
                    </ListItemButton>
                </Link>
            </List>
        </Router>
    );
}