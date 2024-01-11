import React from 'react'
import Layout from '../../components/Layouts/Layout'
import AdminMenu from '../../components/AdminMenu/AdminMenu'

const CreateCategory = () => {
    return (
        <>
            <Layout>
                <div className='app__admin-dashboard'>
                    <div>
                        <AdminMenu/>
                    </div>
                    <div>
                        <h1>Create Catogory</h1>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default CreateCategory