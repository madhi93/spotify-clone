
export const intialstate = {
    user : null,
    playlists:[],
    playing:false,
    item:null,
    token:null
    // token: "BQBeKRTgFCgx4sW4j3ASorxHDL6PGRnF7AET4km8OaU7UciAjAIDTc6FqhE3jbX0Lo-lv1rVbEPvfenHfLjGZLlQE75wwl-lNifhxKj-n0WIFaEQkYIGTRdUrmprfRqHrf3BvfeARTffpj9qKsolycH6mEbCyJ8P0-LBzil4gnIFy9WwFSvm"
};




export const reducer = (state =intialstate,action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            };
            case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            };
            case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists:action.playlists
            };
            case 'DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly:action.discover_weekly
            };
        default:
            return state;
    }
};