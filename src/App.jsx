import Index from 'pages';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import VragInfoPage from 'pages/vrag';
import 'styles/styles.css';


function App() {
  return (
    <div className='App'>
        <Router>
            <Switch>
                <Route path="/vrag">
                    <VragInfoPage />
                </Route>
                <Route path="/">
                    <Index />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
