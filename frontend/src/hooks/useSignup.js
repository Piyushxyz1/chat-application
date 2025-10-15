import { Error } from "mongoose";
import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {authUser,setAuthUser} = useAuthContext()

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {

        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender })

        if (!success) return

        setLoading(true)

        //sendind req to the backend here please pay attention to this code
        try {

            const res = await fetch('/api/auth/signup',
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
                });


            if(!res.ok){
            throw new Error(res.status)

            }

            const data =  await res.json();
        
          

             localStorage.setItem("auth-user",JSON.stringify(data))

             setAuthUser(data)

        } catch (error) {

            toast.error(error.message)

        } finally {

            setLoading(false)

        }


    }

    return { loading, signup }
}

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {

    if (!fullName || !username || !password || !confirmPassword || !gender) {

        toast.error('Please fill all the fields!');
        return false
    }

    if (password !== confirmPassword) {
        toast.error('Passwords do not match!');
        return false

    }

    if (password.length < 6) {
        toast.error('password must be alleast 7 letters');
        return false

    }
    return true

}