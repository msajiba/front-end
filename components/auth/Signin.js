import Link from 'next/link'
import React from 'react'

const Signin = () => {
  return (
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
  )
}

export default Signin