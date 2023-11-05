import { Link } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { useState } from 'react'

function AppHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
    {
      title: 'Sign up',
      path: '#',
    },
    {
      title: 'Login',
      path: '/login',
    },
  ]
  return (
    <div>
      <div className="py-7 px-5 lg:px-28 flex justify-between">
        <div className="text-white">Swift Telecoms logo</div>
        <div className="text-white hidden lg:block mr-8 ">
          {headerData.map((item: any, i: number) => (
            <>
              <Link
                to={item.path}
                key={i}
                className=" no-underline text-lg font-normal mr-7 text-[#D2D5DE]"
              >
                {item.title}
              </Link>{' '}
            </>
          ))}
          <Link
            to="#"
            className="mr-8 no-underline text-sm rounded-full text-[#FFF] px-4 py-3  bg-[#5B89FF] font-normal ]"
          >
            Get started
          </Link>
        </div>

        <div className=" lg:hidden ">
          <BiMenuAltRight
            onClick={() => {
              setIsOpen(!isOpen)
            }}
            size={30}
            color={'white'}
          />
        </div>
      </div>
      {isOpen && (
        <div
          onClick={() => {
            setIsOpen(false)
          }}
          className="  fixed mb-5  top-0 right-0 w-[50%] md:w-[30%] min-h-full p-5 pt-10 bg-[#23283a]"
        >
          {headerData.map((item: any, i: any) => (
            <Link
              key={i}
              to={item.path}
              className="block  mb-5 no-underline text-sm text-[#D2D5DE] transition-opacity duration-500  "
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              {' '}
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default AppHeader
