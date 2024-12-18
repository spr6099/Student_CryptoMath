import { useContext, useEffect, useMemo } from "react";
import axios from "axios";
import { BaseUrl } from "../../../constant";
import { AuthContext } from "../../../context/AuthContext";

function Typing() {
  const { user } = useContext(AuthContext);
  const typingUrl = `/src/assets/games/typing/index.html`;
  // const searchParams = new URLSearchParams({ id }).toString();
  // const typing = `${typingUrl}?${searchParams}`;

  const onMessage = useMemo(
    () => async (e) => {
      if (!e.data?.score || !user) return;
      let datas = {
        studentId: user?._id,
        score: e?.data.score,
        game: "typing",
      };

      try {
        // console.log(datas);

        const res = await axios.post(
          `${BaseUrl}/student/score`,
          // "http://localhost:4000/student/score",
          datas
          // { withCredentials: true }
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
        src={typingUrl}
        style={{ height: "500px", width: "900px" }}
        className=" m-auto"
        title="Typing Game"
      ></iframe>
    </>
  );
}

export default Typing;
