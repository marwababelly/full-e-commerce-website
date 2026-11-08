/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { Axios } from "./Axios";

const useAxiosGet = (url, displayLoading = true) => {
  const fetchData = async () => {
    if (!url || url.length < 1) return null;
    
    // بنستخدم Axios العادي بدل privateAxios
    const response = await Axios.get(url);
    return response.data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchData", url],
    queryFn: fetchData,
    enabled: !!url,
    refetchOnWindowFocus: false,
  });

  // تعديل بسيط عشان يشتغل مع شكل البيانات اللي راجعة
  const isEmpty = !isLoading && !error && (!data || (Array.isArray(data) && data.length === 0));

  return { data, loading: isLoading, error, isEmpty };
};

export default useAxiosGet;