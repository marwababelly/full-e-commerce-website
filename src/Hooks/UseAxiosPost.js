import { useState } from "react";
import { privateAxios } from "./Axios";

const useAxiosPost = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const postData = async (postBody, addUrl = "") => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // الربط باستخدام Axios زي ما المشرف طلب
      const response = await privateAxios.post(url + addUrl, postBody);
      setData(response.data);
      setSuccess(true);
      return response;
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
      return err;
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    postData,
    success,
  };
};

export default useAxiosPost;