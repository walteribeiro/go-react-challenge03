import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Marker } from 'react-map-gl';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import { Container, UserImg } from './styles';
import FormModal from '../FormModal';

export class Map extends Component {
  state = {
    toggleModal: false,
    latitude: 0,
    longitude: 0,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: 49.88665469,
      longitude: -97.16485231,
      zoom: 14,
    },
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.error) {
      toast.error(nextProps.error);
    }
    if (nextProps.success) {
      toast.info(nextProps.success);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleToggleModal = () => {
    this.setState({ toggleModal: !this.state.toggleModal });
  }

  handleMapClick = (evt) => {
    const [longitude, latitude] = evt.lngLat;
    this.handleToggleModal();
    this.setState({ latitude, longitude });
  }

  renderMarker = (user, index) => (
    <Marker
      key={`marker-${index}`}
      longitude={user.longitude}
      latitude={user.latitude}
      onClick={this.handleMapClick}
      captureClick
    >
      <UserImg
        alt={user.name}
        src={user.url}
      />
    </Marker>
  )

  render() {
    return (
      <Container>
        <ReactMapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1Ijoid2FsdGVyaWJlaXJvIiwiYSI6ImNqaHV0Ym03aTByNnEzdm41dTV2cWgxaXMifQ.tdOfds6pAm1E0YB2zuZggQ"
          onViewportChange={viewport => this.setState({ viewport })}
        >
          { this.props.users.map(this.renderMarker) }

        </ReactMapGL>
        <FormModal
          showModal={this.state.toggleModal}
          toggleClick={this.handleToggleModal}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
        <ToastContainer
          hideProgressBar
          newestOnTop
        />
      </Container>
    );
  }
}

Map.defaultPropTypes = {
  error: PropTypes.string,
  success: PropTypes.string,
};

Map.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  })).isRequired,
};

const mapStateToProps = state => ({
  users: state.users.data,
  error: state.users.errorMessage,
  success: state.users.successMessage,
});

export default connect(mapStateToProps)(Map);
