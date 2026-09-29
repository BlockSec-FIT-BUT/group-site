export interface Person {
    personId: string;
    name: string;
    authorAliases?: string[];
    role: string;
    bio: string;
    photo?: string;
    qualifications?: string;
    position?: string;
    affiliation?: string;
    email?: string;
    phone?: string;
    office?: string;
    researchInterests?: string[];
    identifiers?: { label: string; value: string }[];
}

// Official team and profile records; see docs/content-sources.md.
// Keep personId stable when editing a name. Alumni retain their publication links.
export const people: Person[] = [
  {
    "personId": "ivan-homoliak",
    "name": "Ivan Homoliak",
    "role": "Principal researcher",
    "bio": "Associate professor leading BlockSec@FIT. His research covers blockchain consensus, zero-knowledge cryptography, wallet security, decentralized identity, and electronic voting.",
    "qualifications": "doc. Ing., Ph.D.",
    "position": "Associate professor",
    "affiliation": "Department of Intelligent Systems, Faculty of Information Technology, Brno University of Technology",
    "email": "homoliak@fit.vut.cz",
    "phone": "+420 54114 1185",
    "office": "A223",
    "researchInterests": [
      "Security of blockchains and decentralized applications",
      "Zero-knowledge cryptography and system security",
      "Consensus protocol scalability and security",
      "Web3 authentication, wallet security, and usability",
      "Decentralized identity and privacy",
      "Blockchain-based electronic voting"
    ],
    "identifiers": [
      {
        "label": "ORCID",
        "value": "0000-0002-0790-0875"
      },
      {
        "label": "ResearcherID",
        "value": "V-7525-2019"
      },
      {
        "label": "Scopus Author ID",
        "value": "56201391100"
      }
    ]
  },
  {
    "personId": "richard-gazdik",
    "name": "Richard Gazdík",
    "role": "Member",
    "bio": "Ph.D. student working on zero-knowledge proofs, consensus protocols, and blockchain systems.",
    "qualifications": "Ing.",
    "position": "Ph.D. student",
    "affiliation": "Department of Intelligent Systems, Faculty of Information Technology, Brno University of Technology",
    "email": "igazdik@fit.vut.cz",
    "researchInterests": [
      "Zero-knowledge proofs",
      "Consensus protocols",
      "Blockchain systems"
    ],
    "identifiers": [
      {
        "label": "ORCID",
        "value": "0000-0001-7777-7537"
      }
    ]
  },
  {
    "personId": "zdenek-lapes",
    "name": "Zdeněk Lapeš",
    "role": "Member",
    "bio": "Member of BlockSec@FIT at the Faculty of Information Technology, Brno University of Technology.",
    "qualifications": "Ing.",
    "email": "ilapes@fit.vut.cz"
  },
  {
    "personId": "juraj-mariani",
    "name": "Juraj Mariani",
    "role": "Member",
    "bio": "Ph.D. student researching consensus protocols, privacy and uniqueness on blockchains, and zero-knowledge proofs.",
    "qualifications": "Ing.",
    "position": "Ph.D. student",
    "affiliation": "Department of Intelligent Systems, Faculty of Information Technology, Brno University of Technology",
    "email": "imariani@fit.vut.cz",
    "phone": "+420 54114 1344",
    "office": "A223",
    "researchInterests": [
      "Consensus protocols",
      "Privacy and uniqueness on blockchains",
      "Zero-knowledge proofs"
    ],
    "identifiers": [
      {
        "label": "ORCID",
        "value": "0009-0003-0942-0634"
      }
    ]
  },
  {
    "personId": "samuel-oleksak",
    "name": "Samuel Olekšák",
    "role": "Member",
    "bio": "Ph.D. student and co-author of SNARKlet, a system for mobile wallet synchronization using zk-SNARKs.",
    "qualifications": "Ing.",
    "position": "Ph.D. student",
    "affiliation": "Department of Intelligent Systems, Faculty of Information Technology, Brno University of Technology",
    "email": "ioleksak@fit.vut.cz",
    "phone": "+420 54114 1184",
    "office": "A221",
    "identifiers": [
      {
        "label": "ORCID",
        "value": "0009-0008-9098-6171"
      }
    ]
  },
  {
    "personId": "martin-peresini",
    "name": "Martin Perešíni",
    "role": "Member",
    "bio": "Researcher whose publications cover blockchain simulation, incentive attacks, consensus protocols, and cryptocurrency wallets.",
    "qualifications": "Ing., Ph.D.",
    "affiliation": "Department of Intelligent Systems, Faculty of Information Technology, Brno University of Technology",
    "email": "iperesini@fit.vut.cz",
    "phone": "+420 54114 1179",
    "office": "A222",
    "identifiers": [
      {
        "label": "ORCID",
        "value": "0000-0002-2875-9567"
      }
    ]
  },
  {
    "personId": "jozef-drga",
    "name": "Jozef Drga",
    "role": "Alumni",
    "bio": "Former group member and co-author of research on preventing credential misuse with blockchain-based identity management.",
    "qualifications": "Mgr.",
    "position": "External lecturer",
    "phone": "+420 54114 1183",
    "identifiers": [
      {
        "label": "ORCID",
        "value": "0000-0001-7701-5129"
      }
    ]
  },
  {
    "personId": "ivana-stancikova",
    "name": "Ivana Stančíková",
    "role": "Alumni",
    "bio": "Former group member whose publications cover blockchain voting and smart contracts for mitigating undercutting attacks.",
    "qualifications": "Ing.",
    "email": "istancikova@fit.vut.cz",
    "office": "A221",
    "identifiers": [
      {
        "label": "ORCID",
        "value": "0000-0002-0129-638X"
      }
    ]
  },
  {
    "personId": "marek-tamaskovic",
    "name": "Marek Tamaškovič",
    "role": "Alumni",
    "bio": "Former group member and co-author of PoS-CoPOR, a proof-of-stake protocol with native onion routing.",
    "qualifications": "Ing.",
    "identifiers": [
      {
        "label": "ORCID",
        "value": "0000-0002-0722-4248"
      }
    ]
  }
];
