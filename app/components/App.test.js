import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('App renders message', () => {
    const welcome = shallow(<App />);
    expect(welcome.find('div').text()).toEqual('A Simple React Component Example');
  });
});
