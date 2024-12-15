import { useLoaderData } from "react-router-dom"
import { NavLink } from "react-router-dom";



export default function MoveDeatils() {

    const Data = useLoaderData();
    console.log(Data);
    

  return (
    <div className="flex mt-12 max-w-7xl justify-center mb-16 mx-auto">
            <div className="w-1/2 flex justify-start items-center">
                <img src={Data.Poster} width={450} height={400} alt={Data.Title} />
            </div>

            <div className="flex flex-col w-1/2">
                <h1 className="text-7xl font-semibold text-indigo-800">{Data.Title}</h1>
                <h2 className="text-2xl tracking-widest ml-2">{Data.Released}</h2>

                <div>
                    <NavLink>Overview</NavLink>
                    <NavLink>Details</NavLink>
                </div>
            </div>
    </div>
  )
}
