{% load redux_generator %}const {{action_name|upper}} = '{{action_name|upper}}';

export function {{action_name|camelize:False}}() {
  return {
    type: {{action_name|upper}},
  };
}
