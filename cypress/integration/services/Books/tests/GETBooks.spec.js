/// <reference types="cypress" />

import * as GETBooks from "../requests/GETBooks.request";

describe('Busca livros', () => {
    it('Listar todos os livros', () => {
        GETBooks.allbooks().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null
        })
    });
});