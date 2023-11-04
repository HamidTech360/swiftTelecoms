import { Link } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { useState } from 'react'

function AppHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const headerData = [
    {
      title: 'Home',
      link: '#',
    },
    {
      title: 'SignUp',
      link: '#',
    },
    {
      title: 'Login',
      link: '#',
    },
    {
      title: 'AboutUs ',
      link: '#',
    },
    {
      title: 'ContactUs',
      link: '#',
    },
  ]
  return (
    <div>
      <div className="md:py-7 py-5 px-5 lg:px-10 flex">
        <div className="text-white">Swift Telecoms logo</div>
        <div className="text-white hidden lg:flex   flex-1 justify-end items-center" >
          {headerData.map((item: any, i: number) => (
            <>
              <Link
                to={item.link}
                key={i}
                className=" no-underline text-sm font-medium cursor-pointer text-[#D2D5DE] mr-5"
              >
                {item.title}
              </Link>{' '}
            </>
          ))}
          <Link
            to="#"
            className=" no-underline text-sm rounded-full text-[#FFF] px-4 py-3 ml-3  bg-[#5B89FF] font-normal ]"
          >
            Get started
          </Link>
        </div>

        <div className=" md:hidden flex flex-1 justify-end ">
          <BiMenuAltRight
            onClick={() => {
              setIsOpen(!isOpen)
            }}
            size={45}
            color={'white'}
          />
        </div>
      </div>
      {isOpen && (
        <div className="  fixed mb-5  top-0 right-0 w-[50%] md:w-[30%] min-h-full p-5 pt-10 bg-[#23283a]">
          {headerData.map((item: any, i: any) => (
            <Link
              key={i}
              to={'#'}
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
