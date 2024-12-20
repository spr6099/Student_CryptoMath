import React, { useContext } from "react";
import Scoretable from "../../components/ScoreTable";
import Chart from "../../components/Chart";
import { AuthContext } from "../../context/AuthContext";

function MarkList() {
  const { user } = useContext(AuthContext);
  console.log(user?._id);

  return (
    <div className="row">
      <div className="col-6 "style={{ maxHeight: '400px', overflowY: 'auto' }} >
        <Scoretable id={user?._id} />
      </div>
      <div  className="col-6" >
        <Chart id={user?._id} />
      </div>
    </div>
  );
}

export default MarkList;
