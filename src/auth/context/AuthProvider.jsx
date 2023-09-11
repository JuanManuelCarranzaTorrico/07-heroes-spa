import { Children, useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"


export const AuthProvider = ({ children }) => {
// const initialState = {
//     logged: false
// }

const init = ()=>{
  const user = JSON.parse( localStorage.getItem('user'));

  return{
    logged : !!user,
    user: user
  }
}
    const [authState, dispatch ]=useReducer( authReducer, {}, init  )

    const login = (name = '')=>{
      const user = {
        id: 'ABC',
        name: name
      };
      const action={
        type: types.login,
        payload: user
      }
       localStorage.setItem('user', JSON.stringify( user ))

      dispatch(action)
    }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login: login
    }}>
        {children}
    </AuthContext.Provider>
  )
}
