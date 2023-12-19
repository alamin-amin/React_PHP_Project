import axios from "axios";
import React, {useState, useEffect }from "react";
import { useNavigate, useParams } from "react-router-dom";
import AllCategory from "./AllCategory";

function EditCategory()
{   
    const navigate= useNavigate();  
    const {id}=   useParams();
    const [formvalue, setFormvalue]= useState({categoryName:'', categoryunit:'', status:''});
    const [message, setMessage]= useState('');

    const handleInput =(e)=>{
        setFormvalue({...formvalue, [e.target.name]:e.target.value});
    }

    useEffect( ()=>{
        const userRowdata= async()=>{
         const getUserdata= await fetch("http://localhost/React_resturent_manegment/Api/AddCategory.php"+id);
         const resuserdata= await getUserdata.json();        
         setFormvalue(resuserdata);
        }
        userRowdata();
    },[]);

    const handleSubmit =async(e)=>{
         e.preventDefault();
         //console.log(formvalue);
         const formData= {id:id,categoryName:formvalue.categoryName, categoryunit:formvalue.categoryunit, status:formvalue.status}; 
         const res= await axios.put("http://localhost/React_resturent_manegment/Api/AddCategory.php",formData);
         //let jsonres= res.data.json();        
           if(res.data.success)
           {
            setMessage(res.data.success);
            setTimeout( ()=>{               
                navigate('/SideBar/AllCategory');
            }, 1000);
           
           }
        }   
    return(
        <React.Fragment>
        <div className="container">
            <div className="row fs-4 bg-light" style={{width:'888px'}}>
                <div className="mt-4">
                    <h5 className="mb-4">Edit Category </h5>
                    <p className="text-sucess"> {message}</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 ">
                            <label className="p-1">Category Name :</label>
                            <div className="">
                                
                                <input  type="text" name="categoryName" value={formvalue.categoryName} className="form-control" onChange={handleInput} />
                            </div>
                        </div>
                        <div className="mb-3 ">
                            <label className="p-1">Category unit :</label>
                            <div className="">
                                
                                <input type="text" name="categoryunit" value={formvalue.categoryunit} className="form-control" onChange={handleInput} />
                            </div>
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
                                <button name="submit" className="btn btn-success">Update</button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    </React.Fragment>
    );
}
export default EditCategory;