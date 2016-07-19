const REQUEST_{{action_name_upper}} = 'REQUEST_{{action_name_upper}}';
const RECEIVE_{{action_name_upper}} = 'RECEIVE_{{action_name_upper}}';

function request{{action_name}}() {
    return {
        type: REQUEST_{{action_name_upper}},
    };
}

function receive{{action_name}}(data) {
    return {
        type: RECEIVE_{{action_name_upper}},
        data,
    };
}

export function {{action_name}}() {
    return (dispatch) => {
        dispatch(request{{action_name}}());
        fetch('/url')
            .then(response => response.json())
            .then(data => dispatch(receive{{action_name}}(data)));
    };
}
