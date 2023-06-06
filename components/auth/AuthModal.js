import Link from 'next/link'
import React from 'react'

const AuthModal = () => {
  return (
    <div
    className="modal fade"
    id="signin-modal"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <i className="icon-close" />
            </span>
          </button>
          <div className="form-box">
            <div className="form-tab">
              <ul className="nav nav-pills nav-fill" role="tablist">
                <li className="nav-item">
                  <Link
                    className="nav-link font-size-normal second-primary-color active"
                    id="signin-tab"
                    data-toggle="tab"
                    href="#signin"
                    role="tab"
                    aria-controls="signin"
                    aria-selected="true"
                  >
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link font-size-normal second-primary-color"
                    id="register-tab"
                    data-toggle="tab"
                    href="#register"
                    role="tab"
                    aria-controls="register"
                    aria-selected="false"
                  >
                    Register
                  </Link>
                </li>
              </ul>
              <div className="tab-content" id="tab-content-5">
                <div
                  className="tab-pane fade show active"
                  id="signin"
                  role="tabpanel"
                  aria-labelledby="signin-tab"
                >
                  <form action="#">
                    <div className="form-group">
                      <label htmlFor="singin-email">
                        Username or email address *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="singin-email"
                        name="singin-email"
                        required=""
                      />
                    </div>
                    {/* End .form-group */}
                    <div className="form-group">
                      <label htmlFor="singin-password">Password *</label>
                      <input
                        type="password"
                        className="form-control"
                        id="singin-password"
                        name="singin-password"
                        required=""
                      />
                    </div>
                    {/* End .form-group */}
                    <div className="form-footer">
                      <button
                        type="submit"
                        className="btn btn-outline-primary-2"
                      >
                        <span>LOG IN</span>
                        <i className="icon-long-arrow-right" />
                      </button>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="signin-remember"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="signin-remember"
                        >
                          Remember Me
                        </label>
                      </div>
                      {/* End .custom-checkbox */}
                      <Link href="#" className="forgot-link">
                        Forgot Your Password?
                      </Link>
                    </div>
                    {/* End .form-footer */}
                  </form>
                  <div className="form-choice">
                    <p className="text-center">or sign in with</p>
                    <div className="row">
                      <div className="col-sm-6">
                        <Link href="#" className="btn btn-login btn-g">
                          <i className="icon-google" />
                          Login With Google
                        </Link>
                      </div>
                      {/* End .col-6 */}
                      <div className="col-sm-6">
                        <Link href="#" className="btn btn-login btn-f">
                          <i className="icon-facebook-f" />
                          Login With Facebook
                        </Link>
                      </div>
                      {/* End .col-6 */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .form-choice */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane fade"
                  id="register"
                  role="tabpanel"
                  aria-labelledby="register-tab"
                >
                  <form action="#">
                    <div className="form-group">
                      <label htmlFor="register-email">
                        Your email address *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="register-email"
                        name="register-email"
                        required=""
                      />
                    </div>
                    {/* End .form-group */}
                    <div className="form-group">
                      <label htmlFor="register-password">Password *</label>
                      <input
                        type="password"
                        className="form-control"
                        id="register-password"
                        name="register-password"
                        required=""
                      />
                    </div>
                    {/* End .form-group */}
                    <div className="form-footer">
                      <button
                        type="submit"
                        className="btn btn-outline-primary-2"
                      >
                        <span>SIGN UP</span>
                        <i className="icon-long-arrow-right" />
                      </button>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="register-policy"
                          required=""
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="register-policy"
                        >
                          I agree to the
                          <Link href="#">privacy policy</Link> *
                        </label>
                      </div>
                      {/* End .custom-checkbox */}
                    </div>
                    {/* End .form-footer */}
                  </form>
                  <div className="form-choice">
                    <p className="text-center">or sign in with</p>
                    <div className="row">
                      <div className="col-sm-6">
                        <Link href="#" className="btn btn-login btn-g">
                          <i className="icon-google" />
                          Login With Google
                        </Link>
                      </div>
                      {/* End .col-6 */}
                      <div className="col-sm-6">
                        <Link href="#" className="btn btn-login  btn-f">
                          <i className="icon-facebook-f" />
                          Login With Facebook
                        </Link>
                      </div>
                      {/* End .col-6 */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .form-choice */}
                </div>
                {/* .End .tab-pane */}
              </div>
              {/* End .tab-content */}
            </div>
            {/* End .form-tab */}
          </div>
          {/* End .form-box */}
        </div>
        {/* End .modal-body */}
      </div>
      {/* End .modal-content */}
    </div>
    {/* End .modal-dialog */}
  </div>
  )
}

export default AuthModal