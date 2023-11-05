import { Link } from 'react-router-dom'
import AuthLayout from '../../../layouts/authLayout'
import { Label, Input } from '../Login/login.style'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/verify')
  }
  return (
    <AuthLayout
      title="Your community awaits"
      subTitle="Get started with a 3-Day free trial"
    >
      <p className="text-center text-[#D7634E] mb-12 font-bold text-2xl ">
        Get Started
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <Label>Username</Label> <br />
          <Input type="text" placeholder="User1234" />
        </div>
        <div className="mb-5">
          <Label>Email</Label> <br />
          <Input type="email" placeholder="user@website.com" />
        </div>
        <div className="mb-5">
          <Label>Phone</Label> <br />
          <Input type="number" placeholder="12345" />
        </div>
        <div className="mb-5">
          <Label>Password</Label> <br />
          <Input type="password" placeholder="********************" />
        </div>
        <div className="mb-5">
          <Label>Confirm Password</Label> <br />
          <Input type="password" placeholder="********************" />
        </div>

        <button
          type="submit"
          className="mt-4 w-full pl-3 py-2 md:py-4 rounded-md border-none m-auto text-[#FFF] text-sm font-semibold  bg-[#5B89FF] cursor-pointer   "
        >
          Log In
        </button>
      </form>

      <p className="text-[#AAABAF] text-sm font-semibold leading-10 text-center">
        Already have an account? <Link to="#">Login</Link>{' '}
      </p>
    </AuthLayout>
  )
}

export default Register
