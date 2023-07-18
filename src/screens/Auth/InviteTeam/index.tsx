import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AiOutlinePlus } from 'react-icons/ai'
import AuthLayout from '../../../layouts/authLayout'
import {
  FormHeader,
  FormSubHeader,
  FormContainer,
  Button,
} from '../AccountType/accountType.style'
import StepIndicator from '../../../components/stepIndicator'
import FormInput from '../../../components/forms/input'

function InviteTeam() {
  const [noOfEntries, setNumberOfEntries] = useState(1)
  return (
    <AuthLayout>
      <div className="mb-14">
        <FormHeader>Invite Team</FormHeader>
        <FormSubHeader>Descriptive text about this section</FormSubHeader>
      </div>

      <FormContainer className="mt-14">
        {[...Array(noOfEntries)].map((_item, _i) => (
          <div key={uuidv4()} className="mb-5">
            <FormInput
              label="Email Address"
              placeholder="Enter an email address"
            />
          </div>
        ))}

        <button
          type="button"
          className="flex items-center cursor-pointer"
          onClick={() => setNumberOfEntries(noOfEntries + 1)}
        >
          <AiOutlinePlus color="goldenrod" size={23} />
          <span className="text-yellow-500 font-semibold ml-1">Add more</span>
        </button>

        <div className="mt-7">
          <Button>Continue</Button>
        </div>
        <div className="mt-5">
          <StepIndicator currentStep={5} />
        </div>
      </FormContainer>
    </AuthLayout>
  )
}

export default InviteTeam
