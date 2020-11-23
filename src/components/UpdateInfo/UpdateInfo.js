import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./updateInfo.css";

class UpdateInfo extends Component {
  constructor() {
    super();
    this.state = {
      pageAccessToken: '',
      email: null,
      phone: null,
      about: null,
      hours: null,
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount = () => {
    // console.log(this.props)
    // console.log(this.props.location.state.pageId);
    window.FB.api(
      `https://graph.facebook.com/${this.props.history.location.state.pageId}?
         fields=access_token&
         access_token=${this.props.history.location.state.pageAccessToken}`,
      "GET",
      {},
      function (response) {
        console.log(response);
        this.setState({
          pageAccessToken: response.access_token,
        });
      }.bind(this)
    );
  };
  render() {
    console.log(this.state.pageAccessToken)
    return (
      <Fragment>
        <div className='profile-form-container'>
          <div className='card profile-form-card'>
            <div className='card-body profile-form-card-body'>
              <h3 style={{ textAlign: "center" }}>Edit Page fields</h3>
              <hr className='profile-form-horizontal-line' />

              <form onSubmit={this.onSubmit}>
                <div className='form-group row profile-form-row'>
                  <label className='col-lg-3 col-form-label'>About</label>
                  <input
                    type='text'
                    className='form-control col-lg-6'
                    name='about'
                    value={this.state.about}
                    onChange={this.onChange}
                  />

                  <button
                    style={{ marginLeft: "20px" }}
                    className='col-lg-3'
                    onClick={this.onAbout}
                    type='button'
                    className='btn btn-primary'
                  >
                    Update
                  </button>
                </div>

                <div className='form-group row profile-form-row'>
                  <label className='col-lg-3 col-form-label'>Email</label>
                  <input
                    type='text'
                    className='form-control col-lg-6'
                    name='email'
                    value={this.state.email}
                    onChange={this.onChange}
                  />

                  <button
                    style={{ marginLeft: "20px" }}
                    className='col-lg-3'
                    onClick={this.onEmail}
                    type='button'
                    className='btn btn-primary'
                  >
                    Update
                  </button>
                </div>

                <div className='form-group row profile-form-row'>
                  <label className='col-lg-3 col-form-label'>
                    Hours
                  </label>
                  <input
                    className='form-control col-lg-6'
                    name='hours'
                    value={this.state.hours}
                    onChange={this.onChange}
                  />

                  <button
                    style={{ marginLeft: "20px" }}
                    className='col-lg-3'
                    onClick={this.onHours}
                    type='button'
                    className='btn btn-primary'
                  >
                    Update
                  </button>
                </div>

                <div className='form-group row profile-form-row'>
                  <label className='col-lg-3 col-form-label'>Phone</label>
                  <input
                    type='tel'
                    className='form-control col-lg-6'
                    name='phone'
                    value={this.state.phone}
                    onChange={this.onChange}
                  />

                  <button
                    style={{ marginLeft: "20px" }}
                    className='col-lg-3'
                    onClick={this.onPhone}
                    type='button'
                    className='btn btn-primary'
                  >
                    Update
                  </button>
                </div>

                {/* <div style={{ marginTop: "30px", textAlign: "center" }}>
                  <input
                    type='submit'
                    value='Submit'
                    className='btn btn-primary'
                    style={{ marginRight: "10px" }}
                  />
                  <Link to='/dashboard' className='btn btn-secondary'>
                    Cancel
                  </Link>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default UpdateInfo;
