import { BannerImg, FormArea } from './authlayout.style'
const AuthLayout = ({ children, title, subTitle }: any) => {
  return (
    <div className="md:flex min-h-screen ">
      <div className="pt-10 -mb-16 px-5 bg-[#1D1E26] md:hidden">
        <div className="text-white font-bold text-2xl  leading-12">{title}</div>
        <div className="text-sm mt-3 text-[#AEAEAE]">{subTitle}</div>
      </div>

      <div className="md:w-2/5 md:flex hidden bg-[#1F212D]  flex-col">
        <div className="mt-40 px-20">
          <div className="text-white font-bold text-4xl  leading-12">
            {title}
          </div>
          <div className="text-sm mt-3 text-[#AEAEAE]">{subTitle}</div>
        </div>
        <div className="flex flex-1 flex-col justify-end lg:pr-20 md:pr-14">
          <BannerImg className="" src="../../assets/bigAvatar.png" alt="" />
        </div>
      </div>
      <div className="md:w-3/5  min-h-screen  bg-[#1D1E26] py-7 px-5 ">
        <FormArea>{children}</FormArea>
      </div>
    </div>
  )
}

export default AuthLayout
