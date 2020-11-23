import React, { Component } from 'react'
import './dashboard.css'
import FacebookPage from '../FacebookPage/FacebookPage'
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      pages: [],
      pageAccessTokens: null
    }
  }

componentDidMount () {
    // const id = this.props.location.state.id;
    // const access = this.props.location.state.access;
    console.log(this.props);
    // console.log(access);
    // console.log(id);
      window.FB.api(
        `https://graph.facebook.com/${this.props.location.state.id}/accounts?access_token=${this.props.location.state.access}`,
        "GET",
        {},
        function (response) {
          console.log(response); 
          this.setState({
            pages: response.data,

          });
        }.bind(this)
      );
  }

          
  render() {
  console.log(this.state.pages)
      var filteredPages = []
  if(this.state.pages.length > 1){
    filteredPages = this.state.pages.filter((page, index) => index < 3)
  }
  console.log(filteredPages);
 
      return (
        <div className='container '>
          <div className='row margin'>
            <div className='col-xl-3 col-lg-3 col-md-3 grid'>
              <div className='appName'>REACT APP</div>
              <div>
                <div>
                  <Link to=
                  {
                    {
                      pathName: '/dashboard',
                      state: this.props.location.state
                    }
                  } 
                  className='selected'>
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
                    <th scope='row'>{this.state.pages.length + 1}</th>
                    <td>Yelp</td>
                    <td>abc</td>
                    <td>111.111</td>
                    <td>Business</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope='row'>{this.state.pages.length + 2}</th>
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
