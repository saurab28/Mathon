import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useAuth = defineStore('auth',()=>{
    const userName = ref<string>('')
    const userPassword = ref<number>()
    const isAuth = ref<boolean>(false)
    const handleLogin  = (x : string,y : string) : boolean => {
        if (x==="Admin" && y==="1234"){
            isAuth.value = true ;
            return true ;
        }
        return false ;
    }

    return {userName,userPassword,isAuth,handleLogin}

})
