import React from 'react'
import Layout from '../../../components/Layouts/Layout'
import UserMenu from '../../../components/UserMenu/UserMenu'
import "./Profile.scss"

const Profile = () => {
    return (
        <Layout>
            <div>
                <div>
                    <UserMenu />
                </div>
                <div>
                    <h1>Your Profile</h1>
                </div>
            </div>
        </Layout>
    )
}

export default Profile