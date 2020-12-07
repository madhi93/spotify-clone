

export const authEndPoint = "https://accounts.spotify.com/authorize";


// const redirectUrl = "http://localhost:3000";
// const clientId = "ea8353c1dce545578418db77fea51f45";

const redirectUrl = "https://spotify-clone-3ed31.web.app";
const clientId = "6cc8076872e14b73ae3207c3ded06ac3";


const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",

];


export const getTokenFromUrl = () =>{
    return window.location.hash.substring(1).split("&").reduce((intial,item)=>{
        var parts = item.split("=");
        intial[parts[0]] = decodeURIComponent(parts[1]);
        return intial;
    },{})

}


export const   loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;