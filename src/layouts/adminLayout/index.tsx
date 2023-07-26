import { Outlet, useLocation, Link, useNavigate } from 'react-router-dom'
import Modal from '../../components/modal'
import FormInput from '../../components/forms/input'
import { TextArea } from '../../screens/User/tasks/tasks.style'
import { AuthButton } from '../../screens/Auth/Login/login.style'
import { ModalContent } from '../../screens/User/tasks/tasks.style'
import { useEffect, useState } from 'react'
import { BiBarChartSquare } from 'react-icons/bi'
import { TbHexagon3D } from 'react-icons/tb'
import { AiOutlineFile, AiOutlineSetting,  AiOutlinePlusCircle, AiOutlineClose, AiOutlineLogout } from 'react-icons/ai'
import { GoTasklist } from 'react-icons/go'
import { PiFolderNotchMinusLight } from 'react-icons/pi'
import { NavItem, SideGrid } from './adminlayout.style'

const AdminLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const currentPath = location.pathname
  const navOptions = [
    {
      label: 'Overview',
      paths: ['/user/dashboard'],
      link: '/user/dashboard',
      icon: BiBarChartSquare,
    },
    {
      label: 'Work Space',
      paths: ['/user/workspace'],
      link: '/user/workspace',
      icon: TbHexagon3D,
    },
    {
      label: 'Assets',
      paths: ['/user/assets'],
      link: '/user/assets',
      icon: AiOutlineFile,
    },
    {
      label: 'My Tasks',
      paths: ['/user/tasks'],
      link: '/user/tasks',
      icon: GoTasklist,
    },
    {
      label: 'Documentation',
      paths: ['/user/documentation'],
      link: '/user/documentation',
      icon: PiFolderNotchMinusLight,
    },
    {
      label: 'Settings',
      paths: ['/user/settings'],
      link: '/user/settings',
      icon: AiOutlineSetting,
    },
  ]
  const [isModalOpen, setIsModalOpen] = useState(false)
  const token = localStorage.getItem('token')
   //@ts-ignore
   const savedWorkSPaces = JSON.parse(localStorage.getItem('workspaces'))
  const [currentWorkSpaceIndex, setCurrentWorkSpaceIndex] = useState(0)
  useEffect(()=>{
    if(!token){
      return navigate('/')
    }
  }, [])

 

  const [workSpaces, setWorkSpaces] =useState(savedWorkSPaces || []) 

  const handleAddTask = (task:any)=>{
    let item =  {
      ...task,
      status:'inProgress'
    }
    const workspaces_c = [...workSpaces]
    workspaces_c[currentWorkSpaceIndex].tasks = [...workspaces_c[currentWorkSpaceIndex].tasks, item]
    setWorkSpaces(workspaces_c)    
    localStorage.setItem('workspaces', JSON.stringify(workspaces_c))
  }

  const handleAssetUpload = (asset:any)=>{
    const workspaces_c = [...workSpaces]
    workspaces_c[currentWorkSpaceIndex].assets = [...workspaces_c[currentWorkSpaceIndex].assets, asset]
    setWorkSpaces(workspaces_c)    
    localStorage.setItem('workspaces', JSON.stringify(workspaces_c))
  }

  const handleDeleteAsset = (index:any)=>{
    const workspaces_c = [...workSpaces]
    //@ts-ignore
    let newAssets = workspaces_c[currentWorkSpaceIndex].assets?.filter((item:any, i:any)=>i!==index)
    workspaces_c[currentWorkSpaceIndex].assets= newAssets
    setWorkSpaces(workspaces_c)
    localStorage.setItem('workspaces', JSON.stringify(workspaces_c))
  }

  const [formData, setFormData] = useState({
    name:'',
    description:''
  })

  const handleChange = (e:any)=>{
    const formData__c = {...formData}
    //@ts-ignore
    formData__c[e.currentTarget.name] = e.currentTarget.value
    setFormData(formData__c)
  }

  const createNewWorkspace = ()=>{
    
    let newWorkSpace = {
      ...formData,
      members:[],
      assets:[],
      tasks:[]
    }
    setWorkSpaces([...workSpaces, newWorkSpace])
    localStorage.setItem('workspaces',JSON.stringify([...workSpaces, newWorkSpace]) )
    setIsModalOpen(false)
  }


  

  
  return (
    <div className="flex" style={{ height: '100vh' }}>
      <SideGrid>
        <div className="text-center">
          <img src="../../assets/logo.png" alt="" />
        </div>
        <div className="mt-10">
          {navOptions.map((item, i) => (
            <Link key={i} to={item.link} style={{ textDecoration: 'none' }}>
              <NavItem active={item.paths.includes(currentPath)}>
                <item.icon size={22} className="mr-3" />
                {item.label}
              </NavItem>
            </Link>
          ))}
           <NavItem onClick={()=>{
                localStorage.clear()
                navigate('/')
           }} >
              <AiOutlineLogout size={22} className="mr-3" />
              Logout
            </NavItem>
        </div>
      </SideGrid>

      <div
        className="flex-1 py-7 px-3 sm:px-10"
        style={{ overflowY: 'scroll', maxHeight: '100vh' }}
      >
        <Outlet 
          context={{
            currentWorkspace:workSpaces[currentWorkSpaceIndex] ,
            handleAddTask,
            handleAssetUpload,
            handleDeleteAsset,
            isWorkspaceAvailable: workSpaces.length > 0
          }}
         />
      </div>



      {/* This hadles The rightBar */}
      {(currentPath === '/user/workspace' || currentPath === '/user/assets') && (
        <div
          className="2xl:flex py-10 px-5 hidden w-72   flex-col"
          style={{ maxHeight: '100vh', overflow: 'hidden' }}
        >
          <div
            className="rounded px-3 h-20 flex items-center"
            style={{ border: '1px solid #D0D5DD', color: '#737373' }}
          >
            <div className="flex-1">
              <div className="font-bold text-2xl text-black">30</div>
              <div className="text-sm">In Progress</div>
            </div>

            <div className="flex-1">
              <div className="font-bold text-2xl text-black">30</div>
              <div className="text-sm">Review</div>
            </div>

            <div className="flex-1">
              <div className="font-bold text-2xl text-black">30</div>
              <div className="text-sm">Upcoming</div>
            </div>
          </div>

          <div
            className="flex-1 mt-7 rounded-lg py-7 px-3"
            style={{ border: '1px solid #D0D5DD', color: '#737373' }}
          >
            <div className="text-black ">
              <span className="font-semibold text-xl">Workspaces</span>
              <AiOutlinePlusCircle
                size={25}
                color="#1C1D21"
                className="float-right cursor-pointer"
                onClick={()=>setIsModalOpen(true)}
              />
            </div>

            <div className="mt-7">
              {workSpaces.length===0 && 
                <div className='text-gray-300 font-semibold text-lg text-center mt-28'>No Workspace yet</div>
              }
              {workSpaces.map((item:any, i:any) => (
                <div 
                  style={{background:currentWorkSpaceIndex===i?'#F2EEFB':''}} 
                  onClick={()=>setCurrentWorkSpaceIndex(i)} 
                  key={i} 
                  className="flex  py-5 rounded-md cursor-pointer"
                >
                  <div
                    style={{ background: '#F2EEFB', color: '#7F56D9' }}
                    className="h-10 font-semibold w-10 flex rounded-full justify-center items-center"
                  >
                    {item.name[0]}
                  </div>
                  <div className="ml-5 flex-1">
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm mt-1" style={{}}>
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>
      )}



        <Modal open={isModalOpen}>
            
            <ModalContent>
              <AiOutlineClose 
                size={23} 
                className="float-right cursor-pointer" 
                onClick={()=>setIsModalOpen(false)}
              />
              <div className="font-semibold text-2xl text-center mb-5">New Workspace</div>
                <div className='mb-3'>
                  <FormInput
                      label='Name'
                      name='name'
                      onChange={(e)=>handleChange(e)}
                  />
                </div>
              <div className='mb-3'>
                  <div className="mb-1 font-medum">Task description</div>
                  <TextArea 
                    name='description' 
                    rows={7}
                    onChange={(e:any)=>handleChange(e)}
                  />
                </div>
                <AuthButton onClick={()=>createNewWorkspace()}>Create Workspace</AuthButton>
            </ModalContent>
      </Modal>
    </div>
  )
}

export default AdminLayout
