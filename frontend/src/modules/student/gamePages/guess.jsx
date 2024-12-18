import { useParams } from "react-router-dom";

import { useEffect, useMemo } from "react";
import axios from "axios";

function Guess() {
  const { id } = useParams();
  const gameUrl = `/src/assets/games/numberGuessing/index.html`;
  const searchParams = new URLSearchParams({ id }).toString();
  const gameUrl1 = `${gameUrl}?${searchParams}`;

  const onMessage = useMemo(
    () => async (e) => {
      if (!e.data?.score) return;
      let datas = {
        user: e?.data.user.id,
        score: e?.data.score,
        game: "guess",
      };
      console.log(datas);

      try {
        const res = await axios.post(
          // "http://localhost:4000/student/score",
          datas,
          { withCredentials: true }
        );
        console.log("data  from child==>", res.data);
      } catch (err) {
        console.log(err);
      }

      //   gameOver();
    },
    []
  );

  useEffect(() => {
    window.addEventListener("message", onMessage);

    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <>
      <iframe
        src={gameUrl1}
        style={{ height: "600px", width: "900px" }}
        className="ms-5 m-auto"
        title="guess Game"
      ></iframe>
    </>
  );
}

export default Guess;
