# Klassali Terrain — installation

Appli mobile qui note le numéro de la première photo de chaque élève, fratrie ou classe pendant la prise de vue. Elle fonctionne sans réseau et ne contient aucune donnée d'élève : les noms restent dans le téléphone.

## 1. Publier l'appli sur GitHub Pages (une seule fois)

1. Créer un compte gratuit sur github.com.
2. Bouton **New repository** : nom `klassali-terrain`, visibilité **Public**, cocher **Add a README** → Create.
3. Dans le dépôt : **Add file → Upload files**. Glisser ces 5 fichiers :
   `index.html`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png` → **Commit changes**.
4. **Settings → Pages** : Source « Deploy from a branch », branche `main`, dossier `/ (root)` → **Save**.
5. Attendre 1 à 2 minutes. L'adresse est : `https://VOTRE-PSEUDO.github.io/klassali-terrain/`
6. Coller cette adresse dans Klassali : **Paramètres → Adresse de l'appli mobile**, puis **Sauvegarder Config**.

Mise à jour (nouvelle version livrée) : refaire l'étape 3 avec les nouveaux fichiers. Les téléphones affichent « Mise à jour installée » à l'ouverture suivante ; fermer et rouvrir l'appli.

## 2. Installer sur le téléphone

- **Android (Chrome)** : ouvrir l'adresse → menu ⋮ → **Ajouter à l'écran d'accueil** (ou « Installer l'application »).
- **iPhone (Safari)** : ouvrir l'adresse → bouton Partager → **Sur l'écran d'accueil**.

Ensuite l'appli s'ouvre depuis son icône, plein écran, même sans réseau.

## 3. Charger un projet

- **Photographe principal** : dans Klassali, menu **Terrain** → scanner le QR « Photographe principal » avec l'appareil photo du téléphone (il ouvre l'appli avec l'école et les classes). Puis **Exporter le fichier projet** dans Klassali, l'envoyer sur le téléphone (Drive, WhatsApp, câble) et le charger dans l'appli : ⚙ **Paramètres → Charger le fichier projet**. Les noms des élèves apparaissent.
- **2ᵉ photographe** : scanner le QR « 2ᵉ photographe ». Rien d'autre à faire : l'appli s'ouvre directement sur les photos de classe. Aucun nom d'élève n'est transmis.
- **Si le QR se lit mal** : dans Klassali, cliquer sur le QR (plein écran), ou « Copier le lien » et l'envoyer par WhatsApp : en touchant le lien, le projet se crée. On peut aussi coller le **code** (« Copier le code ») dans l'appli : écran d'accueil ou ⚙ Paramètres → « Code projet ».

## 4. Sur le terrain

- **Séance principale** ou **Rattrapage (date)** : après chaque enfant, **+ Numéro** → taper le numéro de la première photo (26 pour R62A0026) → choisir Élève, Fratrie ou Classe → Enregistrer.
  - Élève absent de la liste : **+ Nouvel élève** (classe déjà remplie) ou « Nom inconnu » pour un élève générique.
  - Fratrie : nom de la fratrie, enfants liés facultatifs.
  - L'onglet **Restants** liste les élèves sans numéro (en rattrapage : les absents et sans photo), avec un bouton « + n° ».
- **Groupes (2ᵉ photographe)** : **+ Numéro** → numéro → classe. Tout est rangé en g1.
- Toucher une série pour la modifier (changer l'élève, le numéro) ou la supprimer.

## 5. Au retour

**Exporter** → **Envoyer par e-mail** : le partage Android s'ouvre avec le fichier joint et l'objet déjà rempli (« École Jules Ferry 2026-2027 — groupes (Prénom) »). Choisir Gmail, indiquer le destinataire (l'adresse est rappelée dans le message et dans ⚙ Paramètres ; Gmail la propose dès le 2ᵉ envoi), envoyer. Deux fichiers partent : `….json` (lu par Klassali) et `….csv` (lisible dans Excel). « Télécharger » reste possible.

Noms des fichiers : `Principale_École_Année`, `Rattrapage_École_AAAA-MM-JJ`, `Groupes_École_AAAA-MM-JJ_Prénom`.

Dans Klassali : menu **Terrain → Importer le fichier du téléphone**. Le fichier est rangé dans « Fichiers reçus » et rien ne bouge tant que vous ne cliquez pas **Renommage** : à ce moment Klassali demande où sont les photos et fait la correspondance (étape suivante du développement).

## Réglages utiles (⚙)

- **Adresse e-mail de réception** : rappelée dans le message d'envoi.
- **Votre prénom** : ajouté au nom du fichier des groupes et à l'objet du message.
- **Préfixe du boîtier** (R62A) : affichage seulement, le fichier contient toujours le numéro seul.
- Plusieurs projets peuvent cohabiter sur le téléphone ; **Effacer ce projet** après export.
