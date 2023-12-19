import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditMenu() {
  const photoInput = useRef();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    // let body = { id: id };
    fetch(`http://localhost/exam_manag_api/student.php?s_id=${id}`)
      .then((response) => response.json())
      .then((user) => {
        setFormData({
          name: user?.s_name,
          phone: user?.phone,
          dob: user?.dob,
          img: user?.img,
        });
      });
  }, [id]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dob: "",
    img: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    setFormData((pre) => {
      let data = {
        ...pre,
        id: id,
        [name]: e.target.value,
      };
      return data;
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let pformData = new FormData();
    let photo = photoInput.current.files[0];
    Object.keys(formData).forEach((value) => {
      pformData.append(value, formData[value]);
    });
    if (photo != undefined) {
      pformData.append("photo", photo);
    }
    pformData.append("id", id);
    console.log(pformData);
    axios
      .post("http://localhost/exam_manag_api/updateStudent.php", pformData)
      .then(function () {
        alert("data update succcessfull");
        navigate("/student");
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Menu Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Menu Code:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Menu Price:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Menu Date:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
       
        <br />
        <div>
          <label htmlFor="">Nid:</label>
          <img
            src={`http://localhost//exam_manag_api/img/${formData.img}`}
            alt=""
            height={300}
            width={300}
          />
          <input ref={photoInput} type="file" name="nid" />
        </div>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditMenu;