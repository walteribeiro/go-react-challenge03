import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from '../Loading';
import { Container, NoDataContainer, User, UserInfo, Hr } from './styles';

import { Creators as UserActions } from '../../store/ducks/users';

class UserList extends Component {
  handleRemove = (id) => {
    this.props.removeUser(id);
  }

  renderUser = user => (
    <Fragment key={user.id}>
      <User>
        <img src={user.url} alt={user.name} />
        <UserInfo>
          <strong>{user.name}</strong>
          <small>{user.login}</small>
        </UserInfo>
        <i id="remove" className="fa fa-remove" onClick={() => this.handleRemove(user.id)} />
        <i id="direction" className="fa fa-chevron-right" />
      </User>
      <Hr />
    </Fragment>
  )

  render() {
    const { users, loading } = this.props;
    const hasUsers = users && users.length > 0;
    return (
      <Container>
        { loading
          ? <Loading />
          : hasUsers ? users.map(this.renderUser) : <NoDataContainer><p>Nenhum usuário cadastrado</p></NoDataContainer> }
      </Container>
    );
  }
}

UserList.propTypes = {
  removeUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    login: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = state => ({
  users: state.users.data,
  loading: state.users.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
