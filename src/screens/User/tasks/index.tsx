import { useState } from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import { LiaFileUploadSolid } from 'react-icons/lia'
import { TaskNav } from './tasks.style'

const Tasks = () => {
  const [navOptions, setNavOptions] = useState([
    { label: 'In Progress', active: true },
    { label: 'Review' },
    { label: 'Finished' },
  ])

  const handleFilter = (option: any) => {
    // console.log(option)
    const navOptions__c = [...navOptions]
    navOptions__c.forEach((item) => (item.active = false))
    const indexOfSelected = navOptions__c.indexOf(option)
    navOptions__c[indexOfSelected].active = true
    setNavOptions(navOptions__c)
  }

  return (
    <div>
      <div className="flex mb-7">
        <div className="font-bold flex text-2xl">Workspace</div>
        <div className="flex-1 flex justify-end">
          <button
            style={{ background: '#7F56D9' }}
            className="cursor-pointer text-white flex items-center border-none py-2 px-5 rounded-md"
          >
            <LiaFileUploadSolid size={23} className="mr-2" />
            New Project
          </button>
        </div>
      </div>

      <div className="flex">
        <div className="flex-1">
          <div
            style={{ border: '1px solid #D0D5DD', background: 'whitesmoke' }}
            className="rounded-md h-14 py-0 px-3 sm:px-7 flex"
          >
            {navOptions.map((item, i) => (
              <TaskNav
                onClick={() => handleFilter(item)}
                active={item.active}
                key={i}
              >
                {item.label}
              </TaskNav>
            ))}
          </div>

          <div className="grid mt-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
              <div
                key={i}
                className="rounded-lg flex flex-col h-44 px-3 py-4"
                style={{ border: '1px solid #D0D5DD', color: '#737373' }}
              >
                <div className="font-semibold mb-3">Landing Page</div>
                <div className="text-md">
                  This project plans to project the agenda of a billion space of
                  stars...
                </div>
                <div className="flex flex-1 items-end">
                  <div className="flex">
                    {[1, 2, 3].map((item, i) => (
                      <img
                        key={i}
                        className="h-8 mr-2 w-8 rounded-full object-cover"
                        style={{ border: '1px solid grey' }}
                        src="../../../assets/man.jpg"
                        alt=""
                      />
                    ))}
                    <div
                      style={{ background: '#7F56D9' }}
                      className="flex text-white cursor-pointer h-8 w-8 rounded-full justify-center items-center text-lg font-semibold"
                    >
                      +
                    </div>
                  </div>
                  <div className="flex-1 items-center flex justify-end">
                    <AiOutlineLink size={20} />
                    <span className="text-md ml-1">2</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* This hadles The rightBar */}
        <div className="rightBar sm:block hidden">
          {/* Rightbar contens goes here */}
        </div>
      </div>
    </div>
  )
}

export default Tasks
