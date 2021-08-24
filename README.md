# BuilderWakfu
Modifs en cours:
1) Changer l'ordre des picker page build/build
2) changer l'ordre des recherches et atributions de stats par id par stats récurrentes  
3) supprimer les actions que je n'utilise pas dans le fichier action et separer les stats et sort en plusieurs fichier Json pour limiter le nombre de passage
4) changer le fichier json de 20mo par un lien mongoDb et faire les recherche avec le trie de mongo db pour accelerer les recherches d'équipements
5) mofifier le styles de la forge et des aptitude pour que ca ressemble plus au style de la page build
6) passer les items en swipeable dans la liste de recherches droite = ajouter bas = afficher stats (sur la meme vue) gauche retourner a la vue Build
7) ajouter les familier/monture
8) ajouter les sorts (passif/actif) par classe et le calcul de dgt des sorts en fonction du lv et des stats
9) ajouter les sublimations (epique/relique/leg/myth/rare) 
10) ajouter la limitation d'objet/sublimation épique et relique par stuff
11) ajouter l'enregistrement de build
12) ajouter l'envois du stuff a la DB quand il est enregistrer ainsi que dans une bd locale
13) ajouter une modale qui affiche les stats d'un équipement choisis si on reste appuyer dessus
14) ajout d'un lien entre la recherche ciblée avec l'emplacement de build correspondant
15) ajout d'un outil de trie par statistiques dans l'outil de recherche
16) ajout d'aptitude préfaite par rapport au type de gameplay (Tank/heal/dpt) et (Dist/melee) / (zone/mono) / (pv)
17) rendre l'appli responsive par rapport a la taille de l'écran
18) faire fonctionner les fomrat webp sur le support physique
19) gerer les conditions spécifique de certains items

valeur de Transformations:

Aptitude
PV 4%/lv
Res 10/lv
Soin Recu 6%/lv
maitrise elem 5/lv
maitrise dist/melée.. 8/lv
pdv: 20/lv
....


Rune
maitrises classique       0 1 3 4 6 7 | 10 15 | 19 24 30 (alternance +2/+1 -> alternance +3/+2 -> +(x+1), x=4=>(+4,+5,+6)) ---> Logique a chier
maitrise specialisées/ini 0 2 4 6 8 10 | 14 | 20 26 32 | 40 (+2 -> +4 -> +6 ->+8)
esquive/tacle             0 3 6 9 12 15| 21 | 30 39 48 | 60 (+3 -> +6 -> +9 -> +12) 
resistances               0 2 5 7 10 13 15 17 20 22 25 (alternance +2/+3)

calcul des resistance (1 - 0.8^(resistance/100))*100
calcul des pv:        pv fixe*(1+(coef de pv)/100)

