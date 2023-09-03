import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export const deleteData = <T>(endpoint: string, onResponse?: (data: T, error) => void, requestConfig?: AxiosRequestConfig) => {
  const controller = new AbortController();

  apiClient
    .delete<T>(endpoint, {signal: controller.signal, ...requestConfig})
    .then((result) => {
      if (onResponse !== undefined)
        onResponse(result.data)
    })
    .catch((error) => {
      if(error instanceof CanceledError) return;
      return error.message
    });

    return () => controller.abort();
}

export const postData = <T>(endpoint: string, data?: any[], onResponse?: (data: T) => void, requestConfig?: AxiosRequestConfig) => {
  const controller = new AbortController();

  apiClient
    .post<T>(endpoint, data, {signal: controller.signal, ...requestConfig})
    .then((result) => {
      if (onResponse !== undefined)
        onResponse(result.data)
    })
    .catch((error) => {
      if(error instanceof CanceledError) return;
      return error.message
    });

    return () => controller.abort();
}

const useData = <T>(endpoint: string, deps?: any[], requestConfig?: AxiosRequestConfig) => {
    const [data, setData] = useState<T>();
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
  
      apiClient
        .get<T>(endpoint, {signal: controller.signal, ...requestConfig})
        .then((result) => {
          setData(result.data);          
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          if(error instanceof CanceledError) return;
          setError(error.message);
        });
  
        return () => controller.abort();
    }, deps ? [...deps] : []);
  
    return {data, setData, error, isLoading}
}

export default useData;