import { Link } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'

function AppHeader() {
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

      <div className=" lg:hidden">
        <BiMenuAltRight size={30} color={'white'} />
      </div>
    </div>
  )
}

export default AppHeader
