import { PensionadminPage } from './app.po';

describe('pensionadmin App', () => {
  let page: PensionadminPage;

  beforeEach(() => {
    page = new PensionadminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
