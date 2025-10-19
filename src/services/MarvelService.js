import { useHttp } from "../hooks/http.hook";

const useMarvelService = ()=> {
    const {loading,request,error,clearError} = useHttp();

    const _apiBase = "https://marvel-server-zeta.vercel.app/"
    const _apiKey = "d4eecb0c66dedbfae4eab45d312fc1df"
    const _baseOffset = 0;

 
 
    const getAllCharacters = async(offset = _baseOffset) =>{
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&apikey=${_apiKey}`)
        return res.data.results.map(_transformCharacter);
    }
    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?apikey=${_apiKey}`)
       
        return _transformCharacter(res.data.results[0]);
    }

    const getAllComics = async(offset = 0)=>{
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&apikey=${_apiKey}`)
        return res.data.results.map(_transformComics);
    }
      const _transformCharacter = (char) => {
            const thumbnail = char.thumbnail ? char.thumbnail.path + '.' + char.thumbnail.extension : 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
            return {
                id: char.id,
                name: char.name,
                description: char.description || 'No description available',
                thumbnail: thumbnail,
                homepage: char.urls && char.urls[0] ? char.urls[0].url : '#',
                wiki: char.urls && char.urls[1] ? char.urls[1].url : '#',
                comics: char.comics ? char.comics.items : []   
            }
    }
    const _transformComics = (comics) =>{
        return{
            id: comics.id,
			title: comics.title,
			description: comics.description || "There is no description",
			pageCount: comics.pageCount
				? `${comics.pageCount} p.`
				: "No information about the number of pages",
			thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
			language: comics.textObjects[0]?.language || "en-us",
			// optional chaining operator
			price: comics.prices[0].price
				? `${comics.prices[0].price}$`
				: "not available",
        }
    }
    return {
		loading,
		error,
		clearError,
		getAllCharacters,
		getCharacter,
        // getComics
		 getAllComics,
		
	};
}

//d4eecb0c66dedbfae4eab45d312fc1df

export default useMarvelService;