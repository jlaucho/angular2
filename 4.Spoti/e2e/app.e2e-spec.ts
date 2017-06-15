import { SpotiPage } from './app.po';

describe('spoti App', () => {
  let page: SpotiPage;

  beforeEach(() => {
    page = new SpotiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
