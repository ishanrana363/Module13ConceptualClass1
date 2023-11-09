import "../Navbar/navbar.css"
const LoginLogout = (props) => {
    // eslint-disable-next-line react/prop-types
    const {loginValue,handle} = props;
return (
    <div>
        <div className="">
            {
                loginValue ? (
                    <div className="user-Icon" onClick={handle} >

                    </div>
                ) : (
                    <button onClick={handle} >Login</button>
                )
            }
        </div>
    </div>
)
}

export default LoginLogout
