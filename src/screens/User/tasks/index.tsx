import { useEffect, useState } from 'react'
import Modal from '../../../components/modal'
import { useOutletContext } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import {BiCommentEdit} from 'react-icons/bi'
import { LiaFileUploadSolid } from 'react-icons/lia'
import { TaskNav, ModalContent , TextArea} from './tasks.style'
import FormInput from '../../../components/forms/input'
import { AuthButton } from '../../Auth/Login/login.style'


const Tasks = () => {

  //@ts-ignore
  const {currentWorkspace, handleAddTask, handleUpdateTask, isWorkspaceAvailable} = useOutletContext()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [workspaceTasks, setworkspaceTasks] = useState([])
  const [isEditMode, setIsEditMode] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [navOptions, setNavOptions] = useState([
    { label: 'In Progress', active: true, tag:'inProgress' },
    { label: 'Review', tag:'review' },
    { label: 'Done', tag:'done' },
  ])

  // console.log(currentWorkspace);
  
  const [formData, setFormData] = useState({
    label:'',
    description:'',
    status:'inProgress'
  })

  useEffect(()=>{
    const currentTab = navOptions.find(item=>item.active)
    handleTabSwitch(currentTab?.tag)
  }, [currentWorkspace])

  useEffect(()=>{
    

    if(isEditMode && selectedItem){
      setFormData({
        //@ts-ignore
        label:selectedItem?.label,
        //@ts-ignore
        description:selectedItem?.description,
        //@ts-ignore
        status:selectedItem?.status || 'inProgress'
      })
    }else{
      setFormData({
        label:'',
        description:'',
        status:'inProgress'
      })
    }
  }, [isEditMode, selectedItem])

  const handleChange = (e:any)=>{
    const formData__c = {...formData}
    //@ts-ignore
    formData__c[e.currentTarget.name] = e.currentTarget.value
    setFormData(formData__c)
     console.log(formData);
    
  }

  const handleSubmit = ()=>{
    isEditMode?handleUpdateTask(formData, currentWorkspace?.tasks?.indexOf(selectedItem)):handleAddTask(formData)
    setIsModalOpen(false)

    const activeTab = navOptions.find(item=>item.active)
    handleTabSwitch(activeTab?.tag)
  }

  const handleTabSwitch = (tab:any)=>{
    const filteredTasks = currentWorkspace?.tasks.filter((item:any)=>item.status==tab)
    setworkspaceTasks(filteredTasks)
  }

  const handleFilter = (option: any) => { 
    const navOptions__c = [...navOptions]
    navOptions__c.forEach((item) => (item.active = false))
    const indexOfSelected = navOptions__c.indexOf(option)
    navOptions__c[indexOfSelected].active = true
    setNavOptions(navOptions__c)

    handleTabSwitch(navOptions__c[indexOfSelected].tag)
  }

  const trimString = (string:string)=>{
    return string.split(" ").slice(0, 12).join(" ")  
  }

  

  return (
    <div>
      <div className="flex mb-7">
        <div className="font-bold flex text-2xl">Workspace</div>
        <div className="flex-1 flex justify-end">
          <button
            onClick={isWorkspaceAvailable?
                ()=>{
                  setIsModalOpen(true)
                  setIsEditMode(false)
                }:
                ()=>alert('No Workspace selected. Please crrate or select a workspace')
            }
            style={{ background: '#7F56D9' }}
            className="cursor-pointer text-white flex items-center border-none py-2 px-5 rounded-md"
          >
            <LiaFileUploadSolid size={23} className="mr-2" />
            New Task
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
          {(workspaceTasks?.length ===0  || !currentWorkspace) && 
            <div className='text-center h-full text-gray-300 font-semibold text-2xl mt-32'>No Task in this workspace</div>
          } 
          <div className="grid mt-10 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-5 gap-y-5">
            
            {workspaceTasks?.map((item:any, i:any) => (
              <div
                key={i}
                className="rounded-lg flex flex-col h-44 px-3 py-4"
                style={{ border: '1px solid #D0D5DD', color: '#737373' }}
              >
                <div className="font-semibold mb-3">{item.label}</div>
                <div className="text-sm">
                 {trimString(item.description)}...
                </div>
                <div className="flex flex-1 items-end">
                  <div className="flex">
                    {[1, 2, 3].map((item) => (
                      <img
                        key={item}
                        className="h-8 mr-1 w-8 rounded-full object-cover"
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
                    <BiCommentEdit onClick={
                       ()=>{
                        setIsModalOpen(true)
                        setSelectedItem(item)
                        setIsEditMode(true)
                      }
                    } className="cursor-pointer" size={20} />
                    <span className="text-md ml-1">1</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Modal open={isModalOpen}>
            
                <ModalContent>
                  <AiOutlineClose 
                    size={23} 
                    className="float-right cursor-pointer" 
                    onClick={()=>setIsModalOpen(false)}
                  />
                  <div className="font-semibold text-2xl text-center mb-5">New Task</div>
                    <div className='mb-3'>
                      <FormInput
                          label='Task Tilte'
                          name='label'
                          onChange={(e)=>handleChange(e)}
                          value={formData.label}
                      />
                    </div>
                  <div className='mb-3'>
                      <div className="mb-1 font-medum">Task description</div>
                      <TextArea 
                        name='description' 
                        rows={7}
                        onChange={(e:any)=>handleChange(e)}
                        value={formData.description}
                      />
                    </div>

                    {isEditMode &&
                    <div className="mb-3">
                    <select 
                      className='border appearance-none  rounded-md  outline-none h-12 px-3 py-2 box-border w-full focus:outline-none' 
                      onChange={(e)=>handleChange(e)}
                      style={{
                        border: '1px solid #D0D5DD',
                        fontFamily:'inter'
                      }}
                      name='status'
                      value={formData.status}
                    >
                        <option value="inProgress">In Progress</option>
                        <option value="review">Review</option>
                        <option value="done">Done</option>
                    </select>
                  </div>
                  }
                    <AuthButton onClick={()=>handleSubmit()}>Save Task</AuthButton>
                </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Tasks
