import { useParams } from "react-router-dom";

import { useContext, useEffect, useMemo } from "react";
import axios from "axios";
import { BaseUrl } from "../../../constant";
import { AuthContext } from "../../../context/AuthContext";

function Guess() {
  const { user } = useContext(AuthContext);

  const guessUrl = `/src/assets/games/numberGuessing/index.html`;
  // const searchParams = new URLSearchParams({ id }).toString();
  // const gameUrl1 = `${gameUrl}?${searchParams}`;

  const onMessage = useMemo(
    () => async (e) => {
      if (!e.data?.score || !user) return;
      let datas = {
        studentId: user?._id,
        score: e?.data.score,
        game: "guess",
      };
      console.log(datas);

      try {
        const res = await axios.post(`${BaseUrl}/student/score`, datas);
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
        src={guessUrl}
        style={{ height: "600px", width: "900px" }}
        className="ms-5 m-auto"
        title="guess Game"
      ></iframe>
    </>
  );
}

export default Guess;
