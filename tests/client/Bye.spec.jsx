import React from 'react';
import { shallow } from 'enzyme';
import Bye from '../../client/src/components/Bye';

describe('Bye component', () => {
  const component = shallow(<Bye />);
  
  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have an h1 tag that says Bye', () => {
    expect(component.find('h1').html()).toContain('Bye');
  });
});