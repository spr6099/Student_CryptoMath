import React, { useContext, useEffect, useState } from "react";
import "./../../style/TeacherList.css";
import axios from "axios";
import { BaseUrl } from "../../constant";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
function StudentsList() {
  const { user } = useContext(AuthContext);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getAllStudents = async () => {
      if (!user || !user._id) return;
      try {
        const res = await axios.get(`${BaseUrl}/teacher/students/${user._id}`);
        setStudents(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllStudents();
  }, [user]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <main class="table" id="customers_table">
        <section class="table__header">
          <h1>Students</h1>
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
                <th> dob </th>
                <th> Status</th>
                <th> Fee balance</th>
              </tr>
            </thead>
            <tbody className="teachertbody">
              {students.map((items, index) => (
                <tr key={items._id}>
                  <td> {index + 1} </td>
                  <td>
                    <Link>
                      <img src={`${BaseUrl}/uploads/${items.profileimage}`} alt={items.name} />
                      {items.name}
                    </Link>
                  </td>
                  <td> {items.email} </td>
                  <td> {items.dob} </td>
                  <td>
                    <p
                      class={`status ${items.adminstatus === "approve"
                        ? "delivered"
                        : "cancelled"
                        }`}
                    >
                      {items.adminstatus}
                    </p>
                  </td>
                  <td>

                    <strong> $128.90 </strong>
                  </td>
                </tr>
              ))}
              {/* <tr>
                <td> 2 </td>
                <td>
                  <img src="images/Jeet Saru.png" alt="" /> Jeet Saru
                </td>
                <td> Kathmandu </td>
                <td> 27 Aug, 2023 </td>
                <td>
                  <p class="status cancelled">Cancelled</p>
                </td>
                <td>
                  
                  <strong>$5350.50</strong>
                </td>
              </tr> */}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default StudentsList;
