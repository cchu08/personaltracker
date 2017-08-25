import React from 'react';
import { shallow } from 'enzyme';
import Hello from '../../client/src/components/Hello';

describe('Hello component', () => {
  const component = shallow(<Hello />);
  
  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have an h1 tag', () => {
    expect(component.find('h1').html()).toContain('Hello World.');
  });
})