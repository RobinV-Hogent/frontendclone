# Robin-Quizzes

## Applicatie opstarten
- Als je het project van GitHub gehaald hebt doe dan eerst een `yarn install` in de terminal zodat alles wat nodig is geïnstalleerd wordt.

- Doe `yarn start` om de applicatie op te starten.


## Hoe Cypress testen uitvoeren?
- Zorg ervoor dat de backend aan staat
- Zorg ervoor dat je frontend aan staat
- Open een nieuwe terminal en doe het volgende commando: `yarn run cypress open`
- Normaal zou er nu een schermpje zijn, scroll naar beneden en klik op 'Testen.spec.js'

## Hoe gebruik je de app?
### Inloggen

![inloggen](readmeimg/Inloggen.png)

- Je kan inloggen door een nieuw account aan te maken door op register te klikken in de navbar, dit zal een user account maken

- Als je admin rechten wilt dan logt u in met (Deze credentials werken online en lokaal)
    - email: adminAccount@mail.com
    - password: $minad25


### Een quiz kiezen

![](readmeimg/quiz_Kiezen.png)

- Als je aangemeld bent dan zie je verschillende lijsten met quizzen in.
- Kies een quiz en druk op 'Play Quiz'.


### Een quiz spelen

![](readmeimg/quiz_spelen.png)

- Antwoord vervolgens op de drie vragen.
- Klik op het einde van de quiz op 'Save Score'.

![](readmeimg/eindeQuiz.png)



### Score verwijderen

![](readmeimg/scores.png)

- Doe de stappen van 'een quiz kiezen'
- Scroll dan vervolgens naar onder, daar zie je een lijst van al je scores
- Druk dan op het vuilbakje


### Verwijderen van een quiz

![](readmeimg/deletequiz.png)
![](readmeimg/deleteknopquiz.png)

- Je moet aangemeld zijn als admin
- Doe de stappen van 'een quiz kiezen'
- Druk op het vuilbakje helemaal rechts vanonder'
- Klik nog eens 'Delete Quiz'
- De quiz zal verwijderd zijn


### Verwijderen van een score van een andere speler

![](readmeimg/allescores.png)

- Je moet aangemeld zijn als admin.
- Klik list -> scores list in de navbar.
- Klik op het vuilbakje van de score dat je wilt verwijderen.


### Bekijken van alle categorieen

![](readmeimg/allecats.png)

- Je moet aangemeld zijn als admin.
- Klik list -> category list in de navbar.


### Bekijken van alle quizzen

![](readmeimg/allequizzen.png)

- Je moet aangemeld zijn als admin.
- Klik list -> quiz list in de navbar.


### Aanpassen van een quiz

![](readmeimg/deleteknopquiz.png)
![](readmeimg/updatequiz.png)


- Je moet aangemeld zijn als admin.
- Doe de stappen van 'een quiz kiezen'
- Klik op het tandwieltje
- Vul de data in
- Klik 'Update Quiz'
