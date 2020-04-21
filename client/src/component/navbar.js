import React from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Navbar = (props) => {

    const Dispatch = useDispatch()
    const Auth_user = useSelector((state)=>state.userAuthenticated)
    console.log(Auth_user,"this is auth user")

    const signOut = ()=>{
        localStorage.clear()
        Dispatch({type:"invalid user"})
    }



    return (
        <nav className="navbar navbar-extended nbar">
            <h3>OrganiseIt</h3>
            {Auth_user?<button className="btn btn-sm btn-danger"
            onClick={()=>signOut()}>signOut</button>:''}

        </nav>
    )

}





export default Navbar

