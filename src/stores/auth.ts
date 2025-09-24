import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useAuth = defineStore('auth',()=>{

    const isAuth = ref<boolean>(false)
    const handleLogin  = (x : string,y : string) : void => {
        if (x==="Admin" && y==="1234"){
            isAuth.value = true ;
        }
    }
    const handleLogout  = () : void => {
       isAuth.value = false ;

    }

    return {isAuth,handleLogin,handleLogout}

})
