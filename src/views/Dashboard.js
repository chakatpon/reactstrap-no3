import React from 'react';

import PostTable from '../components/PostTable';
import PostModal from '../components/PostModal';
import CategoryModal from '../components/CategoryModal';
import UserModal from '../components/UserModal';

class Dashboard extends React.Component {
    render() {
        return(
            <div>
                <header id="main-header" className="py-2 bg-primary text-white">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <h1>
                          <i className="fas fa-cog"></i> Dashboard</h1>
                      </div>
                    </div>
                  </div>
                </header>
                <section id="actions" className="py-4 mb-4 bg-light">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <a href="#" className="btn btn-primary btn-block" data-toggle="modal" data-target="#addPostModal">
                          <i className="fas fa-plus"></i> Add Post
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#" className="btn btn-success btn-block" data-toggle="modal" data-target="#addCategoryModal">
                          <i className="fas fa-plus"></i> Add Category
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#" className="btn btn-warning btn-block" data-toggle="modal" data-target="#addUserModal">
                          <i className="fas fa-plus"></i> Add User
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                <PostTable/>
                <PostModal/>
                <CategoryModal/>
                <UserModal/>
            </div>
        );
    }
}

export default Dashboard;