import { MuraliPage } from './app.po';

describe('murali App', function() {
  let page: MuraliPage;

  beforeEach(() => {
    page = new MuraliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
