import { Outlet, useLocation, Link } from 'react-router-dom'
import { BiBarChartSquare } from 'react-icons/bi'
import { TbHexagon3D } from 'react-icons/tb'
import { AiOutlineFile, AiOutlineSetting, AiOutlineRight } from 'react-icons/ai'
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
          {navOptions.map((item, i) => (
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
        className="flex-1 py-7 px-3 sm:px-10"
        style={{ overflowY: 'scroll', maxHeight: '100vh' }}
      >
        <Outlet />
      </div>

      {/* This hadles The rightBar */}
      {currentPath === '/user/workspace' && (
        <div
          className="2xl:flex py-10 px-5 hidden w-72   flex-col"
          style={{ maxHeight: '100vh', overflow: 'hidden' }}
        >
          <div
            className="rounded px-3 h-20 flex items-center"
            style={{ border: '1px solid #D0D5DD', color: '#737373' }}
          >
            <div className="flex-1">
              <div className="font-bold text-2xl text-black">30</div>
              <div className="text-sm">In Progress</div>
            </div>

            <div className="flex-1">
              <div className="font-bold text-2xl text-black">30</div>
              <div className="text-sm">Review</div>
            </div>

            <div className="flex-1">
              <div className="font-bold text-2xl text-black">30</div>
              <div className="text-sm">Upcoming</div>
            </div>
          </div>

          <div
            className="flex-1 mt-7 rounded-lg py-7 px-3"
            style={{ border: '1px solid #D0D5DD', color: '#737373' }}
          >
            <div className="text-black ">
              <span className="font-semibold text-2xl">Folders</span>
              <AiOutlineRight
                size={25}
                color="#1C1D21"
                className="float-right"
              />
            </div>

            <div className="mt-7">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex mb-5">
                  <div
                    style={{ background: '#F2EEFB', color: '#7F56D9' }}
                    className="h-10 font-semibold w-10 flex rounded-full justify-center items-center"
                  >
                    I
                  </div>
                  <div className="ml-5 flex-1">
                    <div className="font-semibold">Illustration</div>
                    <div className="text-sm mt-1" style={{}}>
                      This folder contains illustrators used for the first
                      build.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminLayout
