import React from 'react'
import {motion} from 'framer-motion';

function Menu() {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 p-5">
                <motion.div whileHover={{scale:1.1 }} class="col">
                    <div class="card h-100 text-center">
                        <img src="src/assets/images/card8.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Burger</h3>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <span className='fa fa star '> </span>
                        <div class="card-footer text-center bg-dark ">
                        <a href="#" className="btn btn-warning ">Add to Order</a>
                        </div>
                    </div>
                </motion.div>
                <motion.div whileHover={{scale:1.1 }} class="col">
                    <div class="card h-100 text-center">
                        <img src="src/assets/images/card7.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer text-center bg-dark">
                        <a href="#" className="btn btn-warning ">Add to Order</a>
                        </div>
                    </div>
                </motion.div>
                <motion.div whileHover={{scale:1.1 }} class="col">
                    <div class="card h-100 text-center">
                        <img src="src/assets/images/card9.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer text-center bg-dark">
                        <a href="#" className="btn btn-warning ">Add to Order</a>
                        </div>
                    </div>
                </motion.div>
            </div>
            
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 p-5">
                <motion.div whileHover={{scale:1.1 }} class="col">
                    <div class="card h-100 text-center">
                        <img src="src/assets/images/card8.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Burger</h3>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer text-center bg-dark ">
                        <a href="#" className="btn btn-warning ">Add to Order</a>
                        </div>
                    </div>
                </motion.div>
                <motion.div whileHover={{scale:1.1 }} class="col">
                    <div class="card h-100 text-center">
                        <img src="src/assets/images/card7.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer text-center bg-dark">
                        <a href="#" className="btn btn-warning ">Add to Order</a>
                        </div>
                    </div>
                </motion.div>
                <motion.div whileHover={{scale:1.1 }} class="col">
                    <div class="card h-100 text-center">
                        <img src="src/assets/images/card9.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer text-center bg-dark">
                        <a href="#" className="btn btn-warning ">Add to Order</a>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Menu