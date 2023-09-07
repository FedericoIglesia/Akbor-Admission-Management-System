import React from "react";
import a from "./admission_form.module.css";
import Nav from "../nav/Nav";

function admission_form() {
  return (
    <>
      <Nav />
      <div className={a["form__container"]}>
        <h1 className={a["form__title"]}>
          Admissions at ASD: Empowering Tomorrow's Achievers Through Skill
          Development
        </h1>
        <div className={a["form__banner"]}>
          <h3 className={a["form__banner--title"]}>
            Explore Our Diverse Programs and Unlock Your Potential
          </h3>
          <p className={a["form__banner--text"]}>
            Discover the admission opportunities at Akbor Skills Development
            Limited, a renowned institution dedicated to empowering individuals
            through education and technology. Explore our wide range of diverse
            programs and embark on a journey to unlock your true potential and
            achieve success in your chosen field.
          </p>
        </div>
        <div className={a["form__entry"]}>
          <div className={a["form__entry--title"]}>
            <h2>Admission Form</h2>
          </div>
          <div className={a["form__entry--input--container"]}>
            <div className={a["form__entry--input--1st"]}>
              <div className={a["form__group"]}>
                <label htmlFor="serialNo">Serial no:</label>
                <input type="text" id="serialNo" />
              </div>
              <div className={a["form__group"]}>
                <label htmlFor="batchNo">
                  Batch no:<span>*</span>
                </label>
                <input type="text" id="batchNo" />
              </div>
              <div className={a["form__group"]}>
                <label htmlFor="firstName">
                  First Name:<span>*</span>
                </label>
                <input type="text" id="firstName" />
              </div>
              <div className={a["form__group"]}>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" />
              </div>
              <div className={a["form__group"]}>
                <label htmlFor="fatherName">
                  Father's Name:<span>*</span>
                </label>
                <input type="text" id="fatherName" />
              </div>
              <div className={a["form__group"]}>
                <label htmlFor="motherName">
                  Mother's Name:<span>*</span>
                </label>
                <input type="text" id="motherName" />
              </div>
            </div>
            <div className={a["form__entry--input--2nd"]}>
              <div className={a["form__group"]}>
                <div>
                  <label htmlFor="batchNo">
                    Present Address:<span>*</span>
                  </label>
                </div>
                <input type="text" id="batchNo" placeholder="Address Line 1" />
              </div>
            </div>
            <div className={a["form__entry--input--3rd"]}>
              <div>
                <input type="text" placeholder="City" />
              </div>
              <div>
                <input type="text" placeholder="State / Province / Region" />
              </div>
            </div>
            <div className={a["form__entry--input--4th"]}>
              <div>
                <label htmlFor="dateBirth">
                  Date of Birth <span>*</span>
                </label>
                <div>
                  <input type="text" placeholder="DD" />
                  <input type="text" placeholder="MM" />
                  <input type="text" placeholder="YYYY" />
                </div>
              </div>
              <div>
                <label htmlFor="contactNo">
                  Contact No <span>*</span>
                </label>
                <input type="text" placeholder="+91" />
              </div>
              <div>
                <label htmlFor="bloodGruop">
                  Blood Group <span>*</span>
                </label>
                <input type="text" placeholder="A+" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default admission_form;
