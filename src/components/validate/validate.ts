import * as Yup from 'yup'

export const validateUserLogin = () => {
  return Yup.object({
    username: Yup.string().required('Enter ur full name'),
    password: Yup.string().required('Enter ur password'),
  })
}

export const UserRegister = () => {
  return Yup.object({
    username: Yup.string().required('Enter ur username'),
    email: Yup.string().required('Enter ur email').email(),
    phone: Yup.string().required('Enter ur valid number'),
    password: Yup.string().required('Enter ur password'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Password must match')
      .nullable()
      .required(' comfirmpassword is required'),
  })
}
