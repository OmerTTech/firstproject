import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './cart.css'
import { FaRegTrashAlt } from "react-icons/fa";
import { FormattedMessage } from 'react-intl';

const Cart = () => {
    const {items, removeFromCart} = useContext(CartContext)

    if(items.length === 0) {
        return <div className='alert alert-danger text-center w-25 mx-auto mt-5'><FormattedMessage id='alert' defaultMessage='Səbətiniz boşdur'/></div>
    }

  return (
    <div className='container mt-4'>
        <h4>All products ({items.length})</h4>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Total price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(item => {
                        return(
                            <tr>
                                <td>{item.id}</td>
                                <td style={{width:'20%'}}>
                                    <img src={item.image} alt="" />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price} ₼</td>
                                <td>
                                    <input type="number" defaultValue={item.count}/>
                                </td>
                                <td>{item.price * item.count} ₼</td>
                                <td>
                                    <button onClick={() => removeFromCart(item.id)} className='btn btn-danger'><FaRegTrashAlt /></button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Cart