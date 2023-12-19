import { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Order from './components/pages/Order'
import Menu from './components/pages/Menu'
import Location from './components/pages/Location'
import Addmenu from './Backend/BackPages/AddMenu'
import SideBar from './Backend/BackComponents/SideBar'
import CreatOrder from './Backend/BackPages/CreatOrder'
import AddCaregory from './Backend/BackPages/AddCaregory';
import AllCategory from './Backend/BackPages/AllCategory'
import EditCategory from './Backend/BackPages/EditCategory'
import Dashboard from './Backend/BackPages/Dashboard'
import Login from './components/Login'
import Protected from './components/Protected'
import AddMenu from './Backend/BackPages/AddMenu'
import AllMenu from './Backend/BackPages/AllMenu'
import EditMenu from './Backend/BackPages/EditMenu'
import CustomerOrder from './components/CustomerOrder'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        < Navbar />
        <Routes>
          {/* <Route path="" element={< Login />} />  
          <Route path="" element={< Protected />} />   */}
          <Route path="" element={<Home />} />
          <Route path="order" element={<Order />} />
          <Route path="Sidebar" element={<SideBar/>} >
            <Route path="" element={<Dashboard/>}/>
            <Route path="CreatOrder" element={<CreatOrder/>}/>          
            <Route path="CustomerOrder" element={<CustomerOrder/>}/>          
            <Route path="add-menu" element={<AddMenu/>}/>
            <Route path="AllMenu" element={<AllMenu/>}/>
            <Route path="EditMenu" element={<EditMenu/>}/>
            <Route path="addCaregory" element={<AddCaregory/>}/>
            <Route path="AllCategory" element={<AllCategory/>}/>
            <Route path="EditCategory" element={<Outlet/>}>
              <Route path=':id' element={<EditCategory/>} />
              
            </Route>
           
          </Route>
          <Route path="Menu" element={<Menu />} />
          <Route path="Add-menu" element={<add-menu />} />
          <Route path="location" element={<Location />} />
          <Route path="add-menu" element={<Addmenu />} />
          <Route path="CustomerOrder" element={<CustomerOrder/>} />
         
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
