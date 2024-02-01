import React from 'react'
import Layout from '../../../components/Layouts/Layout'
import UserMenu from '../../../components/UserMenu/UserMenu'
import "./Orders.scss"

const Orders = () => {
  return (
    <Layout>
        <div className='app_orders'>
            <div>
                <UserMenu/>
            </div>
            <div>
                <h1>All Orders</h1>
            </div>
        </div>
    </Layout>
  )
}

export default Orders