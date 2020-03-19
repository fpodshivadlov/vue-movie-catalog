// https://docs.cypress.io/api/introduction/api.html

import { makeMoviesServer } from '../support/server';

describe('Home Page', () => {
  it('the page is loaded', () => {
    cy.visit('/');
    cy.contains('h1', 'Find your movie');
  });

  it('the items are loaded', () => {
    makeMoviesServer().then(() => {
      cy.visit('/');
      cy.wait('@movies');

      cy.getCy('total-found').contains('9');
    });
  });

  it('search movie', () => {
    cy.visit('/');

    cy.getCy('search-text').type('Jay');
    cy.getCy('search-button').click();

    cy.getCy('movie-title').contains('Jay and Silent Bob Strike Back');
  });
});
