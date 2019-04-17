import React from 'react';

import $ from 'jquery/dist/jquery';

class UserModal extends React.Component {

    componentDidMount() {
        $("#addUserModal").draggable({
            handle: ".modal-header"
        });
        $('.modal').modal({
            backdrop: false,
            show: false
          });
    }

    render() {
        return(
            <div className="modal fade modeless" id="addUserModal">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header bg-warning text-white">
                  <h5 className="modal-title">Add User</h5>
                  <button className="close" data-dismiss="modal">
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label for="name">Name</label>
                      <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label for="email">Email</label>
                      <input type="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label for="password">Password</label>
                      <input type="password" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label for="password2">Confirm Password</label>
                      <input type="password" className="form-control"/>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-warning" data-dismiss="modal">Save Changes</button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default UserModal;