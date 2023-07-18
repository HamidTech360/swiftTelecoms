import { useState } from 'react'
import { SideBar, MainContent, NavList } from './authlayout.style'
import { useNavigate } from 'react-router-dom'

const AuthLayout = ({ children }: any) => {
  const navigate = useNavigate()
  const [navOptions, _setNavOption] = useState([
    {
      title: 'Company Details',
      subTitle: "Enter compnay's name and details",
      checked: true,
      target: 'company-details',
    },
    {
      title: 'Address',
      subTitle: 'Provide Company’s address details',
      checked: false,
      target: 'address-details',
    },
    {
      title: 'Choose a Password',
      subTitle: 'Choose a strong password',
      checked: false,
      target: 'choose-password',
    },
    {
      title: 'Invite team mebers',
      subTitle: 'Invite team to join your space and manage orders',
      checked: false,
      target: 'invite-team',
    },
  ])
  return (
    <div className="flex h-screen ">
      <SideBar>
        <img src="../../assets/logolight.png" alt="" />
        <NavList>
          {navOptions.map((item, i) => (
            <div
              key={i}
              className="flex mb-10 cursor-pointer"
              onClick={() => navigate(`/${item.target}`)}
            >
              <div>
                {item.checked ? (
                  <img src="../../assets/coloredcheckmark.png" alt="" />
                ) : (
                  <img src="../../assets/lightcheckmark.png" alt="" />
                )}
              </div>
              <div className="text-white ml-2">
                <div className="font-semibold mb-1 text-lg">{item.title}</div>
                <div className="text-xs">{item.subTitle}</div>
              </div>
            </div>
          ))}
        </NavList>
      </SideBar>
      <MainContent>{children}</MainContent>
    </div>
  )
}

export default AuthLayout
