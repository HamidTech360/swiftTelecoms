import { Link } from 'react-router-dom'
import { CardImage, CardText, CardTitle, SectionTitles } from './home.style'

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
    <div className="min-h-[50vh] p-5 lg:py-10 lg:px-44 bg-[#1D1E26]">
      <SectionTitles>Explore Our Communities</SectionTitles>
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
      </div>
    </div>
  )
}

export default Explore
