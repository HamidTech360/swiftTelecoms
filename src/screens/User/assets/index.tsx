import {
  AiOutlineCloudUpload,
  AiOutlineMenuFold,
  AiOutlineDelete,
} from 'react-icons/ai'
import { useState } from 'react'
import Modal from '../../../components/modal'
import { ModalContent } from '../tasks/tasks.style'
import {AiOutlineClose} from 'react-icons/ai'
import { AuthButton } from '../../Auth/Login/login.style'
import { useOutletContext } from 'react-router-dom'
import {GoImage} from 'react-icons/go'
import {BiPhotoAlbum} from 'react-icons/bi'
import { BiFolder } from 'react-icons/bi'


const Assets = () => {
  
  
  const username = localStorage.getItem('username')
  //@ts-ignore
  const {currentWorkspace, handleAssetUpload, isWorkspaceAvailable, handleDeleteAsset} = useOutletContext()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [previewSource, setPreviewSource] = useState(null)
  const [toggle, setToggle] = useState(0)
  const [fileInfo, setFileInfo] = useState(null)
  let date = new Date().toUTCString().slice(5, 16);

  const handleImgSelection = (e:any)=>{
    e.preventDefault()
    let reader = new FileReader()
    let file = e.target.files[0]
    reader.onloadend= ()=>{
      //@ts-ignore
      setPreviewSource(reader?.result)
      setFileInfo({
        //@ts-ignore
        fileName:file.name,
        size:file.size,
        dateUploaded:date,
        source:reader?.result
      })      
    }
    reader.readAsDataURL(file)
  }

  const handleUpload = ()=>{
    handleAssetUpload(fileInfo)
    setIsModalOpen(false)
    alert('New asset succesfully uploaded')
    setPreviewSource(null)
  }

  const formatFileSize = (size:number)=>{
    return `${Math.round(size/1024)} kb`
  }

   const trimAssetTitle = (string:string)=>{
    let nameArr = string.split('.')
    let trimedName = nameArr[0].slice(0,8)
    if(trimedName.length == nameArr[0].length){
      return string
    }else{
      return `${trimedName}... .${nameArr[1]}`
    }
  }
  
  
  
  return (
    <div>
      <div className="flex mb-7">
        <div className="font-bold flex text-3xl">Assets</div>
        <div className="flex-1 flex justify-end">

          <div className="flex px-7 justify-center items-center  w-10 h-10 mr-3 rounded" style={{background:'whitesmoke'}}>
              <div onClick={()=>setToggle(0)} style={{background:toggle==0?'#693aeb':'', color:toggle==0?'white':''}} className='mr-3 py-1 px-3 rounded cursor-pointer'> 
                <AiOutlineMenuFold size={18} /> 
              </div>
              <div onClick={()=>setToggle(1)}  style={{background:toggle==1?'#693aeb':'', color:toggle==1?'white':''}} className='py-1 px-3 rounded cursor-pointer'> 
                <BiPhotoAlbum size={18} /> 
              </div>
          </div>

          <button
            style={{ background: '#9981da' }}
            className="cursor-pointer text-white font-semibold flex items-center border-none py-2 px-5 rounded-md"
            onClick={
              isWorkspaceAvailable?
              ()=>setIsModalOpen(true):
              ()=>alert('No Workspace selected. Please crrate or select a workspace to proceed')}
          >
            <AiOutlineCloudUpload size={23} className="mr-1" />
            Upload Assets
          </button>
          <img
            className="h-10 ml-5 w-10 rounded-full object-cover"
            style={{ border: '1px solid black' }}
            src="../../../assets/man.jpg"
            alt=""
          />
        </div>
      </div>

      
      
      {toggle===0 && 
      <div>
        <table
          className="table-auto w-full border-collapse border border-slate-400"
          style={{ color: '#737373' }}
        >
          <thead
            style={{ borderBottom: '1px solid lightgray' }}
            className="font-semibold text-md"
          >
           <tr>
              <td className="py-4"> Name</td>
              <td>Owner</td>
              <td>Last Modified</td>
              <td>File Size</td>
              <td></td>
           </tr>
          </thead>

          <tbody className="">
            {currentWorkspace?.assets?.map((item:any, i:any) => (
              <tr
                key={i}
                style={{ borderBottom: '1px solid #D0D5DD' }}
                className="font-medium text-sm"
              >
                <td className="py-4 flex align-center">
                  {' '}
                  <BiFolder size={23} color="#737373" className="mr-2" /> {trimAssetTitle(item.fileName)}
                </td>
                <td>
                  <img
                    className="h-7 mr-2  w-7 rounded-full object-cover"
                    style={{ border: '1px solid black' }}
                    src="../../../assets/man.jpg"
                    alt=""
                  />
                  {username}
                </td>
                <td>{item.dateUploaded}</td>
                <td>{formatFileSize(item.size)}</td>
                <td>
                 
                  <AiOutlineDelete
                    color="red"
                    size={20}
                    className=" cursor-pointer"
                    onClick={()=>handleDeleteAsset(i)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      }

          {(currentWorkspace?.assets?.length ===0  || !currentWorkspace) && 
            <div className='text-center h-full text-gray-300 font-semibold text-2xl mt-32'>No File in this workspace</div>
          } 

      {toggle===1 &&
      <div className='grid grid-cols-3 gap-x-5 gap-y-10'>
        {currentWorkspace?.assets?.map((item:any, i:any)=>
        <div key={i} className='rounded-lg px-3 flex flex-col py-4 h-56 ' style={{background:'#D9D9D9'}}>
          <div className="flex-1 " style={{ overflow:'hidden'}}>
            <img className='object-cover rounded-md h-full w-full'  src={item?.source} alt=""  />
          </div>
          <div className="flex mt-5">
            <BiPhotoAlbum size={20} /> 
            <div className="ml-2 font-medium text-sm">{trimAssetTitle(item.fileName)}</div>
            <div className="flex-1 flex justify-end">
            <AiOutlineDelete
              color="red"
              size={20}
              className=" cursor-pointer float-rigth"
              onClick={()=>handleDeleteAsset(i)}
            />
            </div>
          </div>
      </div>
        )}
    </div>
    }


          <Modal open={isModalOpen}>
            
                <ModalContent>
                  <AiOutlineClose 
                    size={23} 
                    className="float-right cursor-pointer" 
                    onClick={()=>setIsModalOpen(false)}
                  />
                  <div className="font-semibold text-2xl text-center mb-5">New Asset</div>
                 
                    <div 
                      className="h-48 w-56 mb-5 m-auto rounded-xl flex justify-center items-center" 
                      style={{background:'rgb(236, 236, 236)', border:'2px solid rgb(226, 226, 226)'}}
                    >
                        {previewSource &&
                        <img src={previewSource} alt="" className="h-full object-cover w-full" />
                        }
                        <GoImage color="lightgray" size={75} />
                    </div>
                    <div className="text-center mb-2">
                      <input onChange={(e)=>handleImgSelection(e)} type="file" name="" id="" />
                    </div>
                    <AuthButton
                      onClick={()=>handleUpload()}
                    >
                      Upload asset
                    </AuthButton>
                </ModalContent>
          </Modal>
    </div>
  )
}

export default Assets
