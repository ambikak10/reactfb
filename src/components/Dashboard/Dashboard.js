import React, { Component } from "react";
import "./dashboard.css";
import FacebookPage from "../FacebookPage/FacebookPage";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      pages: [],
    };
  }

  componentDidMount() {
    
    if (this.props.location.state && this.props.location.state.access) {
      window.FB.api(
        `https://graph.facebook.com/${this.props.location.state.id}/accounts?access_token=${this.props.location.state.access}`,
        "GET",
        {},
        function (response) {
         
          if (response.error) {
            this.props.history.push("/");
          } else {
            this.setState({
              pages: response.data,
            });
          }
        }.bind(this)
      );
    } else {
      this.props.history.push("/");
    }
  }
  logout = () => {
    window.FB.logout(function (response) {
      console.log(response);
    });
    this.props.history.push("/");
  };
  render() {
   
    var filteredPages = [];
    if (this.state.pages && this.state.pages.length > 1) {
      filteredPages = this.state.pages.filter((page, index) => index < 3);
    }
  

    return (
      <div className='container '>
        <div className='row margin'>
          <div className='col-xl-3 col-lg-3 col-md-3 grid'>
            <div className='appName'>REACT APP</div>
            <div>
              <div>
                <Link
                  to={{
                    pathName: "/dashboard",
                    state: this.props.location.state,
                  }}
                  className='selected'
                >
                  <i className='fa fa-home' aria-hidden='true'>
                    <span
                      className='menu'
                      style={{ fontFamily: "Nunito Sans" }}
                    >
                      Dashboard
                    </span>
                  </i>
                </Link>
              </div>

              <i className='fa fa-star' aria-hidden='true'>
                <span className='menu' style={{ fontFamily: "Nunito Sans" }}>
                  Reviews
                </span>
              </i>

              <i className='fa fa-list' aria-hidden='true'>
                <span className='menu' style={{ fontFamily: "Nunito Sans" }}>
                  Listings
                </span>
              </i>

              <i className='fa fa-cog' aria-hidden='true'>
                <span className='menu' style={{ fontFamily: "Nunito Sans" }}>
                  Settings
                </span>
              </i>
              <Link>
                <i class='fa fa-sign-out' aria-hidden='true'>
                  <span
                    onClick={this.logout}
                    className='menu'
                    style={{ fontFamily: "Nunito Sans" }}
                  >
                    Logout
                  </span>
                </i>
              </Link>
            </div>
          </div>

          <div
            className='col-xl-9 col-lg-9 col-md-9'
            style={{ position: "relative" }}
          >
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Sl.No</th>
                  <th scope='col'>Source</th>
                  <th scope='col'>Page name</th>
                  <th scope='col'>Page ID</th>
                  <th scope='col'>Category</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredPages.map((page, index) => (
                  <FacebookPage
                    key={page.category_list[0].id}
                    category={page.category}
                    name={page.name}
                    id={page.id}
                    index={index + 1}
                    pageAccessToken={page.access_token}
                  />
                ))}

                <tr>
                  <th scope='row'>
                    {this.state.pages && this.state.pages.length + 1}
                  </th>
                  <td>Yelp</td>
                  <td>abc</td>
                  <td>111.111</td>
                  <td>Business</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope='row'>
                    {this.state.pages && this.state.pages.length + 2}
                  </th>
                  <td>Yahoo</td>
                  <td>xyz</td>
                  <td>222.222</td>
                  <td>Business</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default Dashboard;
