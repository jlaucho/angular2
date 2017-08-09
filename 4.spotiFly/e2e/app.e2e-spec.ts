import { SpotiFlyPage } from './app.po';

describe('spoti-fly App', () => {
  let page: SpotiFlyPage;

  beforeEach(() => {
    page = new SpotiFlyPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
