import { useLoaderData } from "react-router-dom";
import Card from "../Components/Ui/Card";
export default function Movie() {
  const MovieData = useLoaderData();
  console.log(MovieData.Search); 

 return(
    <>
    <ul className="grid grid-cols-4 mx-auto max-w-7xl py-10 mt-12">
    {MovieData.Search.map((movie, key)=>{
      return <Card key={key} data={movie}/>
    })}
    </ul>
    </>
 )
 
}
