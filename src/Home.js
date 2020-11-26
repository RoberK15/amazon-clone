import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""/>

                <div className="home__row">
                    <Product 
                        id="1"
                        title="The lean startup1"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"                    
                        rating={5}
                    />
                    <Product 
                        id="2"
                        title="The lean startup2"
                        price={22.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"                    
                        rating={4}
                    />                    
                </div>
                <div className="home__row">
                    <Product 
                        id="3"
                        title="The lean startup3"
                        price={9.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"                    
                        rating={3}
                    />
                    <Product 
                        id="4"
                        title="The lean startup4"
                        price={11.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"                    
                        rating={2}
                    />
                    <Product 
                        id="5"
                        title="The lean startup5"
                        price={2.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"                    
                        rating={1}
                    />                                      
                </div>
                <div className="home__row">
                    <Product 
                        id="6"
                        title="The lean startup6"
                        price={44.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"                    
                        rating={6}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
