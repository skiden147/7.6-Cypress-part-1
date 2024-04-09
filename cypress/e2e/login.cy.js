describe('template spec', () => {
	beforeEach(() => {
			cy.visit('/')
		}),

		it('Нормальный вход', () => {
			cy.login('test@test.com', 'test')
			cy.contains('Добро пожаловать test@test.com').should('be.visible')
		})


	it('Пустой email', () => {
		cy.login(null, 'test')
		cy.get('#mail').then((elements) => {
			expect(elements[0].checkValidity()).to.be.false
			expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
		})
	})

	it('Пустой пароль', () => {
		cy.login('test@test.com', null)
		cy.get('#pass').then((elements) => {
			expect(elements[0].checkValidity()).to.be.false
			expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
		})
	})

	it('Добавить новую книгу', () => {
		cy.login('test@test.com', 'test')
		cy.contains('Добро пожаловать test@test.com').should('be.visible')
		cy.get('.p-0 > .btn').click()
		cy.get('#title').type('Transhumanism Inc.')
		cy.get('#description').type('Fantastic thriller')
		cy.get('#authors').type('Viktor Pelevin')
		cy.get('form > .ml-2').click()
		cy.get('[href="book/e34dbe37-03df-4ab9-8d26-8c178d56a3e8"] > .h-100 > .card-body').should('be.visible')
	})

	it('Добавить книгу в избранное', () => {
		cy.login('test@test.com', 'test')
		cy.contains('Добро пожаловать test@test.com').should('be.visible')
		cy.get('[href="book/e34dbe37-03df-4ab9-8d26-8c178d56a3e8"] > .h-100 > .card-body').should('be.visible')
		cy.get('[href="book/e34dbe37-03df-4ab9-8d26-8c178d56a3e8"] > .h-100 > .card-footer > .btn').click()
		cy.get('[href="book/e34dbe37-03df-4ab9-8d26-8c178d56a3e8"] > .h-100 > .card-footer > .btn').contains('Delete from favorite').should('be.visible')
	})

	it('Перейти на страницу книги для скачивания', () => {
		cy.login('test@test.com', 'test')
		cy.contains('Добро пожаловать test@test.com').should('be.visible')
		cy.get('[href="book/e34dbe37-03df-4ab9-8d26-8c178d56a3e8"] > .h-100 > .card-body').click()
		cy.get('.col-md-7 > .btn').contains('Dowload book').should('be.visible')
	})
})