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
      title: 'About us ',
      link: '#',
    },
    {
      title: 'Contact us',
      link: '#',
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
                to={item.link}
                key={i}
                className=" no-underline text-sm font-normal text-[#D2D5DE]"
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
          {!isOpen ? (
            <BiMenuAltRight
              onClick={() => {
                setIsOpen(!isOpen)
              }}
              size={30}
              color={'white'}
            />
          ) : (
            //   <BiMenuAltRight onClick={()=>{setIsOpen(!isOpen)}} size={30} color={'white'} />
            <p
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              X
            </p>
          )}
        </div>
      </div>
      {isOpen && (
        <div className=" text-center fixed mb-4 top-16  p-2   w-[100%] transition ease-out duration-1000 transform">
          {headerData.map((item: any, i: any) => (
            <Link
              key={i}
              to={'#'}
              className="block  mb-5 no-underline text-sm text-[#D2D5DE] transition-opacity duration-500  "
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
