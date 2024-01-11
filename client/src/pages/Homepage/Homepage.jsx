import React from 'react'
import "./Homepage.scss"
import Layout from '../../components/Layouts/Layout'
import { useAuth } from '../../context/auth'

const Homepage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
        <h1>Homepages Here</h1>
        <pre>{JSON.stringify(auth,null,4)}</pre>
    </Layout>
  )
}

export default Homepage