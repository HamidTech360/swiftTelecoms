import CustomButton from '../../components/CustomButton/CustomButton'
import { Banner, ParaOne } from './home.style'

const Home = () => {
  return (
    <div>
      <Banner>
        <div className="p-5 w-3/6 flex m-auto flex-col pt-36">
          <ParaOne>135,455 Comunity Members</ParaOne>

          <p className="text-[#CFDDFF] text-center font-bold text-4xl leading-normal mb-16 ">
            We connect you with a <br /> community of people like you.
          </p>

          <p className="text-[#7E8290] text-center w-6/6 text-lg m-auto leading-7 ">
            Join any of our communities and connect with thousands of people who
            share the same interest as you,
          </p>

          <div className="m-auto mt-9">
            <CustomButton>Start your 3-Day free trial</CustomButton>
          </div>
        </div>
      </Banner>
    </div>
  )
}

export default Home
