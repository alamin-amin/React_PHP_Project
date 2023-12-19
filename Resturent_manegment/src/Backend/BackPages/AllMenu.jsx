import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllMenu() {


    const[product, setProduct]= useState([]);
  const [message, setMessage]= useState('');
 
//   useEffect( ()=>{   
//   getProductData();
//   },[]);

    useEffect(() => {
        const getProduct = () => {
            fetch("http://localhost/React_resturent_manegment/Api/AddMenu.php")
                .then(res => { return res.json() })
                .then(data => { setProduct(data) })
                .catch(error => { console.log(error) });
        }
        getProduct();
    }, []);


    const handleDelete = async (id) => {
        const res = await axios.delete("http://localhost/React_resturent_manegment/Api/AddMenu.php?id=" + id);
        setMessage(res.data.success);
        getUserData();
    }

    return (
        <React.Fragment>
            <div className="container container_overflow">
                <div className="row">
                    <div className="col-md-10 mt-4">
                        <h5 className="mb-4 text-center fs-4">All Menu </h5>
                        <p className="text-danger"> </p>
                        <table className="table table-bordered text-center" style={{ width: '1088px' }}>
                            <thead>
                                <tr>
                                    <th scope="col">Sr.No</th>
                                    <th scope="col">Menu Name</th>
                                    <th scope="col">Menu Code</th>
                                    <th scope="col">Menu Price</th>
                                    <th scope="col">Menu Date</th>
                                    <th scope="col">Menu Images</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product.map((pdata, index) => (
                                        <tr key={index}>
                                            <td>{index + 1} </td>
                                            <td>{pdata.Mname} </td>
                                            <td>{pdata.Mcode} </td>
                                            <td>{pdata.Mprice} </td>
                                            <td>{pdata.MDate} </td>
                                            <td><img src={`http://localhost//React_resturent_manegment/photos/${pdata.MImage}`} height={50} width={90} /></td>
                                            <td>
                                                <Link to={"/SideBar/EditMenu/" + pdata.id} className="btn btn-success mx-2">Edit</Link>
                                                <button className="btn btn-danger ms-2" onClick={() => handleDelete(pdata.id)} > Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}
export default AllMenu;