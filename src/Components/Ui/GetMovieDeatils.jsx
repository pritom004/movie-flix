


export default async function getMovieDeatils({params}) {

    const ID = params.movieID;
 
    try {
        
        const request = await fetch(`http://www.omdbapi.com/?i=${ID}&apikey=360a1cce`);
        const data = request.json();

        return data;

    } catch (error) {
        console.error(error);
        
    }

}
