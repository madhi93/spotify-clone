import React from   'react';
import './Sidebar.css';
import Sidebaroption from "./Sidebaroption";
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';
import {DatalayervValue} from './Datalayer'

function Sidebar() {
    const [{playlists},dispatch] = DatalayervValue();
    console.log(playlists);
    return(
        <div className="sidebar">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" className="sidebar__logo"/>
            <Sidebaroption Icon={HomeIcon} title="Home"/>
            <Sidebaroption Icon={SearchIcon} title="Search"/>
            <Sidebaroption Icon={LibraryMusicIcon} title="Your Library"/>
            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>
            {
                playlists?.items?.map(playlist => {
                    return (
                        <Sidebaroption title={playlist.name}/>
                    )
                })
            }
        </div>
    )

}


export default Sidebar;