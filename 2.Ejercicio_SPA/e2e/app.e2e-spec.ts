import { Ejercicio2SPAPage } from './app.po';

describe('ejercicio2-spa App', () => {
  let page: Ejercicio2SPAPage;

  beforeEach(() => {
    page = new Ejercicio2SPAPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
