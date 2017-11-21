import { PensionhomepagePage } from './app.po';

describe('pensionhomepage App', () => {
  let page: PensionhomepagePage;

  beforeEach(() => {
    page = new PensionhomepagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
