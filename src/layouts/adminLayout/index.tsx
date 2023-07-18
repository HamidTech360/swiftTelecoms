import { Outlet, useLocation, Link } from 'react-router-dom'
import { BiBarChartSquare } from 'react-icons/bi'
import { TbHexagon3D } from 'react-icons/tb'
import { AiOutlineFile, AiOutlineSetting } from 'react-icons/ai'
import { GoTasklist } from 'react-icons/go'
import { PiFolderNotchMinusLight } from 'react-icons/pi'
import { NavItem, SideGrid } from './adminlayout.style'

const AdminLayout = () => {
  const location = useLocation()
  const currentPath = location.pathname
  const navOptions = [
    {
      label: 'Overview',
      paths: ['/user/dashboard'],
      link: '/user/dashboard',
      icon: BiBarChartSquare,
    },
    {
      label: 'Work Space',
      paths: ['/user/workspace'],
      link: '/user/workspace',
      icon: TbHexagon3D,
    },
    {
      label: 'Assets',
      paths: ['/user/assets'],
      link: '/user/assets',
      icon: AiOutlineFile,
    },
    {
      label: 'My Tasks',
      paths: ['/user/tasks'],
      link: '/user/tasks',
      icon: GoTasklist,
    },
    {
      label: 'Documentation',
      paths: ['/user/documentation'],
      link: '/user/documentation',
      icon: PiFolderNotchMinusLight,
    },
    {
      label: 'Settings',
      paths: ['/user/settings'],
      link: '/user/settings',
      icon: AiOutlineSetting,
    },
  ]

  return (
    <div className="flex" style={{ height: '100vh' }}>
      <SideGrid>
        <div className="text-center">
          <img src="../../assets/logo.png" alt="" />
        </div>
        <div className="mt-10">
          {navOptions.map((item) => (
            <Link key={i} to={item.link} style={{ textDecoration: 'none' }}>
              <NavItem active={item.paths.includes(currentPath)}>
                <item.icon size={22} className="mr-3" />
                {item.label}
              </NavItem>
            </Link>
          ))}
        </div>
      </SideGrid>

      <div
        className="flex-1 px-5 sm:px-10"
        style={{ overflowY: 'scroll', height: '100vh' }}
      >
        <div></div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
