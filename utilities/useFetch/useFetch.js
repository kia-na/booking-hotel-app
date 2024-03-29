import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function useFetch(
  url = "http://localhost:3000/hotels",
  query = ""
) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${url}?${query}`);
        setData(data);
      } catch (error) {
        setData([]);
        toast.error(error?.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [query]);

  return { data, isLoading };
}
