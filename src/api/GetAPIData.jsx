
const getMovieData = async () => {
   
  try {

   const request = await fetch("http://www.omdbapi.com/?s=Batman&apikey=360a1cce");
   const data = await request.json();

   return data;

  } catch (error) {
      console.error(error)
  }

 };
 
 export default getMovieData;
 