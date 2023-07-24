import {
  AiOutlineCloudUpload,
  AiOutlineEdit,
  AiOutlineDelete,
} from 'react-icons/ai'
import { BiFolder } from 'react-icons/bi'

const Assets = () => {
  return (
    <div>
      <div className="flex mb-7">
        <div className="font-bold flex text-3xl">Assets</div>
        <div className="flex-1 flex justify-end">
          <button
            style={{ background: '#7F56D9' }}
            className="cursor-pointer text-white font-semibold flex items-center border-none py-2 px-5 rounded-md"
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

      <div>
        <table
          className="table-auto w-full border-collapse border border-slate-400"
          style={{ color: '#737373' }}
        >
          <thead
            style={{ borderBottom: '1px solid lightgray' }}
            className="font-semibold text-md"
          >
            <td className="py-4"> Name</td>
            <td>Owner</td>
            <td>Last Modified</td>
            <td>File Size</td>
            <td></td>
          </thead>

          <tbody className="">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12].map((item) => (
              <tr
                key={item}
                style={{ borderBottom: '1px solid #D0D5DD' }}
                className="font-medium text-sm"
              >
                <td className="py-4 flex align-center">
                  {' '}
                  <BiFolder size={23} color="#737373" className="mr-2" /> App
                  development
                </td>
                <td>
                  <img
                    className="h-7 mr-2  w-7 rounded-full object-cover"
                    style={{ border: '1px solid black' }}
                    src="../../../assets/man.jpg"
                    alt=""
                  />
                  Dev Mohalem
                </td>
                <td>8 may, 2023</td>
                <td>1.8mb</td>
                <td>
                  <AiOutlineEdit
                    color="#737373"
                    size={20}
                    className="mr-2 cursor-pointer"
                  />
                  <AiOutlineDelete
                    color="#737373"
                    size={20}
                    className=" cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Assets
