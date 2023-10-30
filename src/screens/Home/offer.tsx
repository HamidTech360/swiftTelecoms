import React from 'react'
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
      title: 'Increase Income',
      text: ` Ligula ullamcorper malesuada proin libero nunc consequat interdum, Ligula ullamcorper malesuada proin libero nunc consequat interdum`,
      link: `#`,
    },
    {
      img: '',
      title: 'Increase Income',
      text: ` Ligula ullamcorper malesuada proin libero nunc consequat interdum, Ligula ullamcorper malesuada proin libero nunc consequat interdum`,
      link: `#`,
    },
    {
      img: '',
      title: 'Increase Income',
      text: ` Ligula ullamcorper malesuada proin libero nunc consequat interdum, Ligula ullamcorper malesuada proin libero nunc consequat interdum`,
      link: `#`,
    },
  ]
  return (
    <div className=" bg-[#23283a] min-h-[50vh] p-5 lg:py-10 lg:px-44">
      <p className="text-[#CFDDFF] text-center text-xl md:text-3xl font-bold leading-normal">
        What we Offer
      </p>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3  md:gap-5 ">
        {cardText.map((item: any, i: number) => (
          <div
            key={i}
            className="border-2 border-solid border-red-500 p-2 md:p-5 rounded-lg mb-6"
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
