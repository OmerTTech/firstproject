import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside>
        <Link to='/manage/product'>Product</Link>
        <Link to='/manage/category'>Category</Link>
    </aside>
  )
}

export default Sidebar