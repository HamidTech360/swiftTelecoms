import Input from '../../../components/forms/input'
import { Button, HeadingText } from './billing.style';

const BillingAndShipping = () => {
    return ( 
        <div className="py-14">
            <HeadingText >Billing Address</HeadingText>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-x-6 gap-y-3 sm:gap-y-6">
                <div>
                    <Input
                        label='First Name'
                    />
                </div>
                <div>
                    <Input
                        label='Last Name'
                    />
                </div>
                <div>
                    <Input
                        label='Phone'
                        type="number"
                    />
                </div>
                <div>
                    <Input
                        label='Email'
                        type="email"
                    />
                </div>
            </div>

            <div className='mt-5'>
                <Input 
                    label="Company" 
                />
            </div>

            <div className='mt-5'>
                <Input 
                    label="Street Address" 
                />
            </div>

            <div className="grid grid-cols-2 mt-5 gap-x-6 gap-y-6">
                <div>
                    <Input 
                        label="Postalcode/Zip" 
                    />
                </div>

                <div>
                    <Input 
                        label="Town/City" 
                    />
                </div>
            </div>

            <div className="mt-3">
                <Button>Save</Button>
            </div>
        </div>
     );
}
 
export default BillingAndShipping;