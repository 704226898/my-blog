import React, { Component } from 'react';
import { connect, actions } from 'mirrorx';
import '../../../../styles/AdminPage/ArticleManagerment/ArticleList.scss';
import { withRouter } from 'mirrorx';
import SearchBox from '../../../common/SearchBox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';


class UserManagerPage extends Component {

  componentDidMount() {
    actions.app.getAllUser();
  }


  renderArticleItem = (user) => {

    return (
      <TableRow>
        <TableCell>{user.id}</TableCell>

        <TableCell>{user.username}</TableCell>

        <TableCell>{user.password}</TableCell>
        <TableCell>{user.create_date}</TableCell>
        <TableCell>
          <Button variant="contained" color="primary"  >Update</Button>

          <Button variant="contained" color="secondary"  >Delete</Button>
        </TableCell>
      </TableRow>
    )
  }



  render() {
    const { userList } = this.props;
    return (
      <div className="admin-article-list-container">
        <div className="tool-bar">
          <SearchBox />
        </div>

        <div className="admin-article-list">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Password</TableCell>
                  <TableCell>Create Time</TableCell>
                  <TableCell>Operation</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userList.map((user) => this.renderArticleItem(user))}
              </TableBody>
            </Table>

          </TableContainer>
        </div>

      </div>
    );
  }
}

UserManagerPage.propTypes = {

};


const UserManagerPageSmart = connect(state => {
  return {
    userList: state.app.userList,
  };
})(UserManagerPage);

export default withRouter(UserManagerPageSmart);
