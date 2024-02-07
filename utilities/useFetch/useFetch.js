import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function useFetch(query = "") {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `http://localhost:3000/hotels?${query}`
        );
        console.log(data);
        setData(data);
      } catch (error) {
        setData([]);
        // console.log(error);
        toast.error(error?.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [query]);

  return { data, isLoading };
  // }

  // import axios from "axios";
  // import { useEffect, useState } from "react";
  // import { toast } from "react-hot-toast";

  // export default function useFetch(url, query = "") {
  //   const [data, setData] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);

  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         setIsLoading(true);
  //         const { data } = await axios.get(`${url}?${query}`);
  //         setData(data);
  //       } catch (err) {
  //         setData([]);
  //         toast.error(err?.message);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     }

  //     fetchData();
  //   }, [query, url]);

  //   return { isLoading, data };
}
