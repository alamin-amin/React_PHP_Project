import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function AllCategory() {
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const reqData = await fetch("http://localhost/React_resturent_manegment/Api/AddCategory.php");
    const resData = await reqData.json();
    setUserData(resData);
  }

  const handleDelete = async (id) => {

    const res = await axios.delete("http://localhost/React_resturent_manegment/Api/AddCategory.php?id=" + id);
    setMessage(res.data.success);
    getUserData();
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-10 mt-4">
            <h3 className="mb-4 text-center">All Category</h3>
            <p className="text-danger">{message} </p>
            <table className="table table-bordered w-555px" style={{width:'755px'}}>
              <thead>
                <tr className="text-center">
                  <th scope="col">Sr.No</th>
                  <th scope="col">Category Name</th>
                  <th scope="col">Category Unit</th>
                  <th scope="col">Status</th>
                  <th scope="col" className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  userData.map((uData, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{uData.categoryName}</td>
                      <td>{uData.categoryunit}</td>
                      <td>{uData.status == 1 ? "Active" : "Inactive"} </td>
                      <td>
                        <Link to={"/SideBar/EditCategory/" + uData.id} className="btn btn-success mx-2"> <i className='fas fa-edit'/> Edit</Link>
                        <button className="btn btn-danger ms-2" onClick={() => handleDelete(uData.id)} > <i className='fas fa-trash'/> Delete</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
}
export default AllCategory;