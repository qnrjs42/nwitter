import { dbService } from "fBase";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);

  const getNweets = async () => {
    const dbNweets = await dbService.collection("nweets").get();
    dbNweets.forEach(document => {
      const nweetObject = {
        ...document.data(),
        id: document.id,
      }
      // [document.data(), ...prev] | documenrt.data() 가장 최근 document
      // ...prev |  이전 document
      setNweets((prev) => [nweetObject, ...prev]);
    });
  }
  useEffect(() => {
    getNweets();
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.collection('nweets').add({
      nweet: nweet,
      createdAt: Date.now(),
    });
    setNweet('');
  }

  const onChange = (e) => {
    const { target: { value } } = e;
    setNweet(value); 
  }
  console.log(nweets);
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets.map((nweet) => (
          <div key={nweet.id}>
            <h4>{nweet.nweet}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
