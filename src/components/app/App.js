import AppHeader from "../appHeader/AppHeader";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {MainPage, ComicsPage } from "../pages";


const App =() => {

    return (
        <div className="app">
            <Router>
                <AppHeader/>
                <main>
                    <Switch>
                        <Route exact path="/">
                             <MainPage/>
                        </Route>
                        <Route exact path="/comics">
                            <ComicsPage/>
                        </Route>
                        </Switch>
                    </main>
                </Router>
        </div>
            
    );
     
}

export default App;