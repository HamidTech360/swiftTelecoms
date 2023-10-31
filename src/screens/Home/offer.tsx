import { Link } from 'react-router-dom'

interface ICardText {
  img: any
  title: string
  text: string
  link: string
}

function OfferSection() {
  const cardText: ICardText[] = [
    {
      img: '',
      title: 'Data Subscription',
      text: ` Ligula ullamcorper malesuada proin libero nunc consequat interdum, Ligula ullamcorper malesuada proin libero nunc consequat interdum`,
      link: `#`,
    },
    {
      img: '',
      title: 'Airtime TopUp',
      text: ` Ligula ullamcorper malesuada proin libero nunc consequat interdum, Ligula ullamcorper malesuada proin libero nunc consequat interdum`,
      link: `#`,
    },
    {
      img: '',
      title: 'Utility Payment',
      text: ` Ligula ullamcorper malesuada proin libero nunc consequat interdum, Ligula ullamcorper malesuada proin libero nunc consequat interdum`,
      link: `#`,
    },
    {
      img: '',
      title: 'VTU website design',
      text: ` Ligula ullamcorper malesuada proin libero nunc consequat interdum, Ligula ullamcorper malesuada proin libero nunc consequat interdum`,
      link: `#`,
    },
    {
      img: '',
      title: 'Bulk SMS',
      text: ` Ligula ullamcorper malesuada proin libero nunc consequat interdum, Ligula ullamcorper malesuada proin libero nunc consequat interdum`,
      link: `#`,
    },
    {
      img: '',
      title: 'Web development',
      text: ` Ligula ullamcorper malesuada proin libero nunc consequat interdum, Ligula ullamcorper malesuada proin libero nunc consequat interdum`,
      link: `#`,
    },
  ]
  return (
    <div className=" bg-[#23283a] min-h-[50vh] p-5 lg:py-10 lg:px-44">
      <p className="text-[#CFDDFF] text-center text-xl md:text-3xl font-bold leading-normal">
        Our Services
      </p>
      <div className='text-center text-[#ffffff70] text-xs leading-6 lg:text-sm lg:w-1/2 mx-auto mb-10'>
        We offer instant recharge of Airtime, Databundle, CableTV (DStv, GOtv & Startimes), Electricity Bill Payment.
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3  md:gap-5 ">
        {cardText.map((item: any, i: number) => (
          <div
            key={i}
            style={{border:'2px solid  rgba(44, 85, 189, 0.28)'}}
            className="border-2 border-soli  p-2 md:p-5 rounded-lg mb-6"
          >
            <div className="w-[50px] h-[50px] bg-[#3E4052] rounded-md"></div>
            <p className="text-[#FFF] text-sm font-semibold ">{item.title}</p>
            <p className="text-xs font-normal leading-8 text-[#ffffff70] mb-10">
              {item.text}{' '}
            </p>
            <Link
              to={item.link}
              className="text-[#D7634E] text-sm font-semibold no-underline "
            >
              Learn More{' '}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OfferSection
