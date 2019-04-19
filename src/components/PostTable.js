import React from 'react'

class PostTable extends React.Component {
    render() {
        return(
            <section id="posts">
            <div className="container">
              <div className="row">
                <div className="col-md-9">
                  <div className="card">
                    <div className="card-header">
                      <h4>Latest Posts</h4>
                    </div>
                    <table className="table table-striped">
                      <thead className="thead-dark">
                        <tr>
                          <th>#</th>
                          <th>Title</th>
                          <th>Category</th>
                          <th>Date</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Post One</td>
                          <td>Web Development</td>
                          <td>May 10 2019</td>
                          <td>
                            <a href="/app/details" className="btn btn-secondary">
                              <i className="fas fa-angle-double-right"></i> Details
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Post Two</td>
                          <td>Tech Gadgets</td>
                          <td>May 11 2019</td>
                          <td>
                            <a href="/app/details" className="btn btn-secondary">
                              <i className="fas fa-angle-double-right"></i> Details
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Post Three</td>
                          <td>Web Development</td>
                          <td>May 13 2019</td>
                          <td>
                            <a href="/app/details" className="btn btn-secondary">
                              <i className="fas fa-angle-double-right"></i> Details
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Post Four</td>
                          <td>Business</td>
                          <td>May 15 2019</td>
                          <td>
                            <a href="/app/details" className="btn btn-secondary">
                              <i className="fas fa-angle-double-right"></i> Details
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Post Five</td>
                          <td>Web Development</td>
                          <td>May 17 2019</td>
                          <td>
                            <a href="/app/details" className="btn btn-secondary">
                              <i className="fas fa-angle-double-right"></i> Details
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Post Six</td>
                          <td>Health & Wellness</td>
                          <td>May 20 2019</td>
                          <td>
                            <a href="/app/details" className="btn btn-secondary">
                              <i className="fas fa-angle-double-right"></i> Details
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card text-center bg-primary text-white mb-3">
                    <div className="card-body">
                      <h3>Posts</h3>
                      <h4 className="display-4">
                        <i className="fas fa-pencil-alt"></i> 6
                      </h4>
                      <a href="/app/posts" className="btn btn-outline-light btn-sm">View</a>
                    </div>
                  </div>

                  <div className="card text-center bg-success text-white mb-3">
                    <div className="card-body">
                      <h3>Categories</h3>
                      <h4 className="display-4">
                        <i className="fas fa-folder"></i> 4
                      </h4>
                      <a href="/app/categories" className="btn btn-outline-light btn-sm">View</a>
                    </div>
                  </div>

                  <div className="card text-center bg-warning text-white mb-3">
                    <div className="card-body">
                      <h3>Users</h3>
                      <h4 className="display-4">
                        <i className="fas fa-users"></i> 4
                      </h4>
                      <a href="/app/users" className="btn btn-outline-light btn-sm">View</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default PostTable;