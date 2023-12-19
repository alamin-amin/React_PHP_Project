import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function AddMenu() {
  const navigate = useNavigate();
  const [Mname, setMname] = useState('');
  const [Mcode, setMcode] = useState('');
  const [Mprice, setMprice] = useState('');
  const [MDate, setMdate] = useState('');
  const [MImage, setMImage] = useState('');
  const [message, setMessage] = useState('');

  const uploadProduct = async () => {
    const formData = new FormData();
    formData.append('Mname', Mname);
    formData.append('Mcode', Mcode);
    formData.append('Mprice', Mprice);
    formData.append('MDate', MDate);
    formData.append('MImage', MImage);
    const responce = await axios.post("http://localhost/React_resturent_manegment/Api/AddMenu.php", formData, {
    headers: { 'Content-Type': "multipart/form-data" },
    });

    if (responce.data.success) {
      setMessage(responce.data.success);
      setTimeout(() => {
        navigate('/SideBar/AllMenu');
      },2000);

    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    await uploadProduct();

  }
  return (
    <React.Fragment>
        <div className="container">
          <div className="row">
            <div className=" mt-4 fs-4 bg-light" style={{width:'888px'}}>
              <h3 className="mb-4 text-center"><i className="fas fa-shopping-bag"/> Add Menu </h3>
              <p className="text-warning">{message}</p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3 row">
                  <label className="col-sm-3">Menu Nmae : </label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" onChange={(e) => setMname(e.target.value)} />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-3">Menu Code :</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" onChange={(e) => setMcode(e.target.value)} />
                  </div>
                </div>

                <div className="mb-3 row">
                  <label className="col-sm-3">Menu Price : </label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" onChange={(e) => setMprice(e.target.value)} />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-3">Date :</label>
                  <div className="col-sm-9">
                    <input type="date" className="form-control" onChange={(e) => setMdate(e.target.value)} />
                  </div>
                </div>

                <div className="mb-3 row">
                  <label className="col-sm-3">Menu Image :</label>
                  <div className="col-sm-9">
                    <input type="file" className="form-control" onChange={(e) => setMImage(e.target.files[0])} />
                  </div>
                </div>

                <div className="mb-3 row">
                  <label className="col-sm-3"></label>
                  <div className="col-sm-9">
                    <button type="submit" className="btn btn-success fs-3">Submit</button>
                  </div>
                </div>

              </form>

            </div>
          </div>
        </div>
    </React.Fragment>
  );
}
export default AddMenu;