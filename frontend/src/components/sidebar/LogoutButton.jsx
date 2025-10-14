
import {BiLogOut} from "react-icons/bi"
import useLogout from "../../hooks/useLogout"

const LogoutButton = () => {

  const { loading,logout} = useLogout()


  return (
    <div className='text-white mt-auto'>
        <BiLogOut className="h-5 w-5 cursor-pointer" onClick={logout}/>
    </div>
  )
}

export default LogoutButton