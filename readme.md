# Feladatok:

## main.js
0. Torolje a teljes lokali tarolo tartalmat
1. Keszitesen fuggvenyt `validatePassword(password)` neven, mely a jelszo hosszat minimum 8 karakterben hatarozza meg
2. Keszitesen fuggvenyt `validateUsername(usernam)` neven, mely a felhasznalonev hosszat minimum 3 karakterben hatarozza meg
3. Keszitsen fuggvenyt `getNextUserId()`neven melynek mukodese a kovetkezo
    * Lekeri a lokalis tarolobol a `currentUserId` kulcshoz tartozo erteket
    * Ha az ertek `null` akkor be allitja az erteket 0-ra, elenkezo esetben at alakitja szamma az erteket
    * Hozza ad egyet az aktualis ertekhez
    * Vissza tolti az erteket a lokalis taroloba a `currentUserId` kulcsra
    * Vissza adja a felhasznalo azonositot
4. Keszitsen egy adatszerkezetet mely a lokalis tarolo `users` kulcsabol szedi az ertekeit, ha a tarolo users akkor hozzon letre egy array-t
5. Keszitesen fuggvenyt `register()` neven, amely a kovetkezo keppen mukodik
    * Lekeri az email, a usernam es a password DOM-ok erteket.
    * Letrehozz egy objektumot a kovetkezo keppen:
        * id: felhasznalja a `getNextUserId()` fuggvenyt
        * email : a bekert email cimet tarolja
        * password : a bekert jelszot tarolja
        * username : a bekert felhasznalo nevet tarolja
    * Elenorzi a jelszo es a felhasznalo nev hitelesseget ha hiteles akkor hozza adja a `users` adatszerkezethez es ezt a lokalis taroloban eltarolja a `users` kulcson. Ha az adatok nem hitelesek akkor egy hiba uzenetet add vissza.
6. Kerje le a gombot majd vegezze el rajta a kovetkezo modositasokat (aszinkron megkozelites kell):
    * Az alaveto esemeny kezelo funkciojat kapcsolja ki
    * Hivja meg a `register()` fugvenyt.
    * Torolje az imput mezok tartalmat
7. Hozzon letre admin felhasznalot a kovetkezo keppen:
    * email: admin@blathy.info
    * password: Almaecet
    * A letrehozott fehasznalot a lokalis tarolo `admin` kulcsan tarolja le