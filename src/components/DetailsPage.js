import React from "react";
import { useLocation, useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import { useSelector , useDispatch} from "react-redux";
import {Navigate} from "react-router-dom"
import { logout } from "../actions/auth";

function DetailsPage() {

  const dispatch = useDispatch();
  const navigate=useNavigate();


  const handleLogout=()=>{
    dispatch(logout());
    navigate("/");
  }
  const loc = useLocation();
  const { isLoggedIn } = useSelector(state => state.auth);
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  
  const { person } = loc.state;

  return (
    <>
    <div className="form-group" style={{float:"right"}}>
        <button className="btn btn-primary btn-block" onClick={handleLogout}>
          <span>LOGOUT</span>
        </button>
    </div>
    <div style={{textAlign:"center",padding:50,alignItems:"center"}}>
      <h2 style={{color:"gray"}}>User Detail</h2><br/><br/>
      <img src={person.picture.large} alt="" style={{paddingTop:"80px"}} /><br/><br/>
      <h6 style={{paddingTop:"40px"}}>Name : { person.name.title}. {person.name.first} {person.name.last}</h6>
      <h6>Gender : {person.gender}</h6>
      <h6>Address : {person.location.street.number} {person.location.street.name} {person.location.city} {person.location.country} {person.location.postcode}</h6>
      <h6>Email : {person.email}</h6>
      <h6>Date of Birth : {person.dob.date}</h6>
      <h6>Mobile Number : {person.phone}</h6>
    </div>
    </>
  );
}

export default DetailsPage;
