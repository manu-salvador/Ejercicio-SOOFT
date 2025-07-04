Feature: Agregar productos al carrito en Mercado Libre

  Scenario: Agregar el primer producto al carrito
    Given que estoy en la web de Mercado Libre
    When agrego el primer producto al carrito
    Then veo el producto en el carrito