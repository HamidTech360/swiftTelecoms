import { createBrowserRouter } from 'react-router-dom'

import AccountType from '../screens/Auth/AccountType';
import CompanyDetails from '../screens/Auth/CompanyDetails';
import AddressDetails from '../screens/Auth/AddressDetails';
import ChoosePassword from '../screens/Auth/ChoosePassword';
import InviteTeam from '../screens/Auth/InviteTeam';
import AdminLayout from '../layouts/adminLayout';
import BillingAndShipping from '../screens/User/billingAddress';
import AccountDetails from '../screens/User/accountDetails';

const AllRoutes = createBrowserRouter([
    {
        path:'/',
        element: <AccountType/>
    },
    {
        path:'/company-details',
        element: <CompanyDetails/>
    },
    {
        path:'/address-details',
        element: <AddressDetails/>
    },
    {
        path:'/choose-password',
        element: <ChoosePassword/>
    },
    {
        path:'/invite-team',
        element: <InviteTeam/>
    },
    {
        path:'/user',
        element: <AdminLayout/>,
        children:[
            {
                path: "dashboard",
                element:<AccountDetails/>,
            },
            {
                path: "order-management",
                element: <h1>hello world</h1>,
            },
            {
                path: "invoice-history",
                element: <h1>hello world</h1>,
            },
            {
                path: "service-tickets",
                element: <h1>hello world</h1>,
            },
            {
                path: "billing",
                element: <BillingAndShipping/>,
            },
            {
                path: "equipment-history",
                element: <h1>hello world</h1>,
            },
            {
                path: "account-details",
                element: <h1>hello world</h1>,
            },
        ]
    }
])

export default AllRoutes
