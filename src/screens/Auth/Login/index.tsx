import AuthLayout from '../../../layouts/authLayout'
import { Input, Label } from './login.style'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <AuthLayout
        title="Welcome Back"
        subTitle="Let's pickup from where you left"
      >
        <div className="text-white">
          <p className="text-center text-[#D7634E] mb-12 font-bold text-base ">
            Log in
          </p>
          <form action="">
            <div className="mb-5">
              <Label>Username</Label> <br />
              <Input type="text" placeholder="User1234" />
            </div>
            <div className="mb-5">
              <Label>Password</Label> <br />
              <Input type="password" />
            </div>

            <button className="mt-4 w-full pl-3 py-2 md:py-4 rounded-md border-none m-auto text-[#FFF] text-sm font-semibold  bg-[#5B89FF] cursor-pointer   ">
              Log In
            </button>
          </form>

          <p className="text-[#AAABAF] text-sm font-semibold leading-10 text-center">
            Don’t have an account? <Link to="#">Sign up</Link>{' '}
          </p>
        </div>
      </AuthLayout>
    </div>
  )
}

export default Login
