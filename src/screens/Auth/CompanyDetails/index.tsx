import { useNavigate } from 'react-router-dom'
import AuthLayout from '../../../layouts/authLayout'
import {
  FormContainer,
  FormHeader,
  FormSubHeader,
  Button,
} from '../AccountType/accountType.style'
import StepIndicator from '../../../components/stepIndicator'
import FormInput from '../../../components/forms/input'

const CompanyDetails = () => {
  const navigate = useNavigate()
  return (
    <AuthLayout>
      <div className="mb-14">
        <FormHeader>Company Details</FormHeader>
        <FormSubHeader>Descriptive text about this section</FormSubHeader>
      </div>
      <FormContainer className="mt-14">
        <div className="mb-5">
          <FormInput label="First Name" placeholder="Enter First Name" />
        </div>

        <div className="mb-5">
          <FormInput label="Last Name" placeholder="Enter Last Name" />
        </div>

        <div className="mb-5">
          <FormInput
            label="Email"
            placeholder="Enter Company's official Email"
          />
        </div>

        <div className="mt-7">
          <Button onClick={() => navigate('/address-details')}>Continue</Button>
        </div>
        <div className="mt-5">
          <StepIndicator currentStep={2} />
        </div>
      </FormContainer>
    </AuthLayout>
  )
}

export default CompanyDetails
