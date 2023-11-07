import { Link } from 'react-router-dom'
import { CardImage, CardText, CardTitle, SectionTitles , FeatureImg} from './home.style'

interface ICardText {
  img: string
  title: string
  text: string
  link: string
}

function Explore() {
  const cardText: ICardText[] = [
    {
      img: '',
      title: 'Forex Trading',
      text: `Ligula ullamcorper malesuada proin libero nunc consequat interdum,
            Ligula ullamcorper malesuada proin libero nunc consequat interdum`,
      link: '#',
    },
    {
      img: '',
      title: 'Forex Trading',
      text: `Ligula ullamcorper malesuada proin libero nunc consequat interdum,
            Ligula ullamcorper malesuada proin libero nunc consequat interdum`,
      link: '#',
    },
    {
      img: '',
      title: 'Forex Trading',
      text: `Ligula ullamcorper malesuada proin libero nunc consequat interdum,
            Ligula ullamcorper malesuada proin libero nunc consequat interdum`,
      link: '#',
    },
    {
      img: '',
      title: 'Forex Trading',
      text: `Ligula ullamcorper malesuada proin libero nunc consequat interdum,
            Ligula ullamcorper malesuada proin libero nunc consequat interdum`,
      link: '#',
    },
  ]
  return (
    <div className=" lg:grid grid-cols-2  md:py-28 py-20  bg-[#23283a]">
      {/* <SectionTitles>Explore Our Communities</SectionTitles>
      <div className=" md:grid grid-cols-2 gap-5 ">
        {cardText.map((item: any, i: number) => (
          <div
            key={i}
            style={{
              border: '2px solid rgba(44, 85, 189, 0.28)',
              background: 'rgba(36, 43, 64, 0.28)',
            }}
            className="p-7 md:py-5 md:pl-5 md:pr-16 mb-6 rounded-md "
          >
            <CardImage />
            <CardTitle>{item.title}</CardTitle>

            <CardText>{item.text}</CardText>

            <Link
              to="#"
              className="text-[#D7634E] text-sm font-semibold no-underline "
            >
              Learn More
            </Link>
          </div>
        ))}
      </div> */}

      <div className='text-white md:px-20 px-5 mb-14 md:md-0  flex items-center'>
         <div>
          <div className="font-bold text-3xl mb-7">Our Features</div>
          <div className="md:text-sm text-sm lg:leading-9 leading-8">
            Certain things are hard 😓 but making payments shouldn't be one of them 😋💗.
            swift telecoms helps you make payments for services you enjoy right from the comfort of your home or office. The experience of total convenience,fast service delivery and easy payment is just at your fingertips.
          </div>
         </div>
      </div>
      <div className='flex justify-center px-7'>
        <FeatureImg  src="../../assets/about.png" alt="" />
      </div>

    </div>
  )
}

export default Explore
