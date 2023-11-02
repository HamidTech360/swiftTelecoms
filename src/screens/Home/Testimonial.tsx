import { SectionTitles } from './home.style'
import userOne from '../../assets/user1.png'
import CustomAccordion from '../../components/CustomAccordion/CustomAccordion'
import CustomButton from '../../components/CustomButton/CustomButton'

interface ICardText {
  img: string
  text: string
}

function Testimonial() {
  const cardText: ICardText[] = [
    {
      img: userOne,
      text: `Ligula ullamcorper malesuada proin libero nunc consequat interdum, Ligula ullamcorper malesuada proin libero nunc consequat interdum, Ligula ullamcorper malesuada proin libero nunc consequat interdum, Ligula ullamcorper malesuada proin libero nunc consequat interdum`,
    },
    {
      img: userOne,
      text: `Ligula ullamcorper malesuada proin libero nunc consequat interdum, Ligula ullamcorper malesuada proin libero nunc consequat interdum, Ligula ullamcorper malesuada proin libero nunc consequat interdum, Ligula ullamcorper malesuada proin libero nunc consequat interdum`,
      //   link: '#',
    },
    {
      img: userOne,
      text: `Ligula ullamcorper malesuada proin libero nunc consequat interdum, Ligula ullamcorper malesuada proin libero nunc consequat interdum, Ligula ullamcorper malesuada proin libero nunc consequat interdum, Ligula ullamcorper malesuada proin libero nunc consequat interdum`,
    },
  ]

  const accordionData = [
    {
      title: 'What is The Next Stage Lab?',
      content: `  TNSL is the number one Multi community platform in the world,
      dedicated to helping entrepreneurs and solopreneurs learn, grow
      and thrive. Members can post questions that they have difficulty
      with and get answers from other experts, get updates and tips in
      each field. Everyone is welcome to join the community anywhere
      from all over the world.`,
    },
    {
      title: 'What is The Next Stage Lab?',
      content: `  TNSL is the number one Multi community platform in the world,
      dedicated to helping entrepreneurs and solopreneurs learn, grow
      and thrive. Members can post questions that they have difficulty
      with and get answers from other experts, get updates and tips in
      each field. Everyone is welcome to join the community anywhere
      from all over the world.`,
    },
    {
      title: 'What is The Next Stage Lab?',
      content: `  TNSL is the number one Multi community platform in the world,
      dedicated to helping entrepreneurs and solopreneurs learn, grow
      and thrive. Members can post questions that they have difficulty
      with and get answers from other experts, get updates and tips in
      each field. Everyone is welcome to join the community anywhere
      from all over the world.`,
    },
  ]

  return (
    <div>
      <div className="min-h-[50vh] p-5 lg:py-10 lg:px-20 bg-[#23283a]">
        <SectionTitles>Testimonials</SectionTitles>
        <div className=" md:grid grid-cols-3 lg:grid-cols-3  gap-5 ">
          {cardText.map((item: any, i: number) => (
            <div
              key={i}
              style={{
                border: '2px solid rgba(44, 85, 189, 0.28)',
                background: 'rgba(36, 43, 64, 0.28)',
              }}
              className="p-5 mb-5"
            >
              <p className="text-[#C4CADE] text-xs leading-8">{item.text}</p>

              <div className="flex justify-end">
                <img
                  src={item.img}
                  width={'20px'}
                  height={'20px'}
                  alt="imagr"
                  className="mr-3"
                />{' '}
                <p className="text-[#FFF] text-xs font-semibold mt-0">
                  Frank Major
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#1D1E26] min-h-[50vh] p-5 lg:py-10 lg:px-44 ">
        <SectionTitles> Frequently Asked Questions </SectionTitles>
        {accordionData.map((item: any, i: number) => (
          <CustomAccordion key={i} content={item.content} title={item.title} />
        ))}
      </div>

      <div
        className="md:grid grid-cols-3 p-5 lg:py-10 lg:px-44 bg-[#23283a] "
        style={{ borderBottom: '1px solid #4A4E5C' }}
      >
        <div className="col-span-2">
          <SectionTitles style={{ textAlign: 'left' }}>
            Are you ready to join Our Network
          </SectionTitles>
          <p className="text-[#9CA8C5] leading-7 text-sm font-medium md:w-[60%] ">
            Get Registered with The Next Stage Lab. You will be making one of
            the best decisions of your life, if you can join now.
          </p>
        </div>
        <div className="m-auto flex">
          <CustomButton>Start your 3-day Free trial</CustomButton>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
