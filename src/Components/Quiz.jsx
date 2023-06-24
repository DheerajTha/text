import React, { useState } from "react";
import "../App.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const Quiz = ({id, title,que1, ans1, ans2, ans3, ans4, answer}) => {

  return (
    <div>
      <div className="container  bg-body rounded mt-3">
        <div class="shadow">
          <div class="card-body">
            <nav class="navbar navbar-expand-lg navbar-light ">
              <div class="container-fluid">
                <a class="navbar-brand" href="#" dangerouslySetInnerHTML={{__html:title}}>
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <span
                        class="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Time's Up!
                        <button
                          className="btn button  rounded-circle  text-center"
                          style={{
                            width: "40px",
                            height: "40px",
                            border: "3px solid red",
                            marginTop: "10px",
                          }}
                        >
                          0
                        </button>
                      </span>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link active mt-3"
                        aria-current="page"
                        href="#"
                      >
                        <span className="fw-bold">1</span> of {""}
                        <span className="fw-bold">20</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link active mt-3"
                        aria-current="page"
                        href="#"
                      >
                        score : <span className="fw-bold">400</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <hr />
          <div className="card-body bg-light">
            <h4 className="text-center">
              {que1}
            </h4>
            <div className="row">

              <div className="col-12 d-flex justify-content-center">
                <button className="button py-2 mx-2 rounded">
                  {ans1}
                </button>
                <button className=" button py-2 mx-2 rounded">
                  {ans2}
                </button>
              </div>
              <div className="col-10  mt-3  d-flex justify-content-center">
                <button className="button py-2  mx-2 rounded">
                  {ans3}
                </button>
                <button className="button py-2  mx-2 rounded">
                  {ans4}
                </button>
              </div>
              <div className="col-12 mt-3  d-flex justify-content-center">
                <button
                  type="button"
                  class="button py-2 d-flex justify-content-center"
                >
                  Next <ArrowForwardIcon/>
                </button>
              </div>
            </div>
          </div>
          <hr />
          <p className="text-center pb-2">
            A hoard is a stored-up supply. A horde is a teeming unorganized
            group, which would make for a poor reward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
