import React, { useState, useEffect } from "react";
import { makeRequest } from "./MakeRequest";

const UseFtech = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await makeRequest.get(url);
      setData(res.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default UseFtech;
