import { Link } from 'react-router-dom'
import AuthLayout from '../../../layouts/authLayout'
import { useState } from 'react'

function Verify() {
  const [data, setData] = useState<any>('')
  const [error, setError] = useState('')

  const handleChange = (e: any) => {
    const input = e.target.value
    setData(input)

    if (!/^\d{4}$/.test(input)) {
      setError('Please enter a 4-digit code.')
    } else {
      setError('')
    }
  }
  const handleSubmit = () => {
    if (!error) {
      console.log(data)
    } else {
      console.log('there is an errr')
    }
  }
  return (
    <AuthLayout title="Almost Done!">
      <p className="text-[#D7634E] text-center text-2xl font-bold ">
        Verification
      </p>
      <div className="text-center text-base ">
        <p className="font-normal  text-[#AEAEAE]">
          Enter the 6-Digit code sent to your email{' '}
        </p>
        <p className="font-bold  text-[#D1D1D1] ">devtenotea@gmail.com</p>
      </div>

      <div className="mb-5 ">
        <input
          className="border-none outline-none w-full pl-3 py-3 md:py-4 text-[#FFF] placeholder-[#FFFFFF30] text-sm font-normal  rounded-lg p-0 bg-[#2B2D3D] text-center"
          type="text"
          placeholder="_   _   _   _"
          onChange={handleChange}
        />
        {error && <div className="text-[#FF0000] text-sm mt-3">{error}</div>}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 w-full pl-3 py-2 md:py-4 rounded-md border-none m-auto text-[#FFF] text-sm font-semibold  bg-[#5B89FF] cursor-pointer   "
      >
        Verify Code
      </button>

      <p className="text-[#AAABAF] text-sm font-semibold leading-10 text-center">
        Don’t get code? <Link to="#">Resend</Link>{' '}
      </p>
    </AuthLayout>
  )
}

export default Verify
