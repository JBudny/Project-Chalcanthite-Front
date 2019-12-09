import { closeLoginModal, openLoginModal } from './loginModalActions';

describe('loginModalActions should create', () => {
  it('openLoginModal action', () => {
    expect(openLoginModal()).toMatchSnapshot();
  });

  it('closeLoginModal action', () => {
    expect(closeLoginModal()).toMatchSnapshot();
  });
});
