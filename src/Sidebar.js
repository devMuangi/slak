import React, { useState,useEffect} from 'react';
import "./Sidebar.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SidebarOption from './SidebarOption';
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import AddIcon from '@material-ui/icons/Add';
import { useStateValue } from "./StateProvider";
import db from "./firebase";

function Sidebar() {

    const [channels, setChannels] = useState([]);
    const [{ user }] = useStateValue();

    // runs code when component loads
    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc=>({
                id: doc.id,
                name: doc.data().name,
            })))
        ));
    }, []);



    return (
        <div className="sidebar"> 
        <div className="sidebar__header">
           <div className="sidebar__info">
           <h2>dave ent</h2>
            <h3>
                <FiberManualRecordIcon/>
                {user?.displayName}
            </h3>
           </div>
            <CreateIcon/>  
        </div>
        <SidebarOption Icon={InsertCommentIcon} title="threads"/> 
        <SidebarOption Icon ={PeopleAltIcon} title="people"/> 
       
        <SidebarOption Icon={InboxIcon} title="inbox"/> 
        <SidebarOption Icon={BookmarkBorderIcon}title="redcross"/> 
        <SidebarOption Icon={ExpandLessIcon} title="show less"/> 
        <hr/>
        <SidebarOption Icon={ExpandMoreIcon} title="channels"/> 
        <SidebarOption Icon={AddIcon} addChannelOption title="addChannel"/> 
        {channels.map(channel => (
            <SidebarOption title={channel.name} id={channel.id}/>
        ))}
        </div>
    )
}

export default Sidebar;
