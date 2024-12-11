import React from "react";

function AddStudent() {

    
  return (
    <div className="p-4">
      {/* <h2 class="text-center text-info">Register</h2> */}

      <div class="container  bg-secondary">
        <form>
          <div class="row jumbotron box8 p-5 g-4">
            <div class="col-sm-12 mx-t3 mb-4 ">
              <h2 class="text-center text-dark">Register</h2>
            </div>
            <div class="col-sm-6 form-group ">
              <label className="text-dark" for="name-f">
                Full Name
              </label>
              <input
                type="text"
                class="form-control  border-2 border-secondary"
                name="fname"
                id="name-f"
                placeholder="Enter  name."
                required
              />
            </div>
            <div class="col-sm-6 form-group">
              <label className="text-dark" for="name-l">
                Image
              </label>
              <input
                type="file"
                class="form-control"
                name=""
                id="name-l"
                placeholder=""
                required
              />
            </div>
            <div class="col-sm-6 form-group">
              <label className="text-dark" for="email">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="Enter email."
                required
              />
            </div>
            <div class="col-sm-6 form-group">
              <label className="text-dark" for="address-1">
                Address Line
              </label>
              <textarea
                type="address"
                class="form-control"
                name="Locality"
                id="address-1"
                placeholder="Locality/House/Street no."
                required
              />
            </div>
            <div class="col-sm-4 form-group">
              <label className="text-dark" for="State">
                State
              </label>
              <input
                type="address"
                class="form-control"
                name="State"
                id="State"
                placeholder="Enter your state name."
                required
              />
            </div>

            <div class="col-sm-2 form-group">
              <label className="text-dark" for="zip">
                Postal-Code
              </label>
              <input
                type="zip"
                class="form-control"
                name="Zip"
                id="zip"
                placeholder="Postal-Code."
                required
              />
            </div>

            <div class="col-sm-3 form-group">
              <label className="text-dark" for="Date">
                Date Of Birth
              </label>
              <input
                type="Date"
                name="dob"
                class="form-control"
                id="Date"
                placeholder=""
                required
              />
            </div>
            <div class="col-sm-3 form-group">
              <label className="text-dark" for="sex">
                Gender
              </label>
              <select
                id="sex"
                class="form-control browser-default custom-select"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unspesified">Unspecified</option>
              </select>
            </div>

            <div class="col-sm-6 form-group">
              <label className="text-dark" for="tel">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                class="form-control"
                id="tel"
                placeholder="Enter Contact Number."
                required
              />
            </div>
            <div class="col-sm-6 form-group">
              <label className="text-dark" for="pass">
                Password
              </label>
              <input
                type="Password"
                name="password"
                class="form-control"
                id="pass"
                placeholder=" password."
                required
              />
            </div>

            <hr></hr>

            <div class="col-sm-6 form-group">
              <label className="text-dark" for="mc">
                Medical Certificate
              </label>
              <input
                type="file"
                class="form-control"
                name=""
                id="mc"
                placeholder=""
                required
              />
            </div>

            <div class="col-sm-6 form-group">
              <label className="text-dark" for="about">
                About student
              </label>
              <textarea
                type="address"
                class="form-control"
                name="Locality"
                id="about"
                placeholder="enter about your kid"
                required
              />
            </div>
            <div class="col-sm-6 form-group">
              <label className="text-dark" for="ec">
                Educational Certificates
              </label>
              <input
                type="file"
                class="form-control"
                name=""
                id="ec"
                placeholder=""
                required
              />
            </div>

            <div class="col-sm-6 form-group">
              <label className="text-dark" for="rel">
                Relation
              </label >
              <select class="form-control">
                <option value=" ">Relation to You</option>
                <option value="son">Son</option>
                <option value="daughter">daughter</option>
                {/* <option value="Guardian">Guardian</option> */}
                <option value="Other">Other</option>
              </select>
            </div>

            <div class="col-sm-12 form-group mb-0">
              <button class="btn btn-primary float-right">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
