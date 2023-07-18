
import { HeadingText } from '../billingAddress/billing.style';
import { Box } from './account.style';

const AccountDetails = () => {
    return ( 
        <div className='py-14'>
            <HeadingText>Account Details</HeadingText>
            <div className="float-right cursor-pointer" style={{marginTop:'-25px', color:'#0D57A6'}}>Edit</div>
            <div className="grid grid-cols-2 gap-x-2 sm:gap-x-5 gap-y-5 mt-10">
                <Box>
                    <div className="font-bold mb-3">Facility Name</div>
                    <div className='text-sm break-words'>Facility 1</div>
                </Box>
                <Box>
                    <div className="font-bold mb-3">Email</div>
                    <div className='text-sm break-words'>hamid@facilityemail.com</div>
                </Box>
                
                <Box>
                    <div className="font-bold mb-3">Billing Address</div>
                    <div className='text-sm break-words'>Facility1@maincompany.com</div>
                </Box>
                <Box>
                    <div className="font-bold mb-3">Phone</div>
                    <div className='text-sm break-words'>+234 816 3734 803</div>
                </Box>
            </div>
        </div>
     );
}
 
export default AccountDetails;