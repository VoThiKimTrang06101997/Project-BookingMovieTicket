import './App.css';
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from 'react-router';

import TrangChuHome from './pages/TrangChuHome/TrangChuHome';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={TrangChuHome}/>
        <HomeTemplate path="/contact" exact Component={Contact}/>
        <HomeTemplate path="/news" exact Component={News}/>
        <HomeTemplate path="/detail/:id" exact Component={Detail}/>

        <Route path="/login" exact Component={Login}/>
        <Route path="/register" exact Component={Register}/>

        <HomeTemplate path="/" exact Component={TrangChuHome}/>


      </Switch>
    </Router>
  );
}

export default App;
