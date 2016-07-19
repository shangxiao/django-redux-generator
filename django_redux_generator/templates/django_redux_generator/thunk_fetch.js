{% load redux_generator %}const REQUEST_{{action_name|upper}} = 'REQUEST_{{action_name|upper}}';
const RECEIVE_{{action_name|upper}} = 'RECEIVE_{{action_name|upper}}';

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

export function {{action_name|camelize:False}}() {
  return (dispatch) => {
    dispatch(request{{action_name|camelize}}());
    fetch('/url')
      .then(response => response.json())
      .then(data => dispatch(receive{{action_name|camelize}}(data)));
  };
}
