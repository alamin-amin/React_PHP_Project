import React from 'react'
import {motion} from 'framer-motion';

function SatisfayCustomers() {
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
        <div>

            <div>
                <div className='mt-3' style={FavoritesFood}>
                    <h1 style={{ textAlign: 'center', width: '100%' }} >OUR SATISFY CUSTOMERS</h1>
                </div>
                <div className='row row-cols-sm-1 row-cols-md-2 row-cols-lg-3  mt-4 mb-4 ms-5 ' >

                    <div className=''>
                        <motion.div whileHover={{ scale: 1.1 }} className="card" style={{ width: '27rem', heiggt: '200px' }}>
                            <img src="src/assets/images/satisfay1.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">
                                    <div class="item-title carousel-alignment center"><div class="item-title carousel-alignment center">It All Starts with a Marg!</div></div>
                                </h3>

                                <p className="card-text">In 2023, we're upping the marg game and introducing a whole new menu of premium margaritas to further establish Chili’s as the experts in margaritas. To do this, we’re partnering with fellow marg pros Jenna Fischer and Angela Kinsey to prove the fact that any night is always more fun when it starts with a marg.</p>
                                <span></span>
                                <a href="#" className="btn btn-warning pt-1 fs-2" style={{width :'100%',height:'62px'}}>Thirsty for More?</a>
                            </div>
                        </motion.div>
                    </div>
                    <div className=''>
                        <motion.div drag whileDrag={{ scale: 1.3 }} className="card" style={{ width: '27rem', heiggt: '200px' }}>
                            <img src="src/assets/images/satisfay.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h3 className="card-title"><div class="item-title carousel-alignment center">NEW Chicken Crisper Combo Meals</div></h3>
                                <h6 className="card-title">You can now enjoy all your favorites at once! Our hand-battered chicken tenders come with decadent white cheddar mac &amp; cheese, fries, our house-made ranch, and your choice of two signature dipping sauces.</h6>
                                <a href="#" className="btn btn-warning pt-1 fs-2" style={{width :'100%',height:'62px'}}>Discover Chicken Crispers</a>
                            </div>
                        </motion.div>
                    </div>
                    <div className=''>
                        <motion.div whileHover={{ scale: 1.1 }} className="card" style={{ width: '27rem', heiggt: '200px' }}>
                            <img src="src/assets/images/satisfay2.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title"><div class="item-title carousel-alignment center">Crave a New Marg Every Month</div></h3>
                                <p className="card-text">Our love for margs is only matched by our love to shake things up—so wre doing both with our Marg of the Month! Our margarita experts make each recipe in-house with premium, fresh ingredients  a new Rita in hand each month..</p>
                                <a href="#" className="btn btn-warning pt-1 fs-2" style={{width :'100%',height:'62px'}}>Get Sippin'</a>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SatisfayCustomers