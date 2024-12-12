import React, { useEffect, useState } from "react";
import "./../../style/TeacherList.css";
import { BaseUrl } from "../../constant";
import axios from "axios";
function ParentsList() {
  const [parents, setParents] = useState([]);

  const getParents = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/admin/getallparents`);

      setParents(res.data.parents);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getParents();
  }, []);

  return (
    <div>
      <main class="table" id="customers_table">
        <section class="table__header">
          <h1>Parents</h1>
          <div class="input-group">
            <input type="search" placeholder="Search Data..." />
            <img src="images/search.png" alt="" />
          </div>
        </section>
        <section class="table__body">
          <table className="teacherTable">
            <thead className="teacherthead">
              <tr>
                <th> Id</th>
                <th> Name</th>
                <th> Email</th>
                <th> Joining Date</th>
                <th> Status</th>
                <th> Amount</th>
              </tr>
            </thead>
            <tbody className="teachertbody">
              {parents.map((items, index) => (
                <tr>
                  <td> {index + 1} </td>
                  <td>
                    {" "}
                    <img src="images/Zinzu Chan Lee.jpg" alt="" />
                    {items.name}{" "}
                  </td>
                  <td> {items.email} </td>
                  <td> {items.occupation} </td>
                  <td>
                    <p class="status delivered">Delivered</p>
                  </td>
                  <td>
                    {" "}
                    <strong> $128.90 </strong>
                  </td>
                </tr>
              ))}
              {/* <tr>
                <td> 2 </td>
                <td>
                  <img src="images/Jeet Saru.png" alt="" /> Jeet Saru{" "}
                </td>
                <td> Kathmandu </td>
                <td> 27 Aug, 2023 </td>
                <td>
                  <p class="status cancelled">Cancelled</p>
                </td>
                <td>
                  {" "}
                  <strong>$5350.50</strong>{" "}
                </td>
              </tr> */}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default ParentsList;
