export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
  REMOVE: 'users/REMOVE',
};

const INITIAL_STATE = {
  loading: false,
  errorMessage: null,
  successMessage: null,
  data: [],
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state, loading: true, errorMessage: null, successMessage: null,
      };

    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: null,
        successMessage: action.payload.successMessage,
        data: [...state.data, action.payload.data],
      };

    case Types.ADD_FAILURE:
      return {
        ...state, loading: false, errorMessage: action.payload.error, successMessage: null,
      };

    case Types.REMOVE:
      return {
        ...state,
        successMessage: 'User successfully removed.',
        errorMessage: null,
        data: state.data.filter(user => user.id !== action.payload.id),
      };

    default:
      return state;
  }
}

export const Creators = {
  addUserRequest: (user, latitude, longitude) => ({
    type: Types.ADD_REQUEST,
    payload: { user, latitude, longitude },
  }),

  addUserSuccess: (data, successMessage) => ({
    type: Types.ADD_SUCCESS,
    payload: { data, successMessage },
  }),

  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),

  removeUser: id => ({
    type: Types.REMOVE,
    payload: { id },
  }),
};
