import { useNavigate } from 'react-router-dom'
import {
  FormContainer,
  Select,
  Button,
  FormHeader,
  FormSubHeader,
} from './accountType.style'
import StepIndicator from '../../../components/stepIndicator'

const AccountType = () => {
  const navigate = useNavigate()
  return (
    <div className="py-5 lg:px-5 px-3">
      <img src="../../../assets/logo.png" alt="" />
      <div className="flex flex-col  mt-32" style={{ border: '1px' }}>
        <FormHeader>Select Account Type</FormHeader>
        <FormSubHeader>Descriptive text about this section</FormSubHeader>
        <FormContainer className="mt-5">
          <div className="mb-3">
            <Select>
              <option>Independent contractor</option>
            </Select>
          </div>
          <div className="mb-3">
            <Select>
              <option>Company</option>
            </Select>
          </div>
          <div className="mt-7">
            <Button onClick={() => navigate('/company-details')}>
              Continue
            </Button>
          </div>

          <div className="mt-5">
            <StepIndicator />
          </div>
        </FormContainer>
      </div>
    </div>
  )
}

export default AccountType
