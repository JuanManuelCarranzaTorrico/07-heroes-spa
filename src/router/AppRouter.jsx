import { Routes, Route, Navigate } from "react-router-dom"
import {  HeroesRoutes  } from "../heroes"
import { LoginPage } from "../auth/pages/LoginPage"
import { PrivateRoute } from "../heroes/routes/PrivateRoute"



export const AppRouter = () => {
  return (
   <>

   <Routes>

    <Route path="login" element={<LoginPage />}/>
    <Route path="/*" element={
    <PrivateRoute>
      <HeroesRoutes/>
    </PrivateRoute>
    }/>
    {/* <Route path="/*" element={<HeroesRoutes/>}/> */}

   </Routes>
   </>
  )
}
