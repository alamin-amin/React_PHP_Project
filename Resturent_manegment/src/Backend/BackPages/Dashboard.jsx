import React from 'react'

function Dashboard() {
    return (

        <div>
            <div className='row ps-5 pt-4'>
                <div className='col-4'>
                    <div className="card bg-info" style={{ width: "18rem", height: '200px' }}>
                        <div className="card-body text-center">
                            <h5 className="card-title text-center">Total Order</h5>
                            <h2 className="card-subtitle mb-2 text-muted pb-5">33</h2>
                            <a href="#" className="card-link pt-5" style={{ textDecoration: 'none', color: 'white', fontSize: '23px', textAlign: 'center' }}>View Details</a>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className="card bg-success" style={{ width: "18rem", height: '200px' }}>
                        <div className="card-body text-center">
                            <h5 className="card-title text-center">Panding Order</h5>
                            <h2 className="card-subtitle mb-2 text-muted pb-5">10</h2>
                            <a href="#" className="card-link pt-5" style={{ textDecoration: 'none', color: 'white', fontSize: '23px', textAlign: 'center' }}>View Details</a>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className="card bg-primary" style={{ width: "18rem", height: '200px' }}>
                        <div className="card-body text-center">
                            <h5 className="card-title text-center">Success Order</h5>
                            <h2 className="card-subtitle mb-2 text-muted pb-5">20</h2>
                            <a href="#" className="card-link pt-5" style={{ textDecoration: 'none', color: 'white', fontSize: '23px', textAlign: 'center' }}>View Details</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className='row ps-5 pt-4'>
                <div className='col-4'>
                    <div className="card bg-warning" style={{ width: "18rem", height: '200px' }}>
                        <div className="card-body text-center">
                            <h5 className="card-title text-center">Report</h5>
                            <h2 className="card-subtitle mb-2 text-muted pb-5"></h2>
                            <a href="#" className="card-link pt-5" style={{ textDecoration: 'none', color: 'white', fontSize: '23px', textAlign: 'center' }}>View Details</a>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className="card bg-secondary" style={{ width: "18rem", height: '200px' }}>
                        <div className="card-body pt-4 text-center">
                            <h5 className="card-title pb-5 text-center">Inventory</h5>
                            <h2 className="card-subtitle mb-2 text-muted pb-5"></h2>
                            <a href="#" className="card-link pt-5" style={{ textDecoration: 'none', color: 'white', fontSize: '23px', textAlign: 'center' }}>View Details</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Dashboard