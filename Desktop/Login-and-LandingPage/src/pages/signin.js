import React from 'react'
import Signin from '../components/Signin/Index'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'

const SigninPage = () => {
    return (
        <div>
            <ScrollToTop/>
            <Signin/>
            <Footer/>
        </div>
    )
}

export default SigninPage
