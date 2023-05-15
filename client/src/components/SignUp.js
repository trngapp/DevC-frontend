/* eslint-disable */
import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import './SignUp.css';
import Arrow from './Arrow.png';


const SignUp = () => {

  const [file, setFile] = useState("");

  const ImageThumb = ({ image }) => {
    return <img className="thumbnail-img" src={URL.createObjectURL(image)} alt={image.name} />;
  };

  function handleUpload(event) {
    setFile(event.target.files[0]);
  }

//<div class="col col-md-1">
//{/*<center><FormatListNumberedIcon /></center>*/}
//<Card/>

//</div>



  return (
      <div>
        <section className="signup">
              <form className="register-form" id ="register-form">

                <h2 className="signup-form-title">
                  Sign Up To Your Account
                </h2>

                <div className="form-group">
                  <input type="text" name="name" className="form-input" id="name" required="true"
                    placeholder="Name"
                  />
                </div>

                <div className="form-group">
                  <input type="email" name="email" className="form-input" id="email" required="true"
                    placeholder="Email"
                  />
                </div>

                <div className="form-group">
                  <input type="text" name="city" className="form-input" id="city" required="true"
                    placeholder="City"
                  />
                </div>

                <div className="form-group">
                  <input type="text" name="state" className="form-input" id="state" required="true"
                    placeholder="State"
                  />
                </div>

                <div className="form-group">
                  <input type="text" name="skill" className="form-input" id="skill" required="true"
                    placeholder="Skill"
                  />
                </div>
                 
                <div className="form-group">
                  <input type="text" name="about" className="form-input" id="github" required="true"
                    placeholder="GitHub"
                  />
                </div>

                <div className="form-group">
                  <input type="text" name="about" className="form-input" id="github" required="true"
                    placeholder="GitHub"
                  />
                </div>

                <div className="form-group">
                  <input type="text" name="twitter" className="form-input" id="twitter"
                    placeholder="Twitter"
                  />
                </div>
                <div className="form-group">
                  <input type="password" name="password" className="form-input" id="password" required="true"
                    placeholder="Your Password"
                  />
                </div>

                <div className="form-group">
                  <input type="password" name="cpassword" className="form-input" id="cpassword" required="true"
                    placeholder="Confirm Your Password"
                  />
                </div>


              <div className="signup-image">
                <div id="upload-box">
                  <div className="thumbnail">
                    {file && <ImageThumb image={file} />}
                  </div>
                  <input type="file" className="image-upload" onChange={handleUpload} name="Upload" required="true" />
                </div>

                <div className="form-button">
                  <input type="submit" name="signup" id="signup" className="form-submit" value="Sign Up To Your Account"/>
                  <img classname="sign-up-arrow" src={Arrow} alt="" />
                </div>

                <NavLink to="/signin" className="signup-image-link">I am already registered</NavLink>

                <hr className="sign-up-line" />
              </div>

              </form>
        </section>
      </div>
  )
}

export default SignUp