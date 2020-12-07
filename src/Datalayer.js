import React,{createContext,useContext,useReducer} from  'react';



export const DatalayerContext = createContext();


 export const Datalayer = ({intialstate , reducer,children}) => {
     return(
   <DatalayerContext.Provider value = {useReducer(reducer,intialstate)}>
       {children}
   </DatalayerContext.Provider>
     )
 };

 export const DatalayervValue = () => useContext(DatalayerContext);