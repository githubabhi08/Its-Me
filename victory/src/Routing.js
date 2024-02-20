import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Contacts from './Contacts'

function Routing() {
  return (
    <>
    <Routes>
        <Route path='Contact' element={<Contacts />} />
    </Routes>
    </>
  )
}

export default Routing