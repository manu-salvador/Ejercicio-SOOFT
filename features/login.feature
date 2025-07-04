Feature: Login de usuario en la pagina de Mercado Libre

  Scenario: Login exitoso
    Given que estoy en la página de login
    When inicio sesión con usuario "usuario@email.com" y contraseña "tuPassword"
    Then veo mi nombre de usuario "NombreUsuario" en la página