import { setAuth, unsetAuth } from './authActions';

describe('authActions should create an action to', () => {
  it('set authorization', () => {
    expect(setAuth()).toMatchSnapshot();
  });

  it('unset authorization', () => {
    expect(unsetAuth()).toMatchSnapshot();
  });
});
