import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useNavigation } from 'react-router-dom'
import Loader from '../Ui/Loading'

export default function AppLayout() {

  const Navigation = useNavigation()
  if(Navigation.state == "loading") return <Loader />
  
  return (
    <>
    <Header/>
    <Outlet />
    <Footer/>
    </>
  )
}
