<<<<<<< HEAD
import React, { useEffect } from 'react'
=======
import React from 'react'
>>>>>>> development
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
<<<<<<< HEAD
import { logPageView } from './analytic'
import { initGA } from './analytic'
=======
import NotificationsScreen from './screens/NotificationsScreen'
import SellScreen from './screens/SellScreen'
import PaintingScreen from './screens/PaintingScreen'
import PhotographyScreen from './screens/PhotographyScreen'
import DrawingsScreen from './screens/DrawingsScreen'
import SculptureScreen from './screens/SculptureScreen'
>>>>>>> development

function App() {
  initGA()
  logPageView()

  return (
    <Router>
      <Header />
<<<<<<< HEAD
      <main className='py-3'>
        <Container>
=======

      <main className='py-1'>
        <Container className='container'>
          <Route path='/notifications' component={NotificationsScreen} />
>>>>>>> development
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/login' component={LoginScreen} />
<<<<<<< HEAD
          <Route path='/' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
=======
          <Route path='/sell' component={SellScreen} />
          <Route path='/paintings' component={PaintingScreen} />
          <Route path='/photography' component={PhotographyScreen} />
          <Route path='/drawings' component={DrawingsScreen} />
          <Route path='/sculpture' component={SculptureScreen} />
          <Route path='/' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />

          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />

          <Route
            path='/page/:pageNumber/:location/:minPrice/:maxPrice/:color'
>>>>>>> development
            component={HomeScreen}
            exact
          />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />

<<<<<<< HEAD
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
=======
>>>>>>> development
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />

          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
