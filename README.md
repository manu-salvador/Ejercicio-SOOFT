# Ejercicio-SOOFT
Ejercicio de SOOFT Technology

Se trabaja con POM y APIs de Mercadolibre

Una vez clonado el reporte ejecutar el comando npm -ci para una configuracion limpia.

Instalar la extension Live Server para levantar los reportes html.

Aclaracion: los casos de Login y Carrito fallan dado que no se puede loguear una cuenta al tenes un captcha el login de Mercado Libre.

Correr las pruebas con el siguiente comando: 
npm install
npx cucumber-js --require-module ts-node/register --require steps/**/*.ts --format html:reports/cucumber-report-$(Get-Date -Format "yyyyMMdd-HHmmss").html
