import React, { Component, Fragment } from "react";
import "./updateInfo.css";
import { Route, withRouter } from "react-router-dom";

class UpdateInfo extends Component {
  constructor() {
    super();
    this.state = {
      website: "",
      phone: "",
      about: "",
      description: "",
    };
  }

  componentDidMount = () => {
    window.FB.api(
      `https://graph.facebook.com/${this.props.location.state.pageId}?fields=about,website,phone,description&access_token=${this.props.location.state.pageAccessToken}`,
      "GET",
      {},
      function (response) {
        console.log(response);
        this.setState({
          website: response.website,
          phone: response.phone,
          about: response.about,
          description: response.description,
        });
      }.bind(this)
    );
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onUpdate = () => {

      let pageId = this.props.location.state.pageId;
      let pageAccessToken = this.props.location.state.pageAccessToken;
    if (this.state.about) {
 

      window.FB.api(
        `https://graph.facebook.com/${pageId}?about=${this.state.about}&access_token=${pageAccessToken}`,
        "POST",
        {},
        function (response) {}.bind(this)
      );
    }
    if (this.state.website) {
      window.FB.api(
        `https://graph.facebook.com/${this.props.location.state.pageId}?website=${this.state.website}&access_token=${this.props.location.state.pageAccessToken}`,
        "POST",
        {},
        function (response) {}.bind(this)
      );
    }
    if (this.state.phone) {
      window.FB.api(
        `https://graph.facebook.com/${this.props.location.state.pageId}?phone=${this.state.phone}&access_token=${this.props.location.state.pageAccessToken}`,
        "POST",
        {},
        function (response) {}.bind(this)
      );
    }
    if (this.state.description) {
      window.FB.api(
        `https://graph.facebook.com/${this.props.location.state.pageId}?description=${this.state.description}&access_token=${this.props.location.state.pageAccessToken}`,
        "POST",
        {},
        function (response) {}.bind(this)
      );
    }
    alert("Fields Updated");
    this.goBack();
  };

  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    // const enabledAbout = !is_empty(this.state.about);
    return (
      <Fragment>
        <div className='fb-form-container'>
          <div className='card fb-form-card'>
            <div className='card-body fb-form-card-body'>
              <h3 style={{ textAlign: "center" }}>Edit Page fields</h3>
              <hr className='fb-form-horizontal-line' />

              <form onSubmit={this.onSubmit}>
                <div className='form-group row fb-form-row'>
                  <label className='col-lg-3 col-form-label'>About</label>
                  <input
                    type='text'
                    className='form-control col-lg-6'
                    name='about'
                    value={this.state.about}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group row fb-form-row'>
                  <label className='col-lg-3 col-form-label'>Website</label>
                  <input
                    type='text'
                    className='form-control col-lg-6'
                    name='website'
                    value={this.state.website}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group row fb-form-row'>
                  <label className='col-lg-3 col-form-label'>Description</label>
                  <input
                    type='text'
                    className='form-control col-lg-6'
                    name='description'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group row fb-form-row'>
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
