import React, { useContext, useEffect, useState } from "react";
import "../../style/childrens.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { BaseUrl } from "../../constant";

function Childrens() {
  const [childrens, setchildrens] = useState([]);
  const { user } = useContext(AuthContext); // Ensure user is being set properly

  useEffect(() => {
    // Check if user is defined before calling GetChildrens
    if (user?._id) {
      GetChildrens(user._id);
    }
  }, [user]);

  const GetChildrens = async (userId) => {
    try {
      console.log("Fetching children for userId:", userId);

      const res = await axios.get(`${BaseUrl}/parent/getchildrens/${userId}`);
      setchildrens(res.data.data);
    } catch (error) {
      console.log("Error fetching children:", error);
    }
  };

  console.log("Children:", childrens);

  return (
    <>
      {childrens.map((items, index) => (
        <div className="p-3">
          <div class="card user-card-full">
            <div class="row m-l-0 m-r-0">
              <div class="col-sm-4 bg-c-lite-green user-profile">
                <div class="card-block text-center text-white">
                  <div class="m-b-25">
                    <img
                      src="https://img.icons8.com/bubbles/100/000000/user.png"
                      class="img-radius"
                      alt="User-Profile-Image"
                    />
                  </div>
                  <h6 class="f-w-600">Hembo Tingor</h6>
                  <p>Web Designer</p>
                  <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                </div>
              </div>
              <div class="col-sm-8 bg-secondary">
                <div class="card-block">
                  <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                  <div class="row">
                    <div class="col-sm-6">
                      <p class="m-b-10 f-w-600">Email</p>
                      <h6 class="text-muted f-w-400">rntng@gmail.com</h6>
                    </div>
                    <div class="col-sm-6">
                      <p class="m-b-10 f-w-600">Phone</p>
                      <h6 class="text-muted f-w-400">98979989898</h6>
                    </div>
                  </div>
                  <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                    Projects
                  </h6>
                  <div class="row">
                    <div class="col-sm-6">
                      <p class="m-b-10 f-w-600">Recent</p>
                      <h6 class="text-muted f-w-400">Sam Disuja</h6>
                    </div>
                    <div class="col-sm-6">
                      <p class="m-b-10 f-w-600">Most Viewed</p>
                      <h6 class="text-muted f-w-400">Dinoter husainm</h6>
                    </div>
                  </div>
                  <ul class="social-link list-unstyled m-t-40 m-b-10">
                    <li>
                      <a
                        href="#!"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="facebook"
                        data-abc="true"
                      >
                        <i
                          class="mdi mdi-facebook feather icon-facebook facebook"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#!"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="twitter"
                        data-abc="true"
                      >
                        <i
                          class="mdi mdi-twitter feather icon-twitter twitter"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#!"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="instagram"
                        data-abc="true"
                      >
                        <i
                          class="mdi mdi-instagram feather icon-instagram instagram"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Childrens;
