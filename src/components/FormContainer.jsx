import React from "react";
import Dropzone from "./Dropzone";

const FormContainer = () => {
  return (
    <div className="form-container">
      <div className="title">
        <h1>Tell us more about your business</h1>
        <p>
          Your info is like the Wi-Fi password—totally crucial for keeping
          things running, impressing the money folks, and making sure you get
          top-notch service without any buffering!
        </p>
      </div>
      <form action="">
        <div className="grid">
          <div className="input-group">
            <label htmlFor="legal_name">
              Legal Name <span>*</span>
            </label>
            <input
              type="text"
              id="legal_name"
              name="legal_name"
              placeholder="Legal Name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="buisness_as">
              Doing business as <span>*</span>
            </label>
            <input
              type="text"
              id="buisness_as"
              name="buisness_as"
              placeholder="Doing buisness as"
            />
          </div>
          <div className="input-group">
            <label htmlFor="company_regsitration_number">
              Company Registration Number <span>*</span>
            </label>
            <input
              type="number"
              id="company_regsitration_number"
              name="company_regsitration_number"
              placeholder="Company Registration Number"
            />
          </div>
          <div className="input-group">
            <label htmlFor="random_regsitration_number">
              Random Registration Number <span>*</span>
            </label>
            <input
              type="number"
              id="random_regsitration_number"
              name="random_regsitration_number"
              placeholder="Random Registration Number"
            />
          </div>
          <div className="input-group">
            <label htmlFor="website">
              Website URL <span>*</span>
            </label>
            <input
              type="text"
              id="website"
              name="website"
              placeholder="Website URL"
            />
          </div>
          <div className="input-group">
            <label htmlFor="industry">
              Industry Name <span>*</span>
            </label>
            <select name="industry" id="industry">
              <option selected disabled hidden>
                Industry Name
              </option>
              <option value="1">Industry 1</option>
              <option value="2">Industry 2</option>
              <option value="3">Industry 3</option>
              <option value="4">Industry 4</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="one_random_dropdown">
              One Random Dropdown <span>*</span>
            </label>
            <select name="one_random_dropdown" id="one_random_dropdown">
              <option selected disabled hidden>
                Options nai options
              </option>
              <option value="1">Option</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="which_would_you_like">
              Which dropdown would you like to select?
              <span>*</span>
            </label>
            <select name="which_would_you_like" id="which_would_you_like">
              <option selected disabled hidden>
                More Options
              </option>
              <option value="1">Option</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="random_count">
              Random count per month <span>*</span>
            </label>
            <input
              type="number"
              id="random_count"
              name="random_count"
              placeholder="Put the value get the answer"
            />
          </div>
          <div className="input-group">
            <label htmlFor="visits">
              Expected total visits in this page <span>*</span>
            </label>
            <input
              type="number"
              id="visits"
              name="visits"
              placeholder="In Number"
            />
          </div>
          <div className="input-group">
            <label htmlFor="purpose">
              Purpose of using fake form <span>*</span>
            </label>
            <textarea
              name="purpose"
              id="purpose"
              rows="5"
              placeholder="Purpose of using fake form"
            ></textarea>
          </div>
          <div className="input-group">
            <label htmlFor="description">
              Ek description toh banta hai * <span>*</span>
            </label>
            <textarea
              name="description"
              id="description"
              rows="5"
              placeholder="Product Description"
            ></textarea>
          </div>
          <div className="input-group">
            <label htmlFor="email">
              Contact Email <span>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Contact email"
            />
          </div>
        </div>
        <div className="input-group">
          <h1>
            Certification of Incorporation <span>*</span>
          </h1>
          <p>Upload the incorporation certifcate</p>
          <Dropzone />
        </div>
        <div className="input-group">
          <h1>
            Company Logo <span>*</span>
          </h1>
          <p>Upload the company logo</p>
          <Dropzone />
        </div>
        <div className="buttons">
          <button className="prev">Previous</button>
          <button className="next">Next</button>
        </div>
      </form>
    </div>
  );
};

export default FormContainer;
