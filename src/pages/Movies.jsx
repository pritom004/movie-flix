import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Card from "../Components/Ui/Card";
import SearchBox from "../Components/Ui/SearchBox";



export default function Movie() {
  const MovieData = useLoaderData();
  console.log(MovieData.Search); 
  
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value); // 
    console.log("Search value:", value);
  };

 return(
    <>
    <div className="w-full mt-6 flex justify-end">
    <SearchBox onSearch={handleSearch}/>
    </div>
    
    <ul className="grid grid-cols-4 mx-auto max-w-7xl py-10 mt-12">  
    {MovieData.Search.map((movie, key)=>{
      return <Card key={key} data={movie}/>
    })}
    </ul>
    </>
 )
 
}
