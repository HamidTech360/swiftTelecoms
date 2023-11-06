import AuthLayout from '../../../layouts/authLayout'
import { Input, Label } from './login.style'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { IUserLogin } from '../../../interfaces/form'
import { validateUserLogin } from '../../../components/validate/validate'

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },

    validationSchema: validateUserLogin(),
    onSubmit: (values: IUserLogin) => {
      console.log(values)
    },
  })
  return (
    <AuthLayout
      title="Welcome Back"
      subTitle="Let's pickup from where you left"
    >
      <div className="text-white">
        <p className="text-center text-[#D7634E] mb-12 font-bold text-2xl ">
          Log in
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
            <Label>Password</Label> <br />
            <Input
              type="password"
              placeholder="*******************"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p className={'text-sm text-red-500'}>{formik.errors.password}</p>
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
          Don’t have an account? <Link to="/register">Sign up</Link>{' '}
        </p>
      </div>
    </AuthLayout>
  )
}

export default Login
