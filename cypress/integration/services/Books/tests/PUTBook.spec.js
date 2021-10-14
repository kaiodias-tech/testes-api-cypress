/// <reference types="cypress" />

import * as PUTBooks from '../requests/PUTBooks.request';
import * as GETBooks from '../requests/GETBooks.request';
import * as POSTBooks from '../requests/POSTBooks.request'

describe('Ateração de Livros', () => {
    it('Alterar um livro', () => {
        //Buscando todos os livros (nesse caso um Livro) e alterando o titulo
        GETBooks.allbooks().then((respAllBooks) => {
            PUTBooks.updateBook(respAllBooks.body[0].id).should((respAlterBook) => {
                expect(respAlterBook.status).to.eq(200);
                expect(respAlterBook.body).to.be.not.null;
                expect(respAlterBook.body.title).to.eq('Livro Kratos - Alterado');
            })
        })
    });

    it('Criar e Alterar um Livro', () => {
        //Adicionando um livro e alterando o titulo
        POSTBooks.addBook().then((respAddBooks) => {
            PUTBooks.updateBook(respAddBooks.body.id).should((respAlterBook) => {
                expect(respAlterBook.status).to.eq(200);
                expect(respAlterBook.body).to.be.not.null;
                expect(respAlterBook.body.title).to.eq('Livro Kratos - Alterado');
            })
        })        
    });
});