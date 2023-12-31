import React, { useState } from 'react'
import {motion} from 'framer-motion';

function Food_cards() {




    let FavoritesFood = {
        display: 'flex',
        alignItems: 'center',
        height: '112px',
        backgroundColor: '#ffff80',
    }

    let foodcards ={
        display: 'flex',
        alignItems: 'center',
    }
    return (
        <div >
            <div className='mt-3' style={FavoritesFood}>
                <h1 style ={{textAlign: 'center', width: '100%'}} >FOODBOX'S FAVORITES</h1>
            </div>
            <div className='row row-cols-sm-1 row-cols-md-2 row-cols-lg-3  mt-4 mb-4 ms-5 ' >

                <div className=''>
                    <motion.div whileHover={{scale:1.1 }} className="card" style={{ width: '27rem', heiggt: '200px' }}>
                        <img src="src/assets/images/card7.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">5 Pc crispy Combo</h3>
                            
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='mb-2 text-success text-end fs-4'>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star-half-alt'/>
                            </div>
                            <a href="#" className="btn btn-warning pt-2 fs-3" style={{width :'100%',height:'62px'}}> <i className='fas fa-shopping-cart pe-2'/>Add to Order</a>
                        </div>
                    </motion.div>
                </div>
                <div className=''>
                    <motion.div drag whileDrag={{scale :1.3}} className="card" style={{ width: '27rem', heiggt: '200px' }}>
                        <img src="src/assets/card2.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Bacon Ranch cheiken </h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='mb-2 text-success text-end fs-4'>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star-half-alt'/>
                            </div>
                            <a href="#" className="btn btn-warning pt-2 fs-3" style={{width :'100%',height:'62px'}}> <i className='fas fa-shopping-cart pe-2'/>Add to Order</a>
                        </div>
                    </motion.div>
                </div>
                <div className=''>
                    <motion.div whileHover={{scale:1.1 }} className="card" style={{ width: '27rem', heiggt: '200px' }}>
                        <img src="src/assets/card3.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Chicken Fajitas</h3>
                            <p className="card-text">Chicken Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream</p>
                            <div className='mb-2 text-success text-end fs-4'>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star-half-alt'/>
                                <i className='fas fa-star-half-alt'/>
                            </div>
                            <a href="#" className="btn btn-warning pt-2 fs-3" style={{width :'100%',height:'62px'}}> <i className='fas fa-shopping-cart pe-2'/>Add to Order</a>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Food_cards