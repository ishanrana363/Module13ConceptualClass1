import { useState } from "react";
import "../Navbar/navbar.css"
import LoginLogout from "./LoginLogout";

const Navbar = () => {
    const [userLoginValue,setUserLoginValue] = useState(false)
    const userHandle = () =>{
        setUserLoginValue(!userLoginValue)
    }
    return (
        <div>
            <nav>
                <div className="">IR Lab</div>
                
                <div className="">
                    <LoginLogout 
                    loginValue = {userLoginValue}
                    handle = {userHandle}
                    />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;