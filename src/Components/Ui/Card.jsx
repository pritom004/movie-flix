import "@fontsource/poppins";

export default function Card({data}) {

    const {Poster, Title, Year} = data;
  return (
    <div className="cursor-pointer rounded-md w-64 mb-28 text-center shadow-2xl relative border">
        
        <img src={Poster} alt={Title} className="w-4/5 mx-auto -translate-y-10 rounded shadow-xl"/>
        
        
        
        <button className="w-full bg-gray-900 text-white rounded-b-md py-1 absolute bottom-0 left-0">WATCH NOW</button>
    </div>
  )
}
