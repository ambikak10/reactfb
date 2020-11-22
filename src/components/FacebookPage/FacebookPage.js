import React, { Component, Fragment } from 'react'
import './facebookPage.css'

 class FacebookPage extends Component {
  render() {
    return (
      <Fragment>
        {/* <div className='col-xl-2 col-lg-2 col-md-2 heading'>Source</div>

        <div className='col-xl-2 col-lg-2 col-md-2 heading'>Page</div>

        <div className='col-xl-2 col-lg-2 col-md-2 heading'>Address</div>

        <div className='col-xl-2 col-lg-2 col-md-2 heading'>Action</div>

        <hr/> */}
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button type='button' class='btn btn-primary'>
                Primary
              </button>
            </td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>

          <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button type='button' class='btn btn-primary'>
                Primary
              </button>
            </td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>


                   <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button type='button' class='btn btn-primary'>
                Primary
              </button>
            </td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Fragment>
    );
  }
}

export default FacebookPage
