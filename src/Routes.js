import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import CharacterListContainer from "./containers/CharacterListContainer";
import Details from "./containers/Details";


const Routes = () => {
    return (
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/character" component={CharacterListContainer} />
           <Route exact path="/details" component={Details} />
        </Switch>
    )
}

export default Routes;