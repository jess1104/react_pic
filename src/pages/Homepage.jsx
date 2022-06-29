import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import Picture from '../components/Picture';


const Homepage = () => {
  const[input, setInput] = useState("");
  let [data, setData] = useState(null);
  const authKey = '563492ad6f91700001000001bc5c0d405e064cf5a42a622ef43072ab';
  const initialURL = 'https://api.pexels.com/v1/curated?page=1&per_page=15';
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15`;
  const search = async(url) => {
    // 1.用.then方式
    // await fetch(initialURL, {
    //   method: "GET",
    //   headers : {
    //     Accept: "application/json",
    //     Authorization: authKey
    //   },
    // }).then((res)=>res.json()).then(data => {
    //   console.log(data);
    //   setData(data.photos);
    // });
    // 2.用await
    const dataFetch = await fetch(url,{
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: authKey
      },
    });
    const parseData = await dataFetch.json();
    setData(parseData.photos);
  };

  // 像 vue create hook
  useEffect(() => {
    search(initialURL);
  },[]);

  
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* <元件 前面為內部元件fn={後面為本身元件fn} /> */}
      <Search searchPic = {() => search(searchURL)} setInput = { setInput }></Search>
      <div className="pictures">
        {
          data && 
            data.map(d => <Picture data = { d }/>)
        }
      </div>
    </div>
  )
}

export default Homepage