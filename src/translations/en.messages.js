export const en = {
  application: {
    name: 'KnT Manager',
    calendars: {
      title: 'Calendar',
      union: "Union calendar",
      beranese: 'Friggeous calendar (Bëranese variant)',
      ovik: 'Friggeous calendar (Övik variant)',
      methian: 'Methian calendar',
      aslimani: 'Aslimani calendar',
      beginning: 'Calendar of the Beginning',
      zigate: 'Zigate calendar',
    },
    search: {
      title: 'Browse',
      placeholder: 'Search...',
    },
    actions: {
      consult: 'View',
      compute: 'Compute',
      deselectAll: 'Deselect all',
      search: 'Search'
    },
    units: {
      ubert: {
        full: 'Übert',
        short: 'U', // Official units may not contain accents (for internationalisation reasons)
      },
      centimetres: {
        full: 'centimetres',
        short: 'cm'
      }
    },
  },
  navigation: {
    quickLinks: 'Navigation',
    dashboard: 'Dashboard',
    characters: 'Characters',
    events: 'Events',
    magics: 'Magics',
    nations: 'Nations',
    mpc: 'Magical Power Calculator',
    magicalClasses: 'Classes',
    elements: 'Elements',
    nationLeaders: 'Nation leaders',
    instinctMagicUsers: 'Instinct users',
    learntMagicUsers: 'Learning users',
    backTo: {
      dashboard: 'Back to the Dashboard',
      characters: 'Characters list',
      magics: 'Magics list',
      nations: 'Nations list',
      simpleSearch: 'Simple search'
    },
  },
  pages: {
    home: {
      title: "Explore the universe of Kamigami no Tanjou",
      characters: {
        title: 'Characters',
        description: 'See more informations about the characters',
      },
      events: {
        title: 'Events',
        description:
          'See more informations about the events at a given period',
      },
      magics: {
        title: 'Magics',
        description: 'See more informations about magics',
      },
      nations: {
        title: 'Nations',
        description: 'See more informations about the world\'s nations, whether they belong to the past, the present, or the future',
      },
      magicalClasses: {
        title: 'Classes',
        description: 'See more informations about the magical classes',
      },
      mpc: {
        title: 'MPC',
        description: 'Compute the actual magical power of a character at a given age',
      },
      elements: {
        title: 'Elements',
        description: 'See more informations about magical elements',
      },
      nationLeaders: {
        title: 'Nation leaders',
        description: 'See more informations about the leaders of many nations',
      },
    },
    charactersList: {
      title: 'Characters list',
      charactersTable: {
        name: 'Name',
        potential: 'Potential',
        firstMagic: 'First magic',
        secondMagic: 'Second magic',
        origin: "Country of origin",
        empty: "No character found",
      },
      magics: 'Magic(s):',
    },
    characterDetails: {
      toEvents: 'To events',
      tabs: {
        general: 'Global informations',
        familyTree: 'Family tree',
        relationships: 'Relationships',
      },
      noPortrait: 'No portrait yet for this character...',
      lastNames: 'Last name(s)',
      firstNames: 'First name(s)',
      magicalClass: 'Class',
      unknownClass: 'Unknown',
      origin: "Country of origin",
      birthdate: 'Birthdate',
      deathdate: 'Death date',
      stillAlive: 'Still living',
      physicalTraits: 'Physical traits',
      sex: 'Sex',
      height: 'Height',
      hairColour: 'Hair colour',
      eyeColour: 'Eye colour',
      furtherDetails: 'Further details',
      extraInformations: 'Extra informations',
      calendar: 'Calendar',
      magicalPotential: 'Magical potential',
      magics: 'Used magics',
      magicsTable: {
        name: 'Name',
        elements: 'Elements',
        description: 'Description',
        rank: 'Rank',
        power: 'Power',
        empty: "No magic found",
      },
      personality: 'Personality',
      nature: 'Nature',
      gender: 'Gender',
      sexualOrientation: 'Sexual orientation',
      favouriteColour: 'Favourite colour',
      tastes: 'Tastes',
      likes: 'Likes',
      dislikes: "Dislikes",
      familyTree: 'Family tree of',
      relationships: 'Relationships towards other characters',
      relationCard: {
        tabs: {
          general: 'General',
          story: 'History',
        },
        appreciation: 'Appreciation',
        is: 'is',
        of: 'of',
      },
    },
    magicalClasses: {
      title: 'Characters per class',
      charactersTable: {
        name: 'Name',
        firstMagic: 'First magic',
        secondMagic: 'Second magic',
        origin: "Country of origin",
        empty: "No character found for this class",
      },
      magics: 'Magic(s):',
    },
    elements: {
      title: 'Magics per element',
      subtitle: "Element's magics",
      magicsTable: {
        name: 'Name',
        elements: 'Elements',
        users: 'Users',
        description: 'Description',
        empty: "No magic found for this element",
      },
    },
    eventsList: {
      tabs: {
        title: 'Events',
        period: {
          title: 'List of event per period',
          name: 'Per period',
          from: 'From',
          to: 'to',
          fromPlaceholder: '-9999-01-01',
          toPlaceholder: '9999-12-31',
          results: 'Search results',
          incorrectDate:
            "One of the dates could not be processed. Please, check its correctness.",
        },
        character: {
          title: 'List of characters with events attached to them',
          name: 'Per character',
          charactersTable: {
            name: 'Name',
            birthdate: 'Birthdate',
            magicalPotential: 'Potential',
            firstMagic: 'First magic',
            secondMagic: 'Second magic',
            deathdate: 'Death date',
            empty: "No character with events found",
          },
        },
      },
    },
    characterEvents: {
      title: 'Events for',
      addCharacter: 'Character',
      addCharacterModal: {
        title: 'Add a character',
        character: 'Character',
        add: 'Add',
      },
    },
    nationLeaders: {
      title: 'Nation leaders list',
      charactersTable: {
        name: 'Name',
        birthdate: 'Birthdate',
        deathdate: 'Death date',
        leadStartDate: 'Reign start',
        leadEndDate: 'Reign end',
        leadLength: 'Reign duration',
        origin: 'Country of origin',
        nationLed: 'Nation led',
        empty: "No nation leader found",
      },
      leadersCount: 'Total:',
      charactersCard: {
        magics: 'Magic(s):',
      },
    },
    mpc: {
      title: 'MagicalPowerCalculator',
      subtitle: '',
      heavyVersion: 'Heavy version',
      input: 'Input',
      tabs: {
        free: {
          title: 'Free',
          magicalPotential: 'Magical potential',
          age: 'Age',
        },
        character: {
          title: 'For character',
          incorrectCharacter:
            'Could not find the character searched for. Please, retry with another character in the list.',
          noMagicalPotential:
            'No data available on the character\'s magical potential, could not compute any result...',
        },
      },
      results: 'Results',
      first: '1st',
      second: '2nd',
      third: '3rd',
      nth: 'th',
    },
    magicsList: {
      title: 'Magics list',
      magicsTable: {
        name: 'Name',
        elements: 'Elements',
        description: 'Description',
        empty: "No magic found",
      },
    },
    magicDetails: {
      description: 'Description',
      users: 'user(s)',
      byInstinct: 'by instinct',
      byLearning: 'by learning',
      charactersTable: {
        name: 'Name',
        magicalPotential: 'Potential',
        firstMagic: 'First magic',
        secondMagic: 'Second magic',
        origin: "Country of origin",
        empty: "No character found for this magic",
      },
    },
    instinctMagicUsers: {
      title: 'Instinct users list',
    },
    learntMagicUsers: {
      title: 'Learning users list',
    },
    mapDetails: {
      toFullSizeImage: 'Full size image',
      establishment: "Establishment",
      expiry: 'Expiry',
      on: 'On',
    },
    nationsList: {
      title: 'World\'s nations list',
      nationsTable: {
        name: 'Name',
        foundationDate: 'Foundation',
        destructionDate: 'Term',
        description: 'Description',
        empty: "No nation found",
        total: 'Total:',
      },
    },
    nationDetails: {
      tabs: {
        general: {
          name: 'General informations',
          foundation: 'Foundation',
          destruction: 'Term',
          stillExisting: 'Still existing',
          description: 'Description',
          noDescription: 'No description for this country yet...',
          leaders: 'Leaders list',
          leadersTable: {
            name: 'Name',
            birthdate: 'Birthdate',
            deathdate: 'Death date',
            leadStartDate: 'Reign start',
            leadEndDate: 'Reign end',
            origin: "Country of origin",
            empty: 'No leaders found for this nation',
          },
        },
        characters: {
          name: 'Characters',
          title: 'Nation\'s characters list',
          charactersTable: {
            name: 'Name',
            birthdate: 'Birthdate',
            magicalPotential: 'Potential',
            firstMagic: 'First magic',
            secondMagic: 'Second magic',
            deathdate: 'Death date',
            empty: "No characters found for this nation",
            total: 'Total:',
          },
        },
        maps: {
          name: 'Maps',
          title: 'Maps',
          quickAccess: 'Quick access',
          none: 'No maps for this country yet',
          validFrom: 'Valid from',
          validTo: 'to',
          validSince: 'Valid since the',
          validUntil: "Valid until the",
        },
      },
    },
  },
  errorPages: {
    400: {
      title: '400 error 😢',
      description:
        "We couldn't process the data you gave us. Please, check your input is correct and retry.",
      issuePart1:
        'If you are certain your input is correct, please ',
      issuePart2: " and illustrate it with your example",
      submitIssue: 'create an issue',
      more: 'Learn more',
    },
    404: {
      title: '404 error 😢',
      description:
        "We couldn't find the research you are looking for. Maybe someone gave you a broken link. If it is the case, please try to find what you are looking for using the research function.",
      more: 'Learn more',
    },
  },
  browsing: {
    toAdvancedSearch: 'Advanced research',
    placeholder: 'Search',
    results: 'Results',
    noResults: 'No matching results...',
    globalSearch: {
      name: 'Global search',
      searchResults: 'Search results',
      characters: 'Characters',
      magics: 'Magics',
      maps: 'Maps',
      nations: 'Nations',
      nationLeaders: 'Nation leaders',
    },
    advancedSearch: {
      title: 'Advanced research',
      refine: 'Refine with filters',
      characters: 'Search among characters',
      magics: 'Search among magics',
      maps: 'Search among maps',
      nations: 'Search among nations',
      charactersFilters: 'Characters filters',
      magicsFilters: 'Magics filters',
      mapsFilters: 'Maps filters',
      nationsFilters: 'Nations filters',
      applyFilters: 'Apply filters'
    },
    characterSearch: {
      name: 'Characters',
      filters: {
        portrait: 'Filter on portrait',
        withPortrait: 'Has a portrait',
        withoutPortrait: "Doesn't have a portrait",
        calendar: 'Filter on calendar',
        livingBetween: 'Living between',
        magicalPotentialBetween: 'Potential between',
        heightBetween: 'Height between',
        and: 'and',
        magicalClass: 'Filter on class',
        sex: 'Filter on sex',
        gender: 'Filter on gender',
        nationality: 'Filter on nationality',
        magics: 'Filter on magics',
        nationsLed: 'Filter on nations led',
        relationships: 'Filter on relationships',
        knows: 'Knows',
        appreciates: 'Likes',
        dislikes: 'Dislikes',
      },
    },
    magicsSearch: {
      name: 'Magics',
      filters: {
        element: 'Filter on element'
      }
    },
    mapsSearch: {
      name: 'Maps',
      filters: {
        nation: 'Filter on nation'
      }
    },
    nationsSearch: {
      name: 'Nations',
      filters: {
        existingBetween: 'Existing between',
        and: 'and',
        calendar: 'Filter on calendar',
      }
    },
  },
  sharedComponents: {
    eventsTable: {
      beginning: 'Beginning',
      ending: 'Ending',
      events: 'Events',
      emptyForCharacter: "No events found for this character",
      emptyForPeriod: "No events found during this period",
    },
    eventCard: {
      tabs: {
        description: 'Description',
        details: 'Details',
      },
      linkedTo: 'Linked to',
      otherCharacters: 'Other characters',
      yearsOld: 'years old',
      notBornYet: 'not born yet',
    },
    magicUsersTable: {
      name: 'Name',
      magicalPotential: 'Potential',
      firstMagic: 'First magic',
      secondMagic: 'Second magic',
      origin: "Country of origin",
      empty: "No characters found for this magic",
      total: 'Total:',
    },
  },
}
