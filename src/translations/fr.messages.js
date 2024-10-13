export const fr = {
  application: {
    name: 'KnT Manager',
    calendars: {
      title: 'Calendrier',
      union: "Calendrier de l'Union",
      beranese: 'Calendrier friggeois (variante Bëranoise)',
      ovik: 'Calendrier friggeois (variante Övik)',
      methian: 'Calendrier Méthian',
      aslimani: 'Calendrier Aslimani',
      beginning: 'Calendrier du Commencement',
      zigate: 'Calendrier Zigate',
    },
    search: {
      title: 'Recherche',
      placeholder: 'Rechercher...',
    },
    actions: {
      consult: 'Consulter',
      compute: 'Calculer',
      deselectAll: 'Tout désélectionner',
      search: 'Rechercher'
    },
    units: {
      ubert: {
        full: 'Übert',
        short: 'U', // Official units may not contain accents (for internationalisation reasons)
      },
      centimetres: {
        full: 'centimètres',
        short: 'cm'
      }
    },
  },
  navigation: {
    quickLinks: 'Navigation',
    dashboard: 'Dashboard',
    characters: 'Personnages',
    events: 'Événements',
    magics: 'Magies',
    nations: 'Nations',
    mpc: 'Calculateur de puissance magique',
    magicalClasses: 'Classes',
    elements: 'Éléments',
    nationLeaders: 'Dirigeants',
    instinctMagicUsers: 'Utilisateurs par instinct',
    learntMagicUsers: 'Utilisateurs par apprentissage',
    backTo: {
      dashboard: 'Retour au Dashboard',
      characters: 'Liste des personnages',
      magics: 'Liste des magies',
      nations: 'Liste des nations',
      simpleSearch: 'Recherche simple'
    },
  },
  pages: {
    home: {
      title: "Explorer l'univers de Kamigami no Tanjou",
      characters: {
        title: 'Personnages',
        description: 'Voir les infos sur les personnages',
      },
      events: {
        title: 'Événements',
        description:
          'Voir les informations sur les événements à une période donnée',
      },
      magics: {
        title: 'Magies',
        description: 'Voir les infos sur les magies répertoriées',
      },
      nations: {
        title: 'Nations',
        description: 'Voir les infos sur les pays du monde, qu\'ils appartiennent au passé, au présent ou au futur',
      },
      magicalClasses: {
        title: 'Classes',
        description: 'Voir les infos sur les classes de magie',
      },
      mpc: {
        title: 'MPC',
        description: 'Calculer la puissance effective d\'un personnage à un certain âge',
      },
      elements: {
        title: 'Éléments',
        description: 'Voir les infos sur les éléments magiques',
      },
      nationLeaders: {
        title: 'Dirigeants',
        description: 'Voir les infos sur les dirigeants des différentes nations',
      },
    },
    charactersList: {
      title: 'Liste des personnages',
      charactersTable: {
        name: 'Nom',
        potential: 'Potentiel',
        firstMagic: 'Première magie',
        secondMagic: 'Seconde magie',
        origin: "Pays d'origine",
        empty: "Aucun personnage n'a été trouvé",
      },
      magics: 'Magie(s) :',
    },
    characterDetails: {
      toEvents: 'Vers événements',
      tabs: {
        general: 'Informations générales',
        familyTree: 'Arbre généalogique',
        relationships: 'Relations',
      },
      noPortrait: 'Pas encore de portrait pour ce personnage...',
      lastNames: 'Nom(s)',
      firstNames: 'Prénom(s)',
      magicalClass: 'Classe',
      unknownClass: 'Inconnue',
      origin: "Pays d'origine",
      birthdate: 'Date de naissance',
      deathdate: 'Date de mort',
      stillAlive: 'Toujours vivant(e)',
      physicalTraits: 'Caractéristiques physiques',
      sex: 'Sexe',
      height: 'Taille',
      hairColour: 'Couleur des cheveux',
      eyeColour: 'Couleur des yeux',
      furtherDetails: 'Autres détails',
      extraInformations: 'Infos pratiques',
      calendar: 'Calendrier',
      magicalPotential: 'Potentiel magique',
      magics: 'Magies pratiquées',
      magicsTable: {
        name: 'Nom',
        elements: 'Éléments',
        description: 'Description',
        rank: 'Rang',
        power: 'Puissance',
        empty: "Aucune magie n'a été trouvée",
      },
      personality: 'Personnalité',
      nature: 'Caractère',
      gender: 'Genre',
      sexualOrientation: 'Orientation sexuelle',
      favouriteColour: 'Couleur préférée',
      tastes: 'Goûts',
      likes: 'Aime',
      dislikes: "N'aime pas",
      familyTree: 'Arbre généalogique de',
      relationships: 'Relations avec les autres personnages',
      relationCard: {
        tabs: {
          general: 'Généralités',
          story: 'Histoire',
        },
        appreciation: 'Appréciation',
        is: 'est',
        of: 'de',
      },
    },
    magicalClasses: {
      title: 'Personnages par classe',
      charactersTable: {
        name: 'Nom',
        firstMagic: 'Première magie',
        secondMagic: 'Seconde magie',
        origin: "Pays d'origine",
        empty: "Aucun personnage n'a été trouvé pour cette classe",
      },
      magics: 'Magie(s) :',
    },
    elements: {
      title: 'Magies par élément',
      subtitle: "Magies de l'élément",
      magicsTable: {
        name: 'Nom',
        elements: 'Éléments',
        users: 'Utilisateurs',
        description: 'Description',
        empty: "Aucune magie n'a été trouvée pour cet élément",
      },
    },
    eventsList: {
      tabs: {
        title: 'Événements',
        period: {
          title: 'Liste des événements par période',
          name: 'Par période',
          from: 'Du',
          to: 'au',
          fromPlaceholder: '-9999-01-01',
          toPlaceholder: '9999-12-31',
          results: 'Résultats de la recherche',
          incorrectDate:
            "Une des dates données n'a pas pu être traitée. Vérifiez que vous avez entré une valeur correcte.",
        },
        character: {
          title: 'Liste des personnages avec des événements attachés',
          name: 'Par personnage',
          charactersTable: {
            name: 'Nom',
            birthdate: 'Naissance',
            magicalPotential: 'Potentiel',
            firstMagic: 'Première magie',
            secondMagic: 'Seconde magie',
            deathdate: 'Décès',
            empty: "Aucun personnage avec des événements n'a été trouvé",
          },
        },
      },
    },
    characterEvents: {
      title: 'Événements pour',
      addCharacter: 'Personnage',
      addCharacterModal: {
        title: 'Ajouter un personnage',
        character: 'Personnage',
        add: 'Ajouter',
      },
    },
    nationLeaders: {
      title: 'Liste des dirigeants',
      charactersTable: {
        name: 'Nom',
        birthdate: 'Date de naissance',
        deathdate: 'Date de mort',
        leadStartDate: 'Début du règne',
        leadEndDate: 'Fin du règne',
        leadLength: 'Durée du règne',
        origin: 'Origine',
        nationLed: 'Pays dirigé',
        empty: "Aucun dirigeant n'a été trouvé",
      },
      leadersCount: 'Total :',
      charactersCard: {
        magics: 'Magie(s) :',
      },
    },
    mpc: {
      title: 'MagicalPowerCalculator',
      subtitle: 'Calculateur de puissance magique',
      heavyVersion: 'Version lourde',
      input: 'Données',
      tabs: {
        free: {
          title: 'Libre',
          magicalPotential: 'Potentiel magique',
          age: 'Âge',
        },
        character: {
          title: 'Par personnage',
          incorrectCharacter:
            'Impossible de trouver le personnage demandé, veuillez réessayer avec un autre personnage de la liste.',
          noMagicalPotential:
            'Pas de données sur le potentiel magique de ce personnage, calcul impossible...',
        },
      },
      results: 'Résultats',
      first: '1ère',
      second: '2ème',
      third: '3ème',
      nth: 'ème',
    },
    magicsList: {
      title: 'Liste des magies',
      magicsTable: {
        name: 'Nom',
        elements: 'Éléments',
        description: 'Description',
        empty: "Aucune magie n'a été trouvée",
      },
    },
    magicDetails: {
      description: 'Description',
      users: 'utilisateur(s)',
      byInstinct: 'par instinct',
      byLearning: 'par apprentissage',
      charactersTable: {
        name: 'Nom',
        magicalPotential: 'Potentiel',
        firstMagic: 'Première magie',
        secondMagic: 'Seconde magie',
        origin: "Pays d'origine",
        empty: "Aucun personnage n'a été trouvé pour cette magie",
      },
    },
    instinctMagicUsers: {
      title: 'Liste des utilisateurs par instinct',
    },
    learntMagicUsers: {
      title: 'Liste des utilisateurs par apprentissage',
    },
    mapDetails: {
      toFullSizeImage: 'Image seule',
      establishment: "Prise d'effet",
      expiry: 'Expiration',
      on: 'Le',
    },
    nationsList: {
      title: 'Liste des nations du monde',
      nationsTable: {
        name: 'Nom',
        foundationDate: 'Avènement',
        destructionDate: 'Terme',
        description: 'Description',
        empty: "Aucune nation n'a été trouvée",
        total: 'Total :',
      },
    },
    nationDetails: {
      tabs: {
        general: {
          name: 'Informations générales',
          foundation: 'Avènement',
          destruction: 'Terme',
          stillExisting: 'Toujours existant',
          description: 'Description',
          noDescription: 'Pas encore de description pour ce pays...',
          leaders: 'Liste des dirigeants',
          leadersTable: {
            name: 'Nom',
            birthdate: 'Date de naissance',
            deathdate: 'Date de mort',
            leadStartDate: 'Début du règne',
            leadEndDate: 'Fin du règne',
            origin: "Pays d'origine",
            empty: "Aucun dirigeant n'a été trouvé pour ce pays",
          },
        },
        characters: {
          name: 'Personnages',
          title: 'Liste des personnages de la nation',
          charactersTable: {
            name: 'Nom',
            birthdate: 'Naissance',
            magicalPotential: 'Potentiel',
            firstMagic: 'Première magie',
            secondMagic: 'Seconde magie',
            deathdate: 'Décès',
            empty: "Aucun personnage n'a été trouvé pour ce pays",
            total: 'Total :',
          },
        },
        maps: {
          name: 'Cartes',
          title: 'Cartes',
          quickAccess: 'Accès rapide',
          none: 'Pas encore de carte pour ce pays',
          validFrom: 'Valable du',
          validTo: 'au',
          validSince: 'Valable depuis le',
          validUntil: "Valable jusqu'au",
        },
      },
    },
  },
  errorPages: {
    400: {
      title: 'Erreur 400 😢',
      description:
        "Nous n'avons pas réussi à traiter les données que vous nous avez transmises. Vérifiez que ce que vous avez entré est correct et réessayez.",
      issuePart1:
        'Si vous êtes certain.e que vos données sont correctes, veuillez ',
      issuePart2: " en l'illustrant de votre exemple.",
      submitIssue: 'créer un ticket',
      more: 'En savoir plus',
    },
    404: {
      title: 'Erreur 404 😢',
      description:
        "Nous n'avons pas réussi à trouver la ou les ressources que vous cherchez. Peut-être vous a-t-on fourni un lien mort. Si tel est le cas, essayez de passer par la recherche pour trouver le contenu souhaité.",
      more: 'En savoir plus',
    },
  },
  browsing: {
    toAdvancedSearch: 'Recherche avancée',
    placeholder: 'Rechercher',
    results: 'Résultats',
    noResults: 'Aucun résultat ne correspond à votre recherche...',
    globalSearch: {
      name: 'Recherche globale',
      searchResults: 'Résultats de la recherche',
      characters: 'Personnages',
      magics: 'Magies',
      maps: 'Cartes',
      nations: 'Nations',
      nationLeaders: 'Dirigeants',
    },
    advancedSearch: {
      title: 'Recherche avancée',
      refine: 'Affiner la recherche',
      characters: 'Rechercher parmi les personnages',
      magics: 'Rechercher parmi les magies',
      maps: 'Rechercher parmi les cartes',
      nations: 'Rechercher parmi les nations',
      charactersFilters: 'Filtres pour les personnages',
      magicsFilters: 'Filtres pour les magies',
      mapsFilters: 'Filtres pour les cartes',
      nationsFilters: 'Filtres pour les nations',
      applyFilters: 'Appliquer les filtres'
    },
    characterSearch: {
      name: 'Personnages',
      filters: {
        portrait: 'Filtrer sur le portrait',
        withPortrait: 'A un portrait',
        withoutPortrait: "N'a pas de portrait",
        calendar: 'Filtrer sur le calendrier',
        livingBetween: 'Vivant entre',
        magicalPotentialBetween: 'Potentiel entre',
        heightBetween: 'Taille entre',
        and: 'et',
        magicalClass: 'Filtrer sur la classe',
        sex: 'Filtrer sur le sexe',
        gender: 'Filtrer sur le genre',
        nationality: 'Filtrer sur la nationalité',
        magics: 'Filtrer sur les magies',
        nationsLed: 'Filtrer sur les nations dirigées',
        relationships: 'Filtrer sur les relations',
        knows: 'Connaît',
        appreciates: 'Apprécie',
        dislikes: 'N\'apprécie pas',
      },
    },
    magicsSearch: {
      name: 'Magies',
      filters: {
        element: 'Filtrer sur l\'élément'
      }
    },
    mapsSearch: {
      name: 'Cartes',
      filters: {
        nation: 'Filtrer sur la nation'
      }
    },
    nationsSearch: {
      name: 'Nations',
      filters: {
        existingBetween: 'Existant entre',
        and: 'et',
        calendar: 'Filtrer sur le calendrier'
      }
    },
  },
  sharedComponents: {
    eventsTable: {
      beginning: 'Début',
      ending: 'Fin',
      events: 'Événements',
      emptyForCharacter: "Aucun événement n'a été trouvé pour ce personnage",
      emptyForPeriod: "Aucun événement n'a été trouvé à cette période",
    },
    eventCard: {
      tabs: {
        description: 'Description',
        details: 'Détails',
      },
      linkedTo: 'Lié à',
      otherCharacters: 'Autres personnages',
      yearsOld: 'ans',
      notBornYet: 'pas encore né.e',
    },
    magicUsersTable: {
      name: 'Nom',
      magicalPotential: 'Potentiel',
      firstMagic: 'Première magie',
      secondMagic: 'Seconde magie',
      origin: "Pays d'origine",
      empty: "Aucun personnage n'a été trouvé pour cette magie",
      total: 'Total :',
    },
  },
}
