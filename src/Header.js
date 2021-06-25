import React from 'react';
import "./Header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccessTimeIcon from '@material-ui/icons/AccessTime';


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                {/* avatar fro loged in user */}
                <Avatar
                className="header__avatar"
                // alt={user?.displayName}
                // src={user?.photoURL}
                alt='dave'
                src='dave'
                />
                {/* time icon */}
                <AccessTimeIcon/>
            </div>
            <div className="header__search">
                {/* search icon */}
                <SearchIcon/>
                <input placeholder="search"/>
                {/* input */}

            </div>
            <div className="header__right">
                {/* help icon */}
                <HelpOutlineIcon/>

            </div>
        </div>
    )
}

export default Header
