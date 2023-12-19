import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

// import Protected from "./Protected";

export default function Login() {
    const naviget = useNavigate();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    useEffect(() => {
        let login = localStorage.getItem("login");
        if (login) {
            naviget("/home");
        }
        let loginStatus = localStorage.getItem("loginStatus");
        if (loginStatus) {
            setError(loginStatus);
            setTimeout(function () {
                localStorage.clear();
                window.location.reload();
            }, 3000);
        }
        setTimeout(function () {
            setMsg("");
        }, 5000);
    }, [msg]);

    const handleInputChange = (e, type) => {
        switch (type) {
            case "user":
                setError("");
                setUser(e.target.value);
                if (e.target.value === "") {
                    setError("Username has left blank");
                }
                break;
            case "pass":
                setError("");
                setPass(e.target.value);
                if (e.target.value === "") {
                    setError("Password has left blank");
                }
                break;
            default:
        }
    }

    function loginSubmit() {
        if (user !== "" && pass != "") {
            var url = "http://localhost/React_resturent_manegment/Api/Login.php";
            var headers = {
                "Accept": "application/json",
                "Content-type": "application/json"
            };
            var Data = {
                user: user,
                pass: pass
            };
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            }).then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    if (response[0].result === "Invalid username!" || response[0].result === "Invalid password!") {
                        setError(response[0].result);
                    }
                    else {
                        setMsg(response[0].result);
                        setTimeout(function () {
                            localStorage.setItem("login", true);
                            localStorage.setItem('user', user);
                            naviget("/home");
                        }, 5000);
                    }
                }).catch((err) => {
                    setError(err);
                    console.log(err);
                })
        }
        else {
            setError("All field are required!")
        }
    }
    return (
        <>
            <section className="vh-100" style={{ backgroundColor: '#9A616D'}}>
                <div className="container py-5 h-100 fs-5" style={{width:"800px" }}>
                    <div className="row justify-content-center ">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: '1rem' }}>
                                <div className="row g-0">
                                    {/* <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}} />
                    </div> */}
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">
                                            <p>
                                                {
                                                    error !== "" ?
                                                        <div style={{ color: '#842029' }}><b>{error}</b></div> :
                                                        <div style={{ color: '#badbcc' }}><b>{msg}</b></div>
                                                }
                                            </p>
                                            <div className="mb-5 text-center" style={{textAlign:'center'}}>
                                                <span className="h1 fw-bold mb-0">FooDBoX</span>
                                            </div>
                                            <h4 className="fw-normal mb-3 pb-3 text-success" style={{ letterSpacing: 1 }}>Sign into your account</h4>
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="text"
                                                    id="username"
                                                    className="form-control form-control-lg"
                                                    value={user}
                                                    onChange={(e) => handleInputChange(e, "user")}
                                                />
                                                <label className="form-label" htmlFor="username">User Name</label>
                                            </div>
                                            <div className="form-outline mb-2">
                                                <input
                                                    type="password"
                                                    id="pass"
                                                    className="form-control form-control-lg"
                                                    value={pass}
                                                    onChange={(e) => handleInputChange(e, "pass")}
                                                />
                                                <label className="form-label" htmlFor="pass">Password</label>
                                            </div>
                                            <div className="pt-1 mb-3">
                                                <input
                                                    type="submit"
                                                    defaultValue="Login"
                                                    className="btn btn-dark btn-lg btn-block"
                                                    onClick={loginSubmit}
                                                />
                                            </div>
                                            <a className="text-warning" href="#!">Forgot password?</a>
                                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account ? <a href="#!" style={{ color: 'green' }}>Register here</a></p>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
