import { Link } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
function AuthHeader() {
  const [isOpen, setisOpen] = useState<boolean>(false)

  const toggleDrawer = () => {
    setisOpen(!isOpen)
    console.log('clicked')
  }

  const headerData = [
    {
      title: 'Home',
      path: '#',
    },

    {
      title: 'About us ',
      path: '#',
    },
    {
      title: 'Contact us',
      path: '#',
    },
  ]
  return (
    <div>
      <div className="md:py-7 py-5 px-5 lg:px-10 flex">
        <div className="text-white">Swift Telecoms logo</div>
        <div className="text-white hidden lg:flex   flex-1 justify-end items-center">
          {headerData.map((item: any, i: number) => (
            <>
              <Link
                to={item.path}
                key={i}
                className=" no-underline text-xs font-normal cursor-pointer text-[#D2D5DE] mr-8"
              >
                {item.title}
              </Link>{' '}
            </>
          ))}
        </div>

        <div className=" md:hidden flex flex-1 justify-end ">
          <BiMenuAltRight onClick={toggleDrawer} size={35} color={'white'} />
        </div>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="  py-10 px-7"
        style={{ backgroundColor: '#23283a' }}
        duration={700}
      >
        {headerData.map((item: any, i: any) => (
          <div key={i}>
            <Link
              className="block  mb-5 no-underline text-[15px] text-[#D2D5DE]   "
              to={item.path}
              onClick={() => setisOpen(!isOpen)}
            >
              {item.title}
            </Link>
          </div>
        ))}
      </Drawer>
    </div>
  )
}

export default AuthHeader
