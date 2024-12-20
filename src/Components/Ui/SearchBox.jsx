import { FiSearch } from "react-icons/fi";
import { useState } from "react";

export default function SearchBox({ onSearch }) {

const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event) => {
      const value = event.target.value;
      setSearchTerm(value);
      onSearch(value);
    }




  return (
    <div className="flex justify-center border rounded-xl hover:border-indigo-700 border-gray-600 w-48 items-center mr-72" >
        <input type="text" placeholder="Search Here"
        value={searchTerm}
        onChange={handleInputChange}
         className="w-36 py-2 px-3 outline-none" /> 

        <FiSearch className=" hover:text-indigo-700 hover:font-bold py-2 text-4xl cursor-pointer"/></div>
  )
};
