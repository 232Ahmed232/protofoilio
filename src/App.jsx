import ReactDOM from 'react-dom/client'
import { Route, Router, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Header from './componenets/Header/Header'
import Body from './componenets/Body/Body'
import Frontend from './componenets/Frontend/Frontend'
import Backend from './componenets/Backend/Backend'
import CV from './componenets/CV/CV'

function App() { 
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Body />}>
         <Route path="" element={<Frontend/>}/>
         <Route path="backend" element={<Backend/>}/>
         <Route path="CV" element={<CV/>}/>

    </Route>
  )) 


  
  return (
    <>

     <Header />
     <RouterProvider router={router}/>


    </>
  )
}

export default App
