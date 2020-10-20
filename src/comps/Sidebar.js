
import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { useStateValue } from '../StateProvider/StateProvider';


function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} 
            title={user.displayName} 

            />

            <SidebarRow  Icon={PeopleIcon} title="Friends" />
            <SidebarRow  Icon={ChatIcon} title="Message" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow />

        </div>
    )
}

export default Sidebar
