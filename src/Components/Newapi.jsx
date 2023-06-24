import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from "react";
import Quiz from './Quiz';

const Newapi = () => {

    const [mydata, setmydata] = useState([]);

    useEffect(() => {
        axios.get("http://167.114.114.249:8055/items/quiz").then((res) => {
          setmydata(res.data.data || []);
        });
      }, []);


  return (    
    <>
    {/* <h2>api data</h2> */}
      {mydata?.map((post) => {
        const { id, title, que1, ans1, ans2, ans3, ans4, answer } = post;
        return (
          <Quiz title={title} id={id} que1={que1} ans1={ans1} ans2={ans2} ans3={ans3} ans4={ans4} />
          
        );
      })}
    </>
  )
}

export default Newapi;