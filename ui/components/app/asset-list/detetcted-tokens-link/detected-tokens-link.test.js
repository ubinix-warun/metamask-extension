import * as React from 'react';
import {
  renderWithProvider,
  screen,
  fireEvent,
} from '../../../../../test/jest';
import configureStore from '../../../../store/store';
import testData from '../../../../../.storybook/test-data';

import DetectedTokensLink from './detected-tokens-link';

describe('DetectedTokensLink', () => {
  const setShowDetectedTokensSpy = jest.fn();
  const args = {
    setShowDetectedTokens: setShowDetectedTokensSpy,
  };

  it('should render number of tokens detected link', async () => {
    const store = configureStore(testData);
    renderWithProvider(<DetectedTokensLink {...args} />, store);

    expect(
      screen.getByText('3 new tokens found in this account'),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByText('3 new tokens found in this account'));
    expect(setShowDetectedTokensSpy).toHaveBeenCalled();
  });
});
