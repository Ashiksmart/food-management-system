import React from "react";
import '../css/Main.css'
import Slidebar from "./Slidebar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Blogs from "./pages/Foods";

class main extends React.Component {

render() {
    return (
        <>

        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Slidebar/>}>
            <Route index element={ <Dashboard/>}/>
            <Route path="foods" element={ <Dashboard/>}/>
            <Route path="favourite" element={ <Dashboard/>}/>
            <Route path="reports" element={ <Dashboard/>}/>
            <Route path="profile" element={ <Dashboard/>}/>
            <Route path="order_history" element={ <Dashboard/>}/>
            <Route path="notification" element={ <Dashboard/>}/>
            <Route path="settings" element={ <Dashboard/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
      
        </>
    )
}
}

export default main;