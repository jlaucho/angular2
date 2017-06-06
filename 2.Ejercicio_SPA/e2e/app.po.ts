import { browser, by, element } from 'protractor';

export class Ejercicio2SPAPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
