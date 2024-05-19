import React from 'react'
import AdminLayout from '../layout/AdminLayout'
import { Route, Routes } from 'react-router-dom'
import Home from '../admin/Dashboard/Home'
import Products from '../admin/Product/Products'
import Categories from '../admin/Category/Categories'

const AdminRoutes = () => {
  return (
    <AdminLayout>
        <Routes>
            <Route path='/manage' element={<Home />}/>
            <Route path='/manage/product' element={<Products />}/>
            <Route path='/manage/category' element={<Categories/>}/>
        </Routes>
    </AdminLayout>
  )
}

export default AdminRoutes