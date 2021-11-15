import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from '../src/components/Header.js';
import Footer from './components/Footer.js';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import CartScreen from './screens/CartScreen.js';
import LoginScreen from './screens/LoginScreen.js';


function App() {
  return (
    <Fragment>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path='/login' component={LoginScreen}/>
          <Route path='/product/:id' component={ProductScreen}/>
          <Route path='/cart/:id?' component={CartScreen}/>
          
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
