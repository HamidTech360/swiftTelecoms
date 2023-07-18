import { Outlet, useLocation, Link } from 'react-router-dom';
import {BiSearch, BiUserCircle, BiMenuAltRight} from 'react-icons/bi'
import {BsCart} from 'react-icons/bs'
import { Header, Divider,Badge, Select, NavBar, Circle, NavItem, SideGrid} from './adminlayout.style';


const AdminLayout = () => {
    const location = useLocation()
    const currentPath = location.pathname
    const navOptions = [
        {
            label:'Dashboard',
            paths:['/user/dashboard'],
            link:'/user/dashboard'
        },
        {
            label:'Order Management', 
            paths:['/user/order-management'],
            link:'/user/order-management'
        },
        {
            label:'Invoice History',
            paths:['/user/invoice-history'],
            link:'/user/invoice-history'
        },
        {
            label:'Service Tickets',
            paths:['/user/service-tickets'],
            link:'/user/service-tickets'
        },
        {
            label:'Billing and Shipping', 
            paths:['/user/billing'],
            link:'/user/billing'
        },
        {
            label:'Equipment History', 
            paths:['/user/equipment-history'],
            link:'/user/equipment-history'
        },
        {
            label:'Account Details', 
            paths:['/user/account-details'],
            link:'/user/account-details'
        },

    ]


    return ( 
        <div className='flex flex-col' style={{height:'100vh'}}>
            <Header>
                <div><img src="../../assets/logolight.png" alt="" /></div>
                <div className="hidden sm:flex flex-1 justify-end text-white items-center" >
                    <div className='text-gray-300 mr-5 '>Shop</div>
                    <div className='text-gray-300'>Our Story</div>
                    <Divider></Divider>
                    <BiSearch size={23} color="#EEF0F0"/>
                    <BsCart className="ml-2 mr-2" size={20} color="#EEF0F0"/>
                    <BiUserCircle size={24} color="#EEF0F0" />
                    <Select>
                        <option value="">change facility</option>
                    </Select>
                </div>
                <div className="sm:hidden flex flex-1 justify-end">
                    <BsCart className="ml-2 mr-2" size={24} color="#EEF0F0"/>
                    <Badge>1</Badge>
                    <BiMenuAltRight size={35} className="ml-3" color="#EEF0F0" />
                </div>
            </Header>

            

            <div className='flex' style={{ height:'90vh'}}>
                <SideGrid>
                    <div className='mt-7 mb-5 ml-10 font-medium text-xl'>
                        My Account
                    </div>
                    <NavBar>
                        <Circle/>
                        <div className='text-center'>
                            <div className="font-semibold mt-1">Facility 1</div>
                            <div className='text-xs mt-1'>person@baobabpartners.com</div>
                            <select className='outline-none border-none rounded py-2 px-3 text-xs font-bold' style={{background:'#B8E5EE', color:'#0D57A6'}}>
                                <option value="">Select diifferent facility</option>
                            </select>
                        </div>
                        <div className='px-5 mt-7'>
                            {navOptions.map((item, i)=>
                                <Link key={i} to={item.link} style={{textDecoration:'none', color:'initial'}}>
                                    <NavItem active={item.paths.includes(currentPath)}>{item.label}</NavItem>
                                </Link>
                            )}
                            <div className='font-medium mt-2'>Logout</div>
                        </div>
                    </NavBar>
                </SideGrid>
                
                <div className='flex-1 px-5 sm:px-10' style={{overflowY:'scroll', height:'90vh'}}>
                    <button style={{background:'#B8E5EE', fontFamily:'saliec'}} className="mb-14 cursor-pointer mt-3 font-semibold float-right rounded border-none px-3 py-3">
                        Create New Order
                    </button>
                    <div className='mt-14'>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AdminLayout;