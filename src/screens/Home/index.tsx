import CustomButton from '../../components/CustomButton/CustomButton'
import { Banner, TopText, SubText, BodyText, About } from './home.style'

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Banner>
        <div className="p-5 pt-28 md:w-3/6 flex m-auto flex-col ">
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
      <About>
        <div>
          {' '}
          <p className="text-[#5B89FF] text-sm font-normal  ">
            <span className=" mr-3">_______</span> Who we are
          </p>
          <p className="text-[#CFDDFF] text-2xl md:text-3xl font-bold mt-0">
            The Next Stage Lab
          </p>
        </div>
        <div>
          <p className="text-[#D2D5DE] md:text-lg text-base font-normal leading-loose text-justify">
            The Next Stage Lab is a paid online program and global community for
            learners(beginners, professionals and experts) and entrepreneurs who
            would like guidance and mentorship through the most difficult part
            of upgrading and increasing your income. The Next Stage Lab has
            created an opportunity for poeple to engage, learn, network and
            access exclusive contents.
          </p>
        </div>
      </About>
    </div>
  )
}

export default Home
