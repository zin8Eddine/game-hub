import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchGenresResponse{

    count: number;
  results: Genre[];
}

interface Genre{

    id:number,
    name:string
}

const useGenre = ()=>{

    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
   const [isLoading ,setloading] = useState(false)
    useEffect(() => {
       setloading(true)
      const contoller = new AbortController();
      apiClient
        .get<FetchGenresResponse>("/genres", { signal: contoller.signal })
        .then((res) => {
          setGenres(res.data.results);
          setloading(false)
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setloading(false)
        });
  
      return () => contoller.abort();
    }, []);
  
    return { genres};


}

export default useGenre