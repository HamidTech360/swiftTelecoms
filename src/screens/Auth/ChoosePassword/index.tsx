import { useNavigate } from 'react-router-dom'
import { AiOutlineCheck } from 'react-icons/ai'
import AuthLayout from '../../../layouts/authLayout'
import {
  FormHeader,
  FormContainer,
  Button,
} from '../AccountType/accountType.style'
import FormInput from '../../../components/forms/input'
import { SmallCircle } from './choosepassword.style'
import StepIndicator from '../../../components/stepIndicator'

const ChoosePassword = () => {
  const navigate = useNavigate()
  return (
    <AuthLayout>
      <div className="mb-14">
        <FormHeader>Choose Password</FormHeader>
        <div className="text-gray-500 font-medium mt-7 mb-5">
          <div className="md:flex justify-center text-sm">
            <div className="mr-7 mb-2 flex">
              <SmallCircle isVerified={true}>
                <AiOutlineCheck color={'#eff8ef'} size={10} />
              </SmallCircle>
              <span className="text-green-600">Must have one lower case</span>
            </div>
            <div className="flex mb-2">
              <SmallCircle>
                <AiOutlineCheck color={'grey'} size={10} />
              </SmallCircle>
              Must have one special character
            </div>
          </div>

          <div className="md:flex justify-center text-sm">
            <div className="mr-7 mb-2 xs:mb-2 flex">
              <SmallCircle>
                <AiOutlineCheck color={'grey'} size={10} />
              </SmallCircle>
              Must have at least 8 characters
            </div>
            <div className="flex mb-2 xs:mb-2">
              <SmallCircle>
                <AiOutlineCheck color={'grey'} size={10} />
              </SmallCircle>
              Must have one uppercase
            </div>
          </div>
        </div>

        <FormContainer className="mt-14">
          <div className="mb-5">
            <FormInput label="Password" placeholder="Enter Password" />
          </div>

          <div className="mb-5">
            <FormInput
              label="Comfirm Password"
              placeholder="EComfirm Password"
            />
          </div>
          <div className="mt-7">
            <Button onClick={() => navigate('/invite-team')}>Continue</Button>
          </div>
          <div className="mt-5">
            <StepIndicator currentStep={4} />
          </div>
        </FormContainer>
      </div>
    </AuthLayout>
  )
}

export default ChoosePassword
