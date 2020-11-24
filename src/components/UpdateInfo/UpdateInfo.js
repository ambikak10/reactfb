import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./updateInfo.css";
// import is_empty from "./is-empty";
import { Route, withRouter } from "react-router-dom";

class UpdateInfo extends Component {
  constructor() {
    super();
    this.state = {
      website: '',
      phone: '',
      about: '',
      description: '',
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onUpdate = () => {
   if(this.state.about){
     let pageId = this.props.location.state.pageId;
     let pageAccessToken = this.props.location.state.pageAccessToken;

     window.FB.api(
       `https://graph.facebook.com/${pageId}?about=${this.state.about}&access_token=${pageAccessToken}`,
       "POST",
       {},
       function (response) {
       }.bind(this)
     );
   }
   if(this.state.website){
      window.FB.api(
        `https://graph.facebook.com/${this.props.location.state.pageId}?website=${this.state.website}&access_token=${this.props.location.state.pageAccessToken}`,
        "POST",
        {},
        function (response) {
        }.bind(this)
      );
   }
   if(this.state.description){
      window.FB.api(
        `https://graph.facebook.com/${this.props.location.state.pageId}?phone=${this.state.phone}&access_token=${this.props.location.state.pageAccessToken}`,
        "POST",
        {},
        function (response) {
        }.bind(this)
      );
   }
   if(this.state.onAdditionalInformation){
    window.FB.api(
      `https://graph.facebook.com/${this.props.location.state.pageId}?description=${this.state.description}&access_token=${this.props.location.state.pageAccessToken}`,
      "POST",
      {},
      function (response) {
      }.bind(this)
    );
   }
   alert("Fields Updated")
  }

 goBack = () => {
   this.props.history.goBack()
 }
  render() {
    // const enabledAbout = !is_empty(this.state.about);
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
                </div>

                <div className='form-group row profile-form-row'>
                  <label className='col-lg-3 col-form-label'>Website</label>
                  <input
                    type='text'
                    className='form-control col-lg-6'
                    name='website'
                    value={this.state.website}
                    onChange={this.onChange}
                  />

                  {/* <button
                    style={{ marginLeft: "20px" }}
                    className='col-lg-3'
                    onClick={this.onWebsite}
                    type='button'
                    className='btn btn-primary'
                  >
                    Update
                  </button> */}
                </div>

                <div className='form-group row profile-form-row'>
                  <label className='col-lg-3 col-form-label'>Description</label>
                  <input
                    className='form-control col-lg-6'
                    name='description'
                    value={this.state.description}
                    onChange={this.onChange}
                  />

                  {/* <button
                    style={{ marginLeft: "20px" }}
                    className='col-lg-3'
                    onClick={this.onAdditionalInformation}
                    type='button'
                    className='btn btn-primary'
                  >
                    Update
                  </button> */}
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

                  {/* <button
                    style={{ marginLeft: "20px" }}
                    className='col-lg-3'
                    onClick={this.onPhone}
                    type='button'
                    className='btn btn-primary'
                  >
                    Update
                  </button> */}
                </div>

                {/* <div style={{ marginTop: "30px", textAlign: "center" }}>
                  <input
                    type='submit'
                    value='Submit'
                    className='btn btn-primary'
                    style={{ marginRight: "10px" }}
                  />
               
                </div> */}
              </form>

              <div style={{ marginTop: "30px", textAlign: "center" }}>
                <button
                  style={{ marginRight: "20px" }}
                  className='col-lg-3'
                  onClick={this.onUpdate}
                  type='button'
                  className='btn btn-primary'
                  // disabled={!enabledAbout}
                >
                  Update
                </button>

                <input
                  type='submit'
                  value='Cancel'
                  className='btn btn btn-secondary'
                  style={{ marginRight: "10px" }}
                  onClick={this.goBack}
                />
              </div>
              

              {/* <Link to='/dashboard' className='btn btn-secondary'>
                    Cancel
                  </Link> */}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(UpdateInfo);
