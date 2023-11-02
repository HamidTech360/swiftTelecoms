import { useState } from 'react'

interface IAccord {
  title?: string
  content?: string
  key?: number
}

function CustomAccordion({ title, content, key }: IAccord) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div>
      <div className="bg-[#23283a] mb-8   " key={key}>
        <div
          className="flex justify-between p-5 cursor-pointer  text-[#D7634E] font-semibold text-sm"
          style={{ borderBottom: '1px solid #4A4E5C' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>{title}</div>
          <div className="text-xl">{isOpen ? '-' : '+'}</div>
        </div>

        {isOpen && (
          <p className=" p-7 pt-0 lg:pl-5 lg:pr-32 pb-10 text-sm text-[#C2C2C2] font-normal leading-7">
            {content}
          </p>
        )}
      </div>
    </div>
  )
}

export default CustomAccordion
