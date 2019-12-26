import 'jest-styled-components';

import { cleanup, fireEvent } from '@testing-library/react';
import React from 'react';

import dummyInitialState from '../../../../../utils/testUtils/dummyData/dummyInitialState';
import renderWithRedux from '../../../../../utils/testUtils/renderWithRedux';
import BottomPanel from './BottomPanel';

afterEach(cleanup);

test('BottomPanel should render properly', async () => {
  const initialState = { ...dummyInitialState };
  const { asFragment } = renderWithRedux(<BottomPanel />, { initialState });

  expect(asFragment()).toMatchSnapshot();
});

test('BottomPanel should render disabled buttons when user is not logged in', async () => {
  const initialState = { ...dummyInitialState };
  const { getAllByRole } = renderWithRedux(<BottomPanel />, { initialState });

  const buttons = await getAllByRole('button');
  buttons.forEach(button => expect(button).toHaveAttribute('disabled'));
});

test('BottomPanel should render enabled buttons when user is logged in', async () => {
  const initialState = { ...dummyInitialState, auth: { auth: true } };
  const { getAllByRole } = renderWithRedux(<BottomPanel />, { initialState });

  const buttons = await getAllByRole('button');
  buttons.forEach(button => expect(button).not.toHaveAttribute('disabled'));
});

test('BottomPanel should initially render two buttons with an empty heart', async () => {
  const initialState = { ...dummyInitialState, auth: { auth: true } };
  const { getAllByRole } = renderWithRedux(<BottomPanel />, { initialState });

  const buttons = await getAllByRole('button');
  expect(buttons[0]).toMatchSnapshot();
  expect(buttons[1]).toMatchSnapshot();
});

test('Like button should toggle an empty heart into filled heart after click on it', async () => {
  const initialState = { ...dummyInitialState, auth: { auth: true } };
  const { getAllByRole } = renderWithRedux(<BottomPanel />, { initialState });

  const buttons = await getAllByRole('button');
  fireEvent.click(buttons[0]);
  expect(buttons[0]).toMatchSnapshot();
});

test('Dislike button should toggle an empty heart into filled heart after click on it', async () => {
  const initialState = { ...dummyInitialState, auth: { auth: true } };
  const { getAllByRole } = renderWithRedux(<BottomPanel />, { initialState });

  const buttons = await getAllByRole('button');
  fireEvent.click(buttons[1]);
  expect(buttons[1]).toMatchSnapshot();
});

test('Dislike button should toggle Like button filled heart into an empty heart after click on it', async () => {
  const initialState = { ...dummyInitialState, auth: { auth: true } };
  const { getAllByRole } = renderWithRedux(<BottomPanel />, { initialState });

  const buttons = await getAllByRole('button');
  fireEvent.click(buttons[0]);
  fireEvent.click(buttons[1]);

  expect(buttons[0]).toMatchSnapshot();
});

test('Like button should toggle Dislike button filled heart into an empty heart after click on it', async () => {
  const initialState = { ...dummyInitialState, auth: { auth: true } };
  const { getAllByRole } = renderWithRedux(<BottomPanel />, { initialState });

  const buttons = await getAllByRole('button');
  fireEvent.click(buttons[1]);
  fireEvent.click(buttons[0]);

  expect(buttons[1]).toMatchSnapshot();
});
