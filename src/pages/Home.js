import React, {useState} from 'react'
import NavigationBar from '../components/navbar/index';
import SideBar from '../components/sidebar/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PromoSection from '../components/promo';
import Sports from '../pages/Sports'
import AddProductComponent from '../components/addproduct/AddProductComponent';
import Woman from './Woman';
import Man from './Man';
import Kids from './Kids';
import CartPage from '../components/cart/CartPage'
import ProductDetails from '../components/main/ProductDetails'
import Remove from './Remove';

const Home = ({array}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
   
    return (
        <Router>
             <SideBar isOpen={isOpen} toggle={toggle}/>
             <NavigationBar toggle={toggle}  />
           
             <Switch>  
              <Route  path='/' exact component={PromoSection}/>
              <Route  path='/sports' exact component={Sports}/>
              <Route  path='/woman' exact component={Woman}/>
              <Route  path='/man' exact component={Man}/>
              <Route  path='/kids' exact component={Kids}/>
              <Route  path='/cart' exact component={CartPage}/>
              <Route  path='/rm' exact component={Remove}/>
              <Route  path='/product/add' exact component={AddProductComponent}/> 
              <Route  path='/product/:id' exact component={ProductDetails}/>
            </Switch> 
        </Router>
    )
}

export default Home
