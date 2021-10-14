/// <reference types="cypress" />

import * as DELETEBooks from '../requests/DELETEBooks.request';
import * as GETBooks from '../requests/GETBooks.request';
import * as POSTBooks from '../requests/POSTBooks.request';

describe('Deletar livros', () => {
    it('Deletar um livro', () => {
        GETBooks.allbooks().then((respAllBooks) => {
            DELETEBooks.deleteBook(respAllBooks.body[0].id)
                .should((respDeleteBook) => {
                    expect(respDeleteBook.status).to.eq(200);
                })
        })
    });

    it('Criar e Excluir um Livro', () => {
        POSTBooks.addBook().then((respAddBook) => {
            DELETEBooks.deleteBook(respAddBook.body.id).should((respDeleteBook) => {
                expect(respDeleteBook.status).to.eq(200);
            })
        })
    });
});