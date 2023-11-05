import AuthLayout from '../../../layouts/authLayout'
import { Input, Label } from './login.style'

const Login = () => {
  return (
    <AuthLayout
      title="Welcome Back"
      subTitle="Let's pickup from where you left"
    >
      <div className="text-white">
        <p className="text-center text-[#D7634E] mb-12 font-bold text-base ">
          Log in
        </p>
        <form action="">
          <div className="mb-6">
            <Label>Username</Label> <br />
            <Input type="text" />
          </div>
          <div className="mb-6">
            <Label>Password</Label> <br />
            <Input type="password" />
          </div>

          <button className="w-full pl-3 py-4 rounded-sm border-none m-auto text-[#FFF] text-sm font-semibold  bg-[#5B89FF] cursor-pointer   ">
            Log In
          </button>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login
