import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../../components/forms/input";
import AuthLayout from "../../../layouts/authLayout";
import { AuthButton } from "../Login/login.style";
import {apiUrl} from '../../../config/index.json'
import DangerAlert from "../../../components/alert/dangerAlert";


const Login = () => {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, seterrorMsg] = useState(null)
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })

    const handleChange = (e:any)=>{
        const formData__c = {...formData}
        //@ts-ignore
        formData__c[e.currentTarget.name] = e.currentTarget.value
        setFormData(formData__c)
        // console.log(formData)
    }
    const handleSubmit = async ()=>{
        try{
            setIsLoading(true)
            const {data} = await axios.post(`${apiUrl}/login`, formData)
            seterrorMsg(null)
            localStorage.setItem('token', data?.token)
            localStorage.setItem('username', data?.username)
            navigate('/user/dashboard')
           console.log(data);
           
        }catch(error:any){
            console.log(error?.response?.data)
            seterrorMsg(error?.response?.data?.error || 'Something went wrong')
        }finally{
            setIsLoading(false)
        }
    }

    return ( 
        <AuthLayout>
            <div style={{fontFamily:'inter'}} className="font-bold text-3xl mb-1">Log In</div>
            <div className="text-sm text-gray-400  mb-10">Welcome back. Please enter your details</div>
            <div className="mb-4">
                <FormInput
                    onChange={(e)=>handleChange(e)} 
                    name="email"
                    label="Email"
                    isImportant
                    placeholder="Enter your email"
                />
            </div>
            <div className="mb-4">
                <FormInput
                    onChange={(e)=>handleChange(e)} 
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    isImportant
                />
            </div>
            {
                errorMsg && 
                <DangerAlert
                    message={errorMsg}
                    hideError={()=>seterrorMsg(null)}
                />
            }
            <div className="mt-5">
                <AuthButton onClick={()=>handleSubmit()} disabled={isLoading}>
                    {isLoading?'Authenticating...':'Sign In'}
                </AuthButton>
            </div>
            <div style={{fontFamily:'inter'}} className="mt-3 mb- text-sm text-center">
                <span className="text-gray-500">Don't have an account?  </span>
                <Link to="/register" style={{color:'#7F56D9', textDecoration:'none'}}>Sign Up</Link>
            </div>
        </AuthLayout>
     );
}
 
export default Login;