import axios from "axios";
import { useEffect, useState } from "react";

export const useRemoteService = (initial: any) => {
  const [data, setData] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchBooks = async () => {
      setError(false);
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:8080/books");
        setData(res.data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);
  return { data, error, loading };
};
