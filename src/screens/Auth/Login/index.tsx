import { Link } from "react-router-dom";
import FormInput from "../../../components/forms/input";
import AuthLayout from "../../../layouts/authLayout";
import { AuthButton } from "../Login/login.style";
const Login = () => {
    return ( 
        <AuthLayout>
            <div style={{fontFamily:'inter'}} className="font-bold text-3xl mb-1">Log In</div>
            <div className="text-sm text-gray-400  mb-10">Welcome back. Please enter your details</div>
            <div className="mb-4">
                <FormInput 
                    label="Email"
                    isImportant
                    placeholder="Enter your email"
                />
            </div>
            <div className="mb-4">
                <FormInput 
                    label="Password"
                    placeholder="Enter your password"
                    isImportant
                />
            </div>
           
            <div className="mt-5"><AuthButton>Sign In</AuthButton></div>
            <div style={{fontFamily:'inter'}} className="mt-3 mb- text-sm text-center">
                <span className="text-gray-500">Don't have an account?  </span>
                <Link to="/register" style={{color:'#7F56D9', textDecoration:'none'}}>Sign Up</Link>
            </div>
        </AuthLayout>
     );
}
 
export default Login;