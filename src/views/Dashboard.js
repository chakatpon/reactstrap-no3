import React from 'react';

import PostTable from '../components/PostTable';
import PostModal from '../components/PostModal';
import CategoryModal from '../components/PostModal';
import UserModal from '../components/UserModal';

class Dashboard extends React.Component {
    render() {
        return(
            <div>
                <header id="main-header" class="py-2 bg-primary text-white">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-6">
                        <h1>
                          <i class="fas fa-cog"></i> Dashboard</h1>
                      </div>
                    </div>
                  </div>
                </header>
                <section id="actions" class="py-4 mb-4 bg-light">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-3">
                        <a href="#" class="btn btn-primary btn-block" data-toggle="modal" data-target="#addPostModal">
                          <i class="fas fa-plus"></i> Add Post
                        </a>
                      </div>
                      <div class="col-md-3">
                        <a href="#" class="btn btn-success btn-block" data-toggle="modal" data-target="#addCategoryModal">
                          <i class="fas fa-plus"></i> Add Category
                        </a>
                      </div>
                      <div class="col-md-3">
                        <a href="#" class="btn btn-warning btn-block" data-toggle="modal" data-target="#addUserModal">
                          <i class="fas fa-plus"></i> Add User
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