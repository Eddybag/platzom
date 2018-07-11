const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function (){
	it("Si la palabra termina con 'ar', se le quitan esas dos letras.", function(){
		const translation = platzom('Programar')
		expect(translation).to.equal('Program')
	})
	it("Si la palabra inicia con 'z' se le añade 'pe' al final.", function(){
		let translation = platzom('Zorro')
		expect(translation).to.equal('Zorrope') 

		translation = platzom('Zarpar')
		expect(translation).to.equal('Zarppe')
	})
	it('Si la palabra traducida tiene mas de 10 o más letras se debe partir a la mitad y unir con un guíon.', function (){
		const translation = platzom('abecedario')
		expect(translation).to.equal('abece-dario')

	})
	it('Si la palabra original es un palíndromo. Ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas', function(){
		const translation = platzom('sometemos')
		expect(translation).to.equal('SoMeTeMoS')
	})
})