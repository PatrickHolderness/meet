import { mount } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test('When user hasn’t specified a number, 32 is the default.', ({
    given,
    when,
    then
  }) => {
    given(
      'the user has not specified a number of events to be displayed',
      () => {}
    );

    let AppWrapper;
    when('app loaded', () => {
      AppWrapper = mount(<App />);
    });

    then('the user should see a default number which is 32', () => {
      AppWrapper.update();
      expect(AppWrapper.state('numberOfEvents')).toEqual(32);
    });
  });

  test('User can change the number of events they want to see.', ({
    given,
    and,
    when,
    then
  }) => {
    let AppWrapper;
    given('the main page is open', () => {
      AppWrapper = mount(<App />);
    });

    and(
      'the list of elements has been loaded and the user did not specify a number of events to be displayed',
      () => {}
    );

    when(
      'the user enters a number (for example six) in the number of events input field',
      () => {
        AppWrapper.update();
        let NumberOfEventsWrapper = AppWrapper.find('NumberOfEvents');
        const eventObject = { target: { value: 6 } };
        NumberOfEventsWrapper.find('.number-input').simulate(
          'change',
          eventObject
        );
      }
    );

    then('the user should see a six in the input field and six events displayed.', () => {
      let NumberOfEventsWrapper = AppWrapper.find('NumberOfEvents');
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(6);
      }
    );
  });
});