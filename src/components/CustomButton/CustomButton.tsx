import React from 'react'

interface BtnProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'submit' | 'reset' | undefined
}

function CustomButton({ children, className, onClick, type }: BtnProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        className
          ? className
          : 'border-none font-Montserrat cursor-pointer text-[15px] bg-[#5B89FF] w-fit rounded-full text-[#FFF] font-semibold leading-normal px-4 py-3'
      }
    >
      {children}
    </button>
  )
}

export default CustomButton
