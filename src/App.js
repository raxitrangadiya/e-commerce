import React from 'react';
// import Navbar from './comman component/Navbar'
import MainRouter  from './comman component/Mainrouter.jsx'
// import MainRouteraa  from './comman component/Mainrouteraa.jsx'
import { RouterProvider} from 'react-router-dom'
function App (){
  return (
    <>
    <RouterProvider router={MainRouter}/>
    </>

    
  ); 
};

export default App;