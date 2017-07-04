import { AngularVideoSearchPage } from './app.po';

describe('angular-video-search App', () => {
  let page: AngularVideoSearchPage;

  beforeEach(() => {
    page = new AngularVideoSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
