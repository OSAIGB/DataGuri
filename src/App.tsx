import React, { useState, useEffect } from 'react';
import { createBrowserRouter, Routes, Route, useNavigate, Navigate, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import LoginPage from './loginPg';
import SignInPage from './signInPg';
import HomePage from './homePage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Account from './component/sidebarlinks/account';
import BuyAirtime from './component/sidebarlinks/buyAirtime';
import BuyData from './component/sidebarlinks/buyData';
import DataEpin from './component/sidebarlinks/dataEpin';
import EducationPin from './component/sidebarlinks/educationPin';
import FundWallet from './component/sidebarlinks/fundWallet';
import PayCableSub from './component/sidebarlinks/payCableSub';
import ElectricityBill from './component/sidebarlinks/payElectricityBill';
import PriceList from './layouts/PriceList';
import Transactions from './component/sidebarlinks/transaction';
import AirtelPriceList from './component/sidebarlinks/priceLists/airtelPrice';
import GloPriceList from './component/sidebarlinks/priceLists/GloPrice';
import NineMobilePriceList from './component/sidebarlinks/priceLists/nineMobile';
import Layout from './layouts/layout';
import CablePriceList from './component/sidebarlinks/priceLists/cableList';
import ElectricityPriceList from './component/sidebarlinks/priceLists/electricityPrice';
import EducationPriceList from './component/sidebarlinks/priceLists/educationPrice';
import MTNPriceList from './component/sidebarlinks/priceLists/mtnprices';
import NotFound from './NotFoundPage';


const App: React.FC = () => {
  const [myAppIsLoggedIn, setMyAppIsLoggedIn] = useState<boolean>(false);
  console.log(myAppIsLoggedIn);
  

  // Check login status on app start
  const checkLoginStatus = () => {
    console.log('checkLoginStatus called');
    const storeLoginStatus = localStorage.getItem('myAppIsLoggedIn');
    if (storeLoginStatus === 'true') {
      setMyAppIsLoggedIn(true);
      console.log('myAppIsLoggedIn set to true');
    } else {
      setMyAppIsLoggedIn(false);
      console.log('myAppIsLoggedIn set to false');
    }
  };

  const logIn = () => {
    setMyAppIsLoggedIn(true);
    localStorage.setItem('myAppIsLoggedIn', JSON.stringify(true));
  };

  const handleLogout = () => {
    console.log('handlelogout')
    setMyAppIsLoggedIn(false);
    localStorage.setItem('myAppIsLoggedIn', JSON.stringify(false));
    toast.success('Logged out successfully!', {
      // ...
    });
  };

  useEffect(() => {
    // Check login status on app start
    checkLoginStatus();
  }, []);

  // Listen for changes to isLoggedIn state and store in local storage
  useEffect(() => {
    localStorage.setItem('myAppIsLoggedIn', JSON.stringify(myAppIsLoggedIn));
  }, [myAppIsLoggedIn]);

  const router = createBrowserRouter(
    createRoutesFromElements(
  
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={myAppIsLoggedIn ? <HomePage onLogout={handleLogout} /> : <Navigate to="/login" />}
      />
      <Route path="account" element={<Account />} />
      <Route path="buyAirtime" element={<BuyAirtime />} />
      <Route path="buyData" element={<BuyData />} />
      <Route path="dataEpin" element={<DataEpin />} />
      <Route path="educationPin" element={<EducationPin />} />
      <Route path="fundWallet" element={<FundWallet />} />
      <Route path="buyCable" element={<PayCableSub />} />
      <Route path="payElect" element={<ElectricityBill />} />
      <Route path="airtimeEpin" element={<BuyAirtime />} />
      <Route path="priceList" element={<PriceList />}>
        <Route path="airtelPricelist" element={<AirtelPriceList />} />
        <Route path="glopricelist" element={<GloPriceList />} />
        <Route path="9mobilepricelist" element={<NineMobilePriceList />} />
        <Route path = 'cablepricelist' element = {<CablePriceList/>} />
        <Route path='electricityprices' element = {<ElectricityPriceList/>} />
        <Route path ='educationpricelist' element = {<EducationPriceList/>}/>
        <Route path =  'mtnprices' element = {<MTNPriceList/>} />
    
      </Route>
      
        <Route path = '*' element = {<NotFound/>} />
    <Route path="/login" element={<LoginPage logIn={logIn} />} />
    <Route path="/signup" element={<SignInPage />} />
  </Route>
    ))
  return (
    <main>
    <RouterProvider router = {router}/>
      <ToastContainer />
     
   </main>
  );
};

export default App;
