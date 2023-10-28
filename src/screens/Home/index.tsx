import CustomButton from '../../components/CustomButton/CustomButton'
import { Banner, TopText, SubText, BodyText } from './home.style'

const Home = () => {
  return (
    <div>
      <Banner>
        <div className="p-10 md:w-3/6 flex m-auto flex-col md:pt-36">
          <TopText>135,455 Comunity Members</TopText>

          <BodyText>
            We connect you with a <br /> community of people like you.
          </BodyText>

          <SubText>
            Join any of our communities and connect with thousands of people who
            share the same interest as you,
          </SubText>

          <div className="m-auto mt-9">
            <CustomButton>Start your 3-Day free trial</CustomButton>
          </div>
        </div>
      </Banner>
    </div>
  )
}

export default Home
