import React from 'react';
import { shallow } from 'enzyme';
import Search from '../../client/src/containers/Search';

describe('Search component', () => {

  test('Search should exist', () => {
    const component = <Search />;
    expect(component).not.toBeNull();
  });

  xtest('Search renders correctly', () => {
    // const context = { value: '' }
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
  });
});
