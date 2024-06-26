import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchResponse<T>{

    count: number;
  results: T[];
}

export default function useData<T>(endpoint:string,requestConfig?:AxiosRequestConfig,deps?:any[]){


    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
   const [isLoading ,setloading] = useState(false)
    useEffect(() => {
       setloading(true)
      const contoller = new AbortController();
      apiClient
        .get<FetchResponse<T>>(endpoint, { signal: contoller.signal,...requestConfig })
        .then((res) => {
          setData(res.data.results);
          setloading(false)
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setloading(false)
        });
  
      return () => contoller.abort();
    }, deps ?[...deps]:[]);
  
    return {  data,error,isLoading};
}