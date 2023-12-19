import React from 'react'

function Location() {
    return (
        <div >
            <div className='mt-5'>
                <img style={{ width: "100%", height: "300px ", paddingBottom: "12px" }} src='src/assets/images/locationimg.png'></img>
            </div>
            <div className='row' pt-5>
                <div className='col-4'>
                    <h2>Contact Us</h2>
                    <p>House #16, Road # 2, Dhanmondi R/A, Dhaka-1205, Bangladesh
                        Phone : 09613 787801, 09666 787801
                        E-mail : info@populardiagnostic.com</p>
                </div>
                <div className='col-4'>
                    <h2>Important Links</h2>
                    <h4>Facebook</h4>
                    <h4><i class="fa fa-twitter" aria-hidden="true"></i>Twitter</h4>
                    <h4><i class="fa fa-whatsapp" aria-hidden="true">whatsapp</i></h4>
                </div>
                <div className='col-4'>
                    <h2>Quick Links</h2>
                    <a href=""> Home Delevary</a><br></br>
                    <a href=""> Takeway</a><br></br>
                    <a href=""> Online Servic</a>
                </div>

            </div>

        </div>
    )
}

export default Location