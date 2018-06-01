import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as UserActions } from '../../store/ducks/users';
import { ModalOverlay, Modal, ModalContent, Form } from './styles';

class FormModal extends Component {
  state = {
    userInput: '',
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.toggleClick();
    this.props.addUserRequest(this.state.userInput, this.props.latitude, this.props.longitude);
    this.setState({ userInput: '' });
  }

  render() {
    const { showModal } = this.props;

    return (
      <div>
        {showModal && (
          <ModalOverlay>
            <Modal>
              <ModalContent>
                <p>Add new user</p>
                <Form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    placeholder="Github user"
                    value={this.state.userInput}
                    onChange={evt => this.setState({ userInput: evt.target.value })}
                  />
                  <div>
                    <button onClick={this.props.toggleClick} id="cancel" type="button">Cancelar</button>
                    <button id="save" type="submit">Salvar</button>
                  </div>
                </Form>
              </ModalContent>
            </Modal>
          </ModalOverlay>
          )}
      </div>
    );
  }
}

FormModal.propTypes = {
  toggleClick: PropTypes.func.isRequired,
  addUserRequest: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(null, mapDispatchToProps)(FormModal);
