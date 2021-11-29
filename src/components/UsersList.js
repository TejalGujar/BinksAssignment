import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {useDispatch, useSelector} from "react-redux";
import { logout } from "../actions/auth";
import { useNavigate } from "react-router";
import { Link, Navigate} from "react-router-dom";

function UserList() {

  const [myApi, setMyApi] = useState([]);
  const [data, setData] = useState([]); // add your data to here
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const renderData = (data) => {
    return data.map((item, idx) => {
      return (
        <>
          <div key={idx}>
            <Link to="/details" state={{person:item}} style={{textDecoration:"none",color:"black" }}>
              <h5>
                {item.name.title}. {item.name.first} {item.name.last}
              </h5>
            </Link>
          </div>
        </>
      );
    });
  };


  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((data) => data.json())
      .then((json_result) => {
        setData(json_result.results); // set your data to state
        let myApi = renderData(json_result.results); // render your component
        setMyApi(myApi); // set it to state
      });
  }, []);

 

  const handleLogout=()=>{
    dispatch(logout());
    navigate("/");
  }

  const { isLoggedIn } = useSelector(state => state.auth);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  //const outlet = useOutlet()
  return (
    <>
    <div className="form-group" style={{float:"right"}}>
            <button className="btn btn-primary btn-block" onClick={handleLogout}>
              <span>LOGOUT</span>
            </button>
          </div>
      <div style={{textAlign:"center",padding:50,alignItems:"center"}}>
          <h2 style={{color:"gray",paddingBottom:"80px"}}>Users List</h2><br/>
            {myApi}
      </div>
    </>
  );
}

export default UserList;
