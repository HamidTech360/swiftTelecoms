import { Card as Cards } from '../../screens/User/dashboard/dashboard.style'
import { BiFilterAlt } from 'react-icons/bi'

const Card = ({ label, taskCount }: any) => {
  return (
    <Cards>
      <div className="sm:text-lg text-sm text-gray-500 font-medium">
        {label}
      </div>
      <div className="flex-1  flex items-end">
        <div className="flex flex-1">
          <div className="flex-1">
            <div className="sm:text-xl text-lg font-bold">{taskCount}</div>
            <div className="text-gray-400 text-xs">Tasks count</div>
          </div>
          <div
            className="float-right sm:px-2 px-1 sm:py-2 py-1 flex items-center rounded-md mt-3  h-7"
            style={{ background: '#F2EEFB', color: '#7F56D9' }}
          >
            <BiFilterAlt size={20} className="sm:mr-2 mr-1" />
            <span className="text-xs">Filter</span>
          </div>
        </div>
      </div>
    </Cards>
  )
}

export default Card
