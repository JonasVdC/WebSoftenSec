# WebSoftenSec
Software en security augustus


# Waar te vinden
Het project is te vinden op de openbare link jonasvdc.info

# Voldane vereisten

## HTTPS
HTTP Requests worden geredirect met code 301 naar HTTPS.
Het domein heeft een A score op de SSL Labs Server Test.
Ieder respons bevat een STSH.
Er zijn CAA DNS records aanwezig.

## OpenID Connect en OAuth2

Gebruikers kunnen zich inloggen met zowel eigen gegevens als google.
10000 Meest common passwords kunnen niet gebruikt worden en paswoorden tot up to 99 characters zijn getest.
Email moet geverifieerd worden vooraleer een user in kan loggen.
Een gebruiker krijgt steeds een log out button te zien wanneer hij/zij ingelogd is en een login button wanneer dit niet het geval is.
Een user kan steeds zijn gegevens inder profile terugvinden wanneer hij/zij ingelogd is.
Na 10 mislukte inlogpogingen wordt het account geblokkeerd en zal er een unlock mail naar de eigenaar van de account gestuurd worden.

## REST API

Backend opgezet maar werkt niet in productie, was enkel een fetch voor een korte message.
