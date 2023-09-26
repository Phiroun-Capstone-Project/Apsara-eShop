import React from 'react'
import Products from './Products';

function Home() {
    return (
        <div className='background'>
            <div className="card bg-dark text-white border-0">
                <img src="/assets/images/bg.jpeg" className="card-img" alt="background" height="500px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">New Collections Arrival</h5>
                        <p className="card-text lead fs-2">CHECK OUT OUR NEW TRENDS</p>
                    </div>
                </div>
            </div>
            <div>
                <Products />
            </div>
        </div>
    )
}

export default Home;