import React from 'react'
import Header from '../components/layout/Header';
import MainBanner from '../components/banner/MainBanner';
import SellSlide from '../components/best/SellSlide';
import ProductTabs from '../components/product/ProductTabs';
import StoreMap from '../components/map/StoreMap';
import ReviewSlide from '../components/best/ReviewSlide';
import Footer from '../components/layout/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <MainBanner />
            <SellSlide/>
            <ProductTabs/>
            <StoreMap/>
            <ReviewSlide/>
            <Footer/>
        </div>
    )
}

export default Home