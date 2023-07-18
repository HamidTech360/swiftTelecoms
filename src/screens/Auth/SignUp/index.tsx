import { Link } from "react-router-dom";
import FormInput from "../../../components/forms/input";
import AuthLayout from "../../../layouts/authLayout";
import { AuthButton } from "../Login/login.style";
const SignUp = () => {
    return ( 
        <AuthLayout>
            <div style={{fontFamily:'inter'}} className="font-bold text-3xl mb-10">Sign Up</div>
            <div className="mb-4">
                <FormInput 
                    label="Name"
                    isImportant
                    placeholder="Enter your name"
                />
            </div>
            <div className="mb-4">
                <FormInput 
                    label="Email"
                    placeholder="Enter your email"
                    isImportant
                />
            </div>
            <div className="mb-4">
                <FormInput 
                    label="Password"
                    type="password"
                    placeholder="Create a password"
                    isImportant
                />
            </div>
            <div className="mt-5"><AuthButton>Create Account</AuthButton></div>
            <div style={{fontFamily:'inter'}} className="mt-3 mb- text-sm text-center">
                <span className="text-gray-500">Already have an account?  </span>
                <Link to="/" style={{color:'#7F56D9', textDecoration:'none'}}>Log In</Link>
            </div>
        </AuthLayout>
     );
}
 
export default SignUp;