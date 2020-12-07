import React from   'react';
import './Body.css';
import Header from "./Header";
import weekly from'./discover-weekly.png'
import {DatalayervValue} from   './Datalayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SingleRow from "./SingleRow";

function Body({spotify}) {
const [{discover_weekly},dispatch] = DatalayervValue();

console.log(discover_weekly);
    return(
        <div className="body">
           <Header spotify={spotify}/>
           <div className="body__info">
               <img src={discover_weekly?.images[0]?.url} alt=""/>
               <div className="body__infoText">
                <strong>
                    PLAYLISTS
                </strong>
                   <h2>{discover_weekly?.name}</h2>
                   <p>{discover_weekly?.description}</p>
               </div>
           </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body_shuffle" />
                    <FavoriteIcon  fontSize="large"/>
                    <MoreHorizIcon />
                </div>
                {
                    discover_weekly?.tracks?.items.map(item => {
                        return (
                           <SingleRow track = {item.track}/>
                        )
                        }
                    )
                }
            </div>
        </div>
    )

}


export default Body;