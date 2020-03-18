export const makeMoviesServer = () => {
  return cy.fixture('movies.json').then((data) => {
    cy.server();
    cy.route({
      url: '**/movies*',
      response: {
        data,
        total: data.length,
      },
      onResponse: (xhr) => {
        console.log(xhr);
      }
    }).as('movies');
  });
}
