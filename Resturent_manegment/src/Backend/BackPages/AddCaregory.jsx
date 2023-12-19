import axios from "axios";
import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
function AddCaregory() {
    const navigate = useNavigate();
    const [formvalue, setFormvalue] = useState({ categoryName: '', categoryunit: '', status: '' });
    const [message, setMessage] = useState('');
    const handleInput = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formvalue);
        const formData = { categoryName: formvalue.categoryName, categoryunit: formvalue.categoryunit, status: formvalue.status };
        const res = await axios.post("http://localhost/React_resturent_manegment/Api/AddCategory.php", formData);
        //let jsonres= res.data.json();        
        if (res.data.success) {
            setMessage(res.data.success);
            setTimeout(() => {
                navigate('/SideBar/AllCategory');
            }, 2000);

        }
    }

    const tostNotification=()=>{
        toast.success ('Category add Successfull !',{
            position:'top-center',
            autoClose:5000,
            theme: "dark",

        })
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="mt-4 bg-body">
                        <h5 className="mb-4 text-center fs-4"><i className='fas fa-star'/> AddCategory <i className='fas fa-star'/> </h5>
                        <p className="text-sucess "> {message}</p>
                        <form onSubmit={handleSubmit} style={{width:"644px",fontSize:'20px'}}>
                            <div className="mb-3 ">
                                <label htmlFor ='name'>Category Name :</label>
                                    <input  type="text" name="categoryName" value={formvalue.categoryName} className="form-control" onChange={handleInput} />
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor ='categoryunit'>Category unit :</label> 
                                    <input type="text" name="categoryunit" value={formvalue.categoryunit} className="form-control" onChange={handleInput} /> 
                            </div>

                            <div className="mb-3">
                                <label className="p-1">Status :</label>
                                <div className=" p-1">
                                    <select name="status" className="form-control" value={formvalue.status} onChange={handleInput}>
                                        <option value="">--Select Status--</option>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-3 row">
                          
                                <div className=" text-red">
                                    <button name="submit" className="btn btn-success" onClick={tostNotification}>Submit</button>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </React.Fragment>
    );
}
export default AddCaregory;