import React from 'react';
import { Switch, Route,  Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import StockPage from "./pages/stock/stock.component";

import CheckoutPage from "./pages/checkout/checkout.component";

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";

/**
 * const ForHerPage = () => (
  <div>
    <h1>ForHerPage</h1>
  </div>
)

const ForHimPage = () => (
  <div>
    <h1>ForHimPage</h1>
  </div>
)

const ForKidsPage = () => (
  <div>
    <h1>ForKidsPage</h1>
  </div>
)

const ForOrganizations = () => (
  <div>
    <h1>ForOrganizations</h1>
  </div>
)

const ForCauses = () => (
  <div>
    <h1>ForHerCauses</h1>
  </div>
)

 */
class App extends React.Component{
  

unsubscribeFromAuth = null;

componentDidMount(){
  const { setCurrentUser } = this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot=>{
            setCurrentUser({
                  id: snapShot.id,
                  ...snapShot.data()
                });
            });
        }

        setCurrentUser(userAuth);
  });
}


componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/stock' component={StockPage}/>
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)}/>
{/**
 *           <Route path='/for-her' component={ForHerPage}/>
          <Route path='/for-him' component={ForHimPage}/>
          <Route path='/for-kids' component={ForKidsPage}/>
          <Route path='/for-organizations' component={ForOrganizations}/>
          <Route path='/for-causes' component={ForCauses}/> 
 */} 
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(App
    );
