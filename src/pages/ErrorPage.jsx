import { NavLink } from "react-router-dom"

export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
        <img src="../public/Error.png" alt="404 not found" width="800" height="300" /> 
          <NavLink to='/' className="bg-indigo-500 text-white py-2 px-5 rounded-sm">Back to Hompage</NavLink>     
    </div>
  )
}
