import React, { useState ,useEffect} from "react";
import paginate from "./utils";
const url = "https://api.github.com/users/fabpot/followers?per_page=100";
const useFetch=(urlparams)=>{
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true)
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(paginate(data));
    setloading(false);
    console.log(data);
  };
  return {loading,data};
}

export default useFetch;
