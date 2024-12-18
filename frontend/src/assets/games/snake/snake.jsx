import { Helmet } from "react-helmet";
import "./style.css";

function Snake() {
  return (
    <>
      <div className="wrapper">
        <div className="game-details">
          <span className="score">Score: 0</span>
          <span className="high-score">High Score: 0</span>
        </div>
        <div className="play-board"></div>
        <div className="controls">
          <i data-key="ArrowLeft" className="fa-solid fa-arrow-left-long"></i>
          <i data-key="ArrowUp" className="fa-solid fa-arrow-up-long"></i>
          <i data-key="ArrowRight" className="fa-solid fa-arrow-right-long"></i>
          <i data-key="ArrowDown" className="fa-solid fa-arrow-down-long"></i>
        </div>
      </div>
      <Helmet>
        <script
          src="/games/scripts/snake.js"
          defer
        ></script>
      </Helmet>
    </>
  );
}

export default Snake;
