import { mount, shallow } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import CitySearch from '../CitySearch';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, (test) => {
  test('If a user hasn`t searched for a city, show upcoming event from all cities', ({
    given,
    when,
    then
  }) => {
    given('the user hasn`t searched for a city', () => {});

    let AppWrapper;
    when('the user starts the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the user should see a list of all upcoming events', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });
  });

  test('User should see a list of suggestions when they search for a city', ({
    given,
    when,
    then
  }) => {
    let CitySearchWrapper;
    given('the main page is open', () => {
      let locations = extractLocations(mockData);
      CitySearchWrapper = shallow(
        <CitySearch updateEevnts={() => {}} locations={locations} />
      );
    });

    when('the user starts typing in the search box', () => {
      CitySearchWrapper.find('.city').simulate('change', {
        target: { value: 'Berlin' }
      });
    });

    then(
      'the user should receive a list of suggestions matching their input',
      () => {
        expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
      }
    );
  });

  test('User can select a city from the suggested list', ({
    given,
    and,
    when,
    then
  }) => {
    let AppWrapper;
    given('user has started typing "Berlin" in the search box', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.find('.city').simulate('change', {
        target: { value: 'Berlin' }
      });
    });

    and('the list of suggestions is displayed', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.suggestions li')).toHaveLength(2);
    });

    when(
      'the user selects a city from the list of suggestions (e.g Berlin)',
      () => {
        AppWrapper.find('.suggestions li').at(0).simulate('click');
      }
    );

    then(
      'the user should be shown the selected city',
      () => {
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
      }
    );

    and(
      'the user should receive a list of upcoming events in that city',
      () => {
        expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
      }
    );
  });
});