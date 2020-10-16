import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt=""
            />

            <div className="home__row">
                <Product 
                    id="123"
                    title="The Lear Startup: how Constant Innovation Creates"
                    price={1100.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg"
                />

                <Product 
                    id="1234"
                    title="The Lear Startup: how Constant Innovation Creates"
                    price={110.96}
                    rating={1}
                    image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="12345"
                    title="The Lear Startup: how Constant Innovation Creates"
                    price={156.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg"
                />

                <Product 
                    id="123456"
                    title="The Lear Startup: how Constant Innovation Creates"
                    price={56.67}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg"
                />

                <Product 
                    id="1234567"
                    title="The Lear Startup: how Constant Innovation Creates"
                    price={456.87}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg"
                />
            </div>
            
            <div className="home__row">
                <Product 
                    id="1234568"
                    title="The Lear Startup: how Constant Innovation Creates"
                    price={56.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg"
                />
            </div>
            

        </div>
    )
}

export default Home
