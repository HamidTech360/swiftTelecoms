
import { FormArea } from "./authlayout.style"
const AuthLayout = ({children}:any) => {
 
 
  return (
    <div style={{backgroundColor:'#F2EEFB'}} className="sm:py-14 sm:h-screen">
        <FormArea>
            <div className="text-center mb-10">
              <img src="../../assets/logo.png" alt="" />
            </div>
            <div>
              {children}
            </div>
        </FormArea>
    </div>
  )
}

export default AuthLayout
