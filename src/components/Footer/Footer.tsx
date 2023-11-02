import { Link } from 'react-router-dom'

function Footer() {
  const footerLink = [
    {
      name: 'Community Guidelines',
      link: '#',
    },
    {
      name: 'Privacy Policy',
      link: '#',
    },
    {
      name: 'Affiliate Program',
      link: '#',
    },
    {
      name: 'Contact us',
      link: '#',
    },
  ]
  return (
    <div className="bg-[#23283a] p-5 lg:py-10 lg:px-20 md:flex justify-between">
      <div className="hidden">
        <p className="text-[#B5C4EA]  text-xs font-medium">
          © Copyright The Next Stage Lab 2021
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {footerLink.map((item: any, i: number) => (
          <Link
            key={i}
            to={item.link}
            className="text-[#B5C4EA] text-sm font-medium leading-7 no-underline"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <p
          style={{ borderTop: '1px solid #4A4E5C' }}
          className="text-[#B5C4EA] text-center pt-5  text-xs font-medium"
        >
          © Copyright Swift Telecoms 2023
        </p>
      </div>
    </div>
  )
}

export default Footer
