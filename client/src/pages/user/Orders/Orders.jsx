import React, { useEffect, useState } from 'react'
import Layout from '../../../components/Layouts/Layout'
import { useAuth } from '../../../context/auth'
import UserMenu from '../../../components/UserMenu/UserMenu'
import "./Orders.scss"
import axios from 'axios'
import moment from 'moment'

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/orders`);
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <Layout>
      <div className='app_orders'>
        <div>
          <UserMenu />
        </div>
        <div>
          <h1>All Orders</h1>
          {
            orders.map((o, i) => {
              return (
                <div>
                  <table>
                    <thead>
                      <td>#</td>
                      <td>Status</td>
                      <td>Buyer</td>
                      <td>Orders</td>
                      <td>Payment</td>
                      <td>Quantity</td>
                    </thead>
                    <tbody>
                      <tr>
                        <th>{i + 1}</th>
                        <th>{o?.status}</th>
                        <th>{o?.buyer?.name}</th>
                        <th>{moment(o?.createAt).fromNow()}</th>
                        <th>{o?.payment.success ? "Success" : "Failed"}</th>
                        <th>{o?.products?.length}</th>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    {o?.products?.map((p, i) => (
                      <div>
                        <div>
                          <img src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} alt={p.name} style={{ width: "14rem" }} />
                        </div>
                        <div>
                          <p>{p.name}</p>
                          <p>{p.description.substring(0, 10)}</p>
                          <p>Price :{p.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </Layout>
  )
}

export default Orders