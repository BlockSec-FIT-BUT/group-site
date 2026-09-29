export interface Person {
    personId: string;
    name: string;
    role: string;
    bio: string;
    photo?: string;
    website?: string;
}

// Official team and profile records; see docs/content-sources.md.
// Keep personId stable when editing a name. Alumni retain their publication links.
export const people: Person[] = [
  {
    "personId": "ivan-homoliak",
    "name": "Ivan Homoliak",
    "role": "Principal researcher",
    "bio": "Associate professor leading BlockSec@FIT. His research covers blockchain consensus, zero-knowledge cryptography, wallet security, decentralized identity, and electronic voting.",
    "website": "https://www.fit.vut.cz/person/110908/.en"
  },
  {
    "personId": "richard-gazdik",
    "name": "Richard Gazdík",
    "role": "Member",
    "bio": "Ph.D. student working on zero-knowledge proofs, consensus protocols, and blockchain systems.",
    "website": "https://www.fit.vut.cz/person/251519/.en"
  },
  {
    "personId": "zdenek-lapes",
    "name": "Zdeněk Lapeš",
    "role": "Member",
    "bio": "Member of BlockSec@FIT at the Faculty of Information Technology, Brno University of Technology.",
    "website": "https://www.fit.vut.cz/person/230614/.en"
  },
  {
    "personId": "juraj-mariani",
    "name": "Juraj Mariani",
    "role": "Member",
    "bio": "Ph.D. student researching consensus protocols, privacy and uniqueness on blockchains, and zero-knowledge proofs.",
    "website": "https://www.fit.vut.cz/person/231638/.en"
  },
  {
    "personId": "samuel-oleksak",
    "name": "Samuel Olekšák",
    "role": "Member",
    "bio": "Ph.D. student and co-author of SNARKlet, a system for mobile wallet synchronization using zk-SNARKs.",
    "website": "https://www.fit.vut.cz/person/221787/.en"
  },
  {
    "personId": "martin-peresini",
    "name": "Martin Perešíni",
    "role": "Member",
    "bio": "Researcher whose publications cover blockchain simulation, incentive attacks, consensus protocols, and cryptocurrency wallets.",
    "website": "https://www.fit.vut.cz/person/175200/.en"
  },
  {
    "personId": "jozef-drga",
    "name": "Jozef Drga",
    "role": "Alumni",
    "bio": "Former group member and co-author of research on preventing credential misuse with blockchain-based identity management.",
    "website": "https://www.fit.vut.cz/person/233809/.en"
  },
  {
    "personId": "ivana-stancikova",
    "name": "Ivana Stančíková",
    "role": "Alumni",
    "bio": "Former group member whose publications cover blockchain voting and smart contracts for mitigating undercutting attacks.",
    "website": "https://www.fit.vut.cz/person/186193/.en"
  },
  {
    "personId": "marek-tamaskovic",
    "name": "Marek Tamaškovič",
    "role": "Alumni",
    "bio": "Former group member and co-author of PoS-CoPOR, a proof-of-stake protocol with native onion routing.",
    "website": "https://www.fit.vut.cz/person/187380/.en"
  }
];
