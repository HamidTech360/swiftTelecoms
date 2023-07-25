import {useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../../components/forms/input";
import AuthLayout from "../../../layouts/authLayout";
import { AuthButton } from "../Login/login.style";
import axios from "axios";
import {apiUrl} from '../../../config/index.json'
import DangerAlert from "../../../components/alert/dangerAlert";
import SuccesAlert from "../../../components/alert/successAlert";


const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, seterrorMsg] = useState(null)
    const [isSuccess, setIsSuccess] = useState(false)
    const [formData, setFormData] = useState({
        username:'',
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
            const {data} = await axios.post(`${apiUrl}/signup`, formData)
            setIsSuccess(true)
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
            <div style={{fontFamily:'inter'}} className="font-bold text-3xl mb-10">Sign Up</div>
            <div className="mb-4">
                <FormInput 
                    label="User Name"
                    isImportant
                    name="username"
                    placeholder="Enter your name"
                    onChange={(e)=>handleChange(e)}
                />
            </div>
            <div className="mb-4">
                <FormInput 
                    label="Email"
                    name="email"
                    placeholder="Enter your email"
                    isImportant
                    onChange={(e)=>handleChange(e)}
                />
            </div>
            <div className="mb-4">
                <FormInput 
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    isImportant
                    onChange={(e)=>handleChange(e)}
                />
            </div>
            {errorMsg && 
                <DangerAlert 
                    message= {errorMsg}
                    hideError={()=>seterrorMsg(null)}
                />
            }

            {isSuccess && 
                <SuccesAlert />
            }
            <div className="mt-5">
                <AuthButton disabled={isLoading} onClick={()=>handleSubmit()} >
                    {isLoading?'Authenticating...':'Create Account'}
                </AuthButton>
            </div>
            <div style={{fontFamily:'inter'}} className="mt-3 mb- text-sm text-center">
                <span className="text-gray-500">Already have an account?  </span>
                <Link to="/" style={{color:'#7F56D9', textDecoration:'none'}}>Log In</Link>
            </div>
        </AuthLayout>
     );
}
 
export default SignUp;