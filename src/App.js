import './App.css';
import Login from "./Login";
import React,{useState,useEffect} from 'react';
import {getTokenFromUrl} from  './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import {DatalayervValue} from './Datalayer'
import Player from './Player';
function App() {
  // const[token,setToken] = useState(null);
  const [{user,token},dispatch] = DatalayervValue();
  const spotify = new SpotifyWebApi();
  useEffect(()=>{
    const hash = getTokenFromUrl();
    console.log(hash);
    window.location.hash="";
    const _token = hash.access_token;
    if(_token){
      // setToken(_token);
      dispatch(
          {
            type:'SET_TOKEN',
            token:_token
          }
      );
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        // console.log(user);
        dispatch(
            {
              type : 'SET_USER',
              user:user
            }
        );
      });

      spotify.getUserPlaylists().then(playlists => {
         console.log(playlists);
          dispatch({
              type:'SET_PLAYLISTS',
              playlists:playlists

          });
      });

      spotify.getPlaylist('3pEaqteVsPErm4JHyCK1l1').then(res => {
          dispatch({
              type : 'DISCOVER_WEEKLY',
              discover_weekly : res
          })
      })
    }
  },[]);
  console.log(user);
  console.log(token);
  return (
    <div className="App">
      {token ? <Player spotify={spotify}/> :<Login/> }
    {/*<Login/>*/}
    </div>
  );
}

export default App;
