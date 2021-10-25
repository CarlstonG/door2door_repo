import React from 'react'
import Navbar from './components/MenuBar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Info from './Pages/Info'

const App = () => {
    return (
        <>
            <Router>
            <Navbar/>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/info' component={Info}/>
                    </Switch>
                
            </Router>
        </>
    )
}

export default App
