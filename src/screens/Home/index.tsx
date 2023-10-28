import CustomButton from '../../components/CustomButton/CustomButton'
import { Banner, ParaOne, ParaThree, ParaTwo } from './home.style'

const Home = () => {
  return (
    <div>
      <Banner>
        <div className="p-10 md:w-3/6 flex m-auto flex-col md:pt-36">
          <ParaOne>135,455 Comunity Members</ParaOne>

          <ParaTwo>
            We connect you with a <br /> community of people like you.
          </ParaTwo>

          <ParaThree>
            Join any of our communities and connect with thousands of people who
            share the same interest as you,
          </ParaThree>

          <div className="m-auto mt-9">
            <CustomButton>Start your 3-Day free trial</CustomButton>
          </div>
        </div>
      </Banner>
    </div>
  )
}

export default Home
