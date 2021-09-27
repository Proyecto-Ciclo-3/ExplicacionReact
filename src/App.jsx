import Index from 'pages';
import Layout from 'components/layouts/Layout';
import Nigrum from 'pages/nigrum';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import VragInfoPage from 'pages/vrag';
import 'styles/styles.css';


function App() {
return (
    <div className='App'>
        <Router>
            <Layout>
                <Switch>
                <Route path="/vrag">
                    <VragInfoPage />
                </Route>
                <Route path="/nigrum">
                    <Nigrum />
                </Route>
                <Route path="/">
                    <Index />
                </Route>
                </Switch>
                </Layout>
        </Router>
    </div>
);
}

export default App;
