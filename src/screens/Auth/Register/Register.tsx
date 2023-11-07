import { Link } from 'react-router-dom'
import AuthLayout from '../../../layouts/authLayout'
import { Label, Input } from '../Login/login.style'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { UserRegister } from '../../../components/validate/validate'
function Register() {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: UserRegister(),

    onSubmit: (values) => {
      console.log(values)
      navigate('/verify')
    },
  })
  return (
    <AuthLayout
      title="Your community awaits"
      subTitle="Get started with a 3-Day free trial"
    >
      <p className="text-center text-[#D7634E] mb-12 font-bold text-2xl ">
        Get Started
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-5">
          <Label>Username</Label> <br />
          <Input
            type="text"
            placeholder="User1234"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username && (
            <p className={'text-sm text-red-500'}>{formik.errors.username}</p>
          )}
        </div>
        <div className="mb-5">
          <Label>Email</Label> <br />
          <Input
            type="email"
            placeholder="user@website.com"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <p className={'text-sm text-red-500'}>{formik.errors.email}</p>
          )}
        </div>
        <div className="mb-5">
          <Label>Phone</Label> <br />
          <Input
            type="number"
            placeholder="12345"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className={'text-sm text-red-500'}>{formik.errors.phone}</p>
          )}
        </div>
        <div className="mb-5">
          <Label>Password</Label> <br />
          <Input
            type="password"
            placeholder="********************"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <p className={'text-sm text-red-500'}>{formik.errors.password}</p>
          )}
        </div>
        <div className="mb-5">
          <Label>Confirm Password</Label> <br />
          <Input
            type="password"
            placeholder="********************"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className={'text-sm text-red-500'}>
              {formik.errors.confirmPassword}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="mt-4 w-full pl-3 py-2 md:py-4 rounded-md border-none m-auto text-[#FFF] text-sm font-semibold  bg-[#5B89FF] cursor-pointer   "
        >
          Log In
        </button>
      </form>

      <p className="text-[#AAABAF] text-sm font-semibold leading-10 text-center">
        Already have an account? <Link to="/login">Login</Link>{' '}
      </p>
    </AuthLayout>
  )
}

export default Register
