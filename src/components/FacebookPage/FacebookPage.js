import React, { Component, Fragment } from "react";
import "./facebookPage.css";
import { Route, withRouter } from "react-router-dom";

class FacebookPage extends Component {
  constructor() {
    super()
  }

  onclick = () => {
    console.log("clicked");
    console.log("facebook", this.props.pageAccessToken, this.props.id);
    this.props.history.push("/update", {
      pageId: this.props.id,
      pageAccessToken: this.props.pageAccessToken
    });
  };

  render() {
    const { name, category, id, index } = this.props;

    return (
      <Fragment>
        <tr>
          <th scope='row'>{index}</th>
          <td>Facebook</td>
          <td>{name}</td>
          <td>{id}</td>
          <td>{category}</td>
          <td>
            <button
              onClick={this.onclick}
              type='button'
              className='btn btn-primary'
            >
              Update
            </button>
          </td>
        </tr>
      </Fragment>
    );
  }
}

export default withRouter(FacebookPage);

{
  /* <div className='col-xl-2 col-lg-2 col-md-2 heading'>Source</div>

        <div className='col-xl-2 col-lg-2 col-md-2 heading'>Page</div>

        <div className='col-xl-2 col-lg-2 col-md-2 heading'>Address</div>

        <div className='col-xl-2 col-lg-2 col-md-2 heading'>Action</div>

        <hr/> */
}
