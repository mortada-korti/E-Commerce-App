import React, { useState, useEffect } from "react";
import { makeRequest } from "./MakeRequest";

const UseFtech = (url, method, params) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res =
        method === "post"
          ? await makeRequest.post(url, params)
          : await makeRequest.get(url);
      setData(res.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [params, method, url]);

  return { data, loading, error };
};

export default UseFtech;
