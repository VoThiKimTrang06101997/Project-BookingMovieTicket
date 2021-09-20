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
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import Checkout from './pages/Checkout/Checkout';
import { Suspense, lazy } from "react";
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Loading from './components/Loading/Loading';


const CheckoutTemplateLazy = lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate'))

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Loading/>
      <Switch>
        <HomeTemplate path="/home" exact Component={TrangChuHome} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />

        <Route path="/register" exact Component={Register} />

        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout}/>

        <UserTemplate path="/login" exact Component={Login} />

        {/* <Suspense fallback={<h1>LOADING....</h1>}>
          <CheckoutTemplateLazy path="/checkout/:id" exact Component={Checkout} />
        </Suspense> */}

        <HomeTemplate path="/" exact Component={TrangChuHome} />


      </Switch>
    </Router>
  );
}

export default App;
