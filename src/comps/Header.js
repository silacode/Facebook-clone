import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import {Avatar, IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActivateIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from '../StateProvider/StateProvider';


function Header() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" 
                alt = "facebookLogo" 
                />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </div>
            <div className="header__middle">
                <div className="header__options header__options--active">
                    <HomeIcon fontSize="large" />
                </div>

                <div className="header__options">
                    <SubscriptionsIcon fontSize="large" />
                </div>
                <div className="header__options">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header__options">
                    <SupervisedUserCircleOutlinedIcon fontSize="large" />
                </div>

            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActivateIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>

            </div>
        </div>
    )
}

export default Header
