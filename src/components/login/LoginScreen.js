import {useNavigate} from "react-router-dom";

const LoginScreen = () => {

    const navigate = useNavigate()

    const handleLogin = () => {

        navigate('/marvel', {
            replace: true
        })

        console.log('logeado')
    }
    return(
        <div>
            <h1>Login Screen</h1>

            <hr/>

            <button
                onClick={ handleLogin }
                className="btn btn-primary"
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen