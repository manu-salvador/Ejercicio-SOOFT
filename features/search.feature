Feature: Buscar iPhone 13 en Mercado Libre

  Scenario: Buscar exitosamente un iPhone 13
    Given que estoy en la pagina de Mercado Libre
    When busco un "iPhone 13" con almacenamiento "128GB"
    Then veo resultados de busqueda que contienen el producto

  Scenario: Buscar con error
    Given que estoy en la pagina de Mercado Libre
    When busco un "ProductoNoEncontrado"
    Then veo resultados de busqueda que no contienen el producto

  Scenario: Validar API de configuracion de Mercado Libre
    When consulto la API de configuracion
    Then encuentro correctamente los datos de sitios, monedas y países