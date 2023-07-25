import { Header, Avatar } from './dashboard.style'
import { BiFilterAlt } from 'react-icons/bi'
import Card from '../../../components/card'
import CustomPieChart from '../../../components/charts/piechart'

const Dashboard = () => {
  return (
    <div className='pb-14'>
      <div className="flex">
        <Header>Overview</Header>
        <div className="flex-1 flex justify-end">
          <div
            className="sm:h-8 h-7 w-7 sm:w-10 cursor-pointer mr-3 rounded-md flex justify-center items-center text-white text-2xl"
            style={{ background: '#7F56D9' }}
          >
            +
          </div>
          <Avatar src="../../../assets/man.jpg" />
        </div>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 2xl:grid-cols-4 gap-x-2 sm:gap-x-5 gap-y-5">
          <Card label="Completed Tasks" taskCount={100} color="" />
          <Card label="Uncompleted Tasks" taskCount={100} color="" />
          <Card label="Overdue Tasks" taskCount={100} color="" />
          <Card label="Total Tasks" taskCount={100} color="" />
        </div>
      </div>

      <div className="grid 2xl:grid-cols-1 grid-cols-1 mt-10 gap-x-7 gap-y-5">
        {/* box1 */}
        {/* <div
          className="rounded-lg"
          style={{ border: '1px solid lightgray', minHeight: '250px' }}
        >
          <div className="text-lg flex font-semibold mb-3">
            All tasks by completion status
            <div className="flex-1 justify-end">
              <div
                className="float-right sm:px-2 px-1  py-1 flex items-center rounded-md mt-3  h-7"
                style={{ background: '#F2EEFB', color: '#7F56D9' }}
              >
                <BiFilterAlt size={20} className="sm:mr-2 mr-1" />
                <span className="text-xs">Filter</span>
              </div>
            </div>
          </div>
        </div> */}

        {/* box2*/}
        <div
          className="rounded-lg flex flex-col  px-5 py-3"
          style={{ border: '1px solid lightgray', minHeight: '250px' }}
        >
          <div className="text-lg flex font-semibold mb-3">
            All tasks by completion status
            <div className="flex-1 justify-end">
              <div
                className="float-right sm:px-2 px-1  py-1 flex items-center rounded-md mt-3  h-7"
                style={{ background: '#F2EEFB', color: '#7F56D9' }}
              >
                <BiFilterAlt size={20} className="sm:mr-2 mr-1" />
                <span className="text-xs">Filter</span>
              </div>
            </div>
          </div>

          <div className="flex flex-1">
            <div className="w-1/2 h-full sm:mr-none mr-3">
              <CustomPieChart values={[30, 10]} />
            </div>
            <div className="w-1/2 ">
              <div
                className="rounded mb-2 w-full lg:w-1/2 h-2/5"
                style={{ border: '1px solid #5D4F7A' }}
              >
                <div
                  className="h-2/3 flex justify-center items-center font-semibold"
                  style={{ color: '#5D4F7A' }}
                >
                  70%
                </div>
                <div
                  className="h-1/3 justify-center text-white text-sm flex items-center"
                  style={{ background: '#5D4F7A' }}
                >
                  Completed
                </div>
              </div>
              <div
                className="rounded xl:ml-28 w-full lg:w-1/2 h-2/5"
                style={{ border: '1px solid #C896EC' }}
              >
                <div
                  className="h-2/3 flex justify-center items-center font-bold"
                  style={{ color: '#C896EC' }}
                >
                  30%
                </div>
                <div
                  className="h-1/3 justify-center text-white text-sm flex items-center"
                  style={{ background: '#C896EC' }}
                >
                  Uncompleted
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="mt-10 rounded-lg"
        style={{ border: '1px solid lightgray', minHeight: '250px' }}
      ></div> */}
    </div>
  )
}

export default Dashboard
