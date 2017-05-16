{% load redux_generator %}const REQUEST_{{action_name|upper}} = 'REQUEST_{{action_name|upper}}';
const RECEIVE_{{action_name|upper}} = 'RECEIVE_{{action_name|upper}}';
const ERROR_{{action_name|upper}} = 'ERROR_{{action_name|upper}}';

function request{{action_name|camelize}}() {
  return {
    type: REQUEST_{{action_name|upper}},
  };
}

function receive{{action_name|camelize}}(data) {
  return {
    type: RECEIVE_{{action_name|upper}},
    data,
  };
}

function error{{action_name|camelize}}(error) {
  return {
    type: ERROR_{{action_name|upper}},
    error,
  };
}

export function {{action_name|camelize:False}}() {
  return (dispatch) => {
    dispatch(request{{action_name|camelize}}());
    fetch('/url')
      .then(response => response.json())
      .then(data => dispatch(receive{{action_name|camelize}}(data)))
      .catch(error => dispatch(error{{action_name|camelize}}(error)));
  };
}
