import axios from "axios";
import { useEffect, useState } from "react";

//options: to cast to array or not
export const useAxios = () => {
  const [data, setData] = useState<[any]>();
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async () => {
    setLoading(true);
    try {
      const result = await axios.get("http://localhost:8000/api/Bookings/", {
        headers: { Accept: "application/json" },
      });

      setData(result.data);
      setError(null);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError("axios error message: " + error.message);
      } else {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const request = {
    name: "Banana",
    email: "Banana@deceuster.com",
    company: "Banana",
    date: "2022-06-24",
    players: 2,
    private: false,
    room: 1,
  };

  const postData = (body: any) => {
    try {
      axios
        .post("http://localhost:8000/api/Bookings", body, {
          headers: { "content-type": "application/json" },
        })
        .then((response) => {
          console.log(response.data);
          getData();
        });

      console.log("banana");
      setError(null);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError("axios error message: " + error.message);
      } else {
        setError(error);
      }
    }
  };

  const updateData = async (id: number, body: any) => {
    try {
      await axios
        .put("http://localhost:8000/api/Bookings/" + id, body, {
          headers: { "content-type": "application/json" },
        })
        .then((response) => {
          console.log(response.data);
        });
      setError(null);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError("axios error message: " + error.message);
      } else {
        setError(error);
      }
    } finally {
      getData();
    }
  };

  const deleteData = async (id: number) => {
    try {
      await axios
        .delete("http://localhost:8000/api/Bookings/" + id)
        .then((response) => {
          console.log(response.data);
        });
      setError(null);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError("axios error message: " + error.message);
      } else {
        setError(error);
      }
    } finally {
      getData();
    }
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  return [data, error, loading, getData, postData, deleteData, updateData] as const;
};
