import { SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '../../../layouts/authLayout'
import FormInput from '../../../components/forms/input'
import { v4 as uuidv4 } from 'uuid'
import {
  FormContainer,
  Button,
  Select,
  FormHeader,
  FormSubHeader,
} from '../AccountType/accountType.style'
import StepIndicator from '../../../components/stepIndicator'

import { countries } from '../../../utils/countries.json'

const AddressDetails = () => {
  const navigate = useNavigate()
  const [selectedCountry, setSelectedCountry] = useState('')

  const getStateOptions = () => {
    if (!selectedCountry) return []
    const country = countries.find((item) => item.country === selectedCountry)
    return country?.states
  }

  return (
    <AuthLayout>
      <div className="mb-14">
        <FormHeader>Address Details</FormHeader>
        <FormSubHeader>Descriptive text about this section</FormSubHeader>
      </div>

      <FormContainer className="mt-14">
        <div className="mb-5">
          <FormInput label="Address" placeholder="First Line" />
        </div>
        <div className="mb-5">
          <div className="mb-1 text-sm">Country</div>
          <Select
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setSelectedCountry(e.target.value)
            }
          >
            <option value="">select</option>
            {countries.map((item, _i) => (
              <option key={uuidv4()} value={item.country}>
                {item.country}
              </option>
            ))}
          </Select>
        </div>

        <div className="mb-5 flex">
          <div className="w-1/3 mr-5">
            <FormInput label="Postal Code" />
          </div>
          <div className="w-2/3">
            <div className="mb-2 text-sm">State</div>
            <Select>
              {selectedCountry &&
                getStateOptions()?.map((item, _i) => (
                  <option key={uuidv4()} value={item}>
                    {item}
                  </option>
                ))}
            </Select>
          </div>
        </div>

        <div className="mt-7">
          <Button onClick={() => navigate('/choose-password')}>Continue</Button>
        </div>
        <div className="mt-5">
          <StepIndicator currentStep={3} />
        </div>
      </FormContainer>
    </AuthLayout>
  )
}

export default AddressDetails
