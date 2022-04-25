import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import New from './Components/New'
import Page404 from './Components/Page404'
import Navbar from './Components/Navbar'



const App = () => {
    return (
        <>
            <Navbar ></Navbar>
            <Switch>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/new">
                    <New></New>
                </Route>
                <Redirect from="/" exact to="/home" >
                </Redirect>
                <Route path="*">
                    <Page404></Page404>
                </Route>
            </Switch>
        </>
    )
}

export default App