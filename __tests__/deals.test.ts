import React from 'react';
import renderer from 'react-test-renderer';
import DealsFeed from '../src/app/index';

// Mock data for testing
jest.mock('../src/assets/deals.json', () => ({
  deals: [
    {
      id: '1',
      model: 'Test TV 55"',
      currentPrice: 499.99,
      originalPrice: 599.99,
      discountPct: 16.67,
      retailerLink: 'https://example.com/test-tv',
      imageUrl: 'https://example.com/test-tv.jpg',
    },
  ],
}), { virtual: true });

describe('DealsFeed', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DealsFeed />).toJSON();
    expect(tree).toBeDefined();
  });
});
