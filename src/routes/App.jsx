import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import { Layout } from '../components/Layout'

import { Home } from '../pages/Home'
import { Checkout } from '../pages/Checkout'
import { Information } from '../pages/Information'
import { NotFound } from '../pages/NotFound'
import { Payments } from '../pages/Payments'
import { Succes } from '../pages/Succes'
import { AppContextProvider } from '../context/AppContext';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
export const App = () => {
  const CI = process.env.CLIENT_ID;
  return (
    <PayPalScriptProvider options={{ "client-id":CI}}>
      <AppContextProvider>
        <HashRouter>
          <Layout>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/checkout/information' element={<Information />} />
              <Route path='/checkout/payment' element={<Payments />} />
              <Route path='/checkout/success' element={<Succes />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Layout>
        </HashRouter>
      </AppContextProvider>
    </PayPalScriptProvider>
  )
}
