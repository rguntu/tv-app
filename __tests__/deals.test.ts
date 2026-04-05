import React from 'react';
import renderer from 'react-test-renderer';
import DealsFeed from '../src/app/index';

describe('DealsFeed', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DealsFeed />).toJSON();
    expect(tree).toBeDefined();
  });
});
