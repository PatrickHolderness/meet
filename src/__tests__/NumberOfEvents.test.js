import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  test('render text input in number of events', () => {
    expect(NumberOfEventsWrapper.find('.number-input')).toHaveLength(1);
  });

  test('default number is 32', () => {
    expect(NumberOfEventsWrapper.find('.number-input').prop('value')).toBe(32);
  });

  test('change state when text input is changed', () => {
    NumberOfEventsWrapper.setState({
      numOfEvents: 32
    });
    const eventObject = { target: { value: 6 } };
    NumberOfEventsWrapper.find('.number-input').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numOfEvents')).toBe(6);
  });
});