Feature('login');

Scenario('Login com sucesso',  ({ I }) => {

        I.amOnPage('http://automationpratice.com.br/')
        I.click('Login')
        I.fillField('#user','rluanafreitas@gmail.com')
        I.fillField('#password','123456')
        I.click('#btnLogin')
        I.waitForText('Login realizado',6) //aguardar 6 segundos para carregar a página e validar o teste

}).tag('@sucesso')

Scenario('Tentando logar apenas com o email',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.fillField('#user','rluanafreitas@gmail.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida',6) //aguardar 6 segundos para carregar a página e validar o teste

})

Scenario('Tentando logar sem email e senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido',6) //aguardar 6 segundos para carregar a página e validar o teste
})

Scenario('Tentando logar apenas com a senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.fillField('#password','123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido',6) //aguardar 6 segundos para carregar a página e validar o teste
})