import AppHeader from '../../components/AppHeader/AppHeader'
import CustomButton from '../../components/CustomButton/CustomButton'
import Footer from '../../components/Footer/Footer'
import Testimonial from './Testimonial'
import Explore from './explore'
import { Banner, TopText, SubText, BodyText, About } from './home.style'
import OfferSection from './offer'

const Home = () => {
  return (
    <div className="overflow-x-hidden ">
      <Banner>
        <AppHeader />
        <div className="p-5 pt-28 md:w-3/6 flex m-auto flex-col ">
          <TopText>135,455 Comunity Members</TopText>

          <BodyText>
            We offer you swift and seamless <br /> VTU services.
          </BodyText>

          <SubText>
            Join any of our communities and connect with thousands of people who
            share the same interest as you,
          </SubText>

          <div className="m-auto mt-9">
            <CustomButton>Join us now</CustomButton>
          </div>
        </div>
      </Banner>

      <About>
        
        <div>
          {' '}
          <p className="text-[#5B89FF] text-sm font-normal mb-10  ">
            <span className=" mr-3">_______</span> Who we are
          </p>
          <p className="text-[#CFDDFF] mb-10 text-2xl md:text-3xl font-bold ">
            Swift Telecoms
          </p>
        </div>
        <div>
          <p className="text-[#D2D5DE]  text-xs md:text-base  font-normal leading-7 md:leading-8  text-justify">
            Swift Telecoms is a is a web platform where users can purchase
            Mobile Data Bundles, VTU Airtime, Pay Electricity Bills, TV
            Subscription. We have designed our website to accommodate user
            needs. Providing users of our platform the opportunity to save cost,
            make fast, secured, efficient and rewarding purchases and bill
            payments.
          </p>
        </div>
      </About>
      <Explore />
      <OfferSection />
      
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home
