export interface PublicationAuthor {
  name: string;
  personId?: string;
}

export interface Publication {
  publicationId: string;
  title: string;
  authors: PublicationAuthor[];
  venue: string;
  year: number;
  url?: string;
}

// All 27 records from the official group publication list.
// Author corrections and primary sources are recorded in docs/content-sources.md.
// Omit personId for authors who are not on the official group team page.
export const publications: Publication[] = [
  {
    "publicationId": "fit-c199851",
    "title": "Analysing Multidisciplinary Approaches to Fight Large-Scale Digital Influence Operations",
    "authors": [
      {
        "name": "D. Arroyo Guardeño"
      },
      {
        "name": "R. Mata Milla"
      },
      {
        "name": "M. Almeida Ros"
      },
      {
        "name": "N. Lykousas"
      },
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      },
      {
        "name": "C. Patsakis"
      },
      {
        "name": "F. Casino"
      }
    ],
    "venue": "Proceedings of the 12th International Conference on Information Systems Security and Privacy - Volume 1: ICISSP",
    "year": 2026,
    "url": "https://www.fit.vut.cz/research/result/c199851/.en"
  },
  {
    "publicationId": "fit-c212092",
    "title": "Lecture Notes for the Course: Blockchains and Decentralized Applications",
    "authors": [
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      }
    ],
    "venue": "Brno University of Technology, Faculty of Information Technology",
    "year": 2026,
    "url": "https://www.fit.vut.cz/research/result/c212092/.en"
  },
  {
    "publicationId": "fit-c211657",
    "title": "Selfish Mining in Multi-attacker Scenarios: An Empirical Evaluation of Nakamoto, Fruitchain, and Strongchain",
    "authors": [
      {
        "name": "Martin Perešíni",
        "personId": "martin-peresini"
      },
      {
        "name": "Tomáš Hladký"
      },
      {
        "name": "Jakub Kubík"
      },
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      }
    ],
    "venue": "Computer Security. ESORICS 2025 International Workshops",
    "year": 2026,
    "url": "https://www.fit.vut.cz/research/result/c211657/.en"
  },
  {
    "publicationId": "fit-c211660",
    "title": "PoS-CoPOR: Proof-of-Stake Consensus Protocol with Native Onion Routing Providing Scalability and DoS-Resistance",
    "authors": [
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      },
      {
        "name": "Martin Perešíni",
        "personId": "martin-peresini"
      },
      {
        "name": "Marek Tamaškovič",
        "personId": "marek-tamaskovic"
      },
      {
        "name": "Timotej Ponek"
      },
      {
        "name": "Lukáš Hellebrandt"
      },
      {
        "name": "Kamil Malinka"
      }
    ],
    "venue": "2025 7th Conference on Blockchain Research & Applications for Innovative Networks and Services (BRAINS)",
    "year": 2025,
    "url": "https://www.fit.vut.cz/research/result/c211660/.en"
  },
  {
    "publicationId": "fit-c201371",
    "title": "SNARKlet: Efficient Mobile Wallet Synchronization with zk-SNARKs",
    "authors": [
      {
        "name": "Martin Perešíni",
        "personId": "martin-peresini"
      },
      {
        "name": "Samuel Olekšák",
        "personId": "samuel-oleksak"
      },
      {
        "name": "Samuel Slávka"
      },
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      }
    ],
    "venue": "2025 IEEE International Conference on Blockchain and Cryptocurrency (ICBC)",
    "year": 2025,
    "url": "https://www.fit.vut.cz/research/result/c201371/.en"
  },
  {
    "publicationId": "fit-c185121",
    "title": "Mitigating Undercutting Attacks: Fee-Redistribution Smart Contracts for Transaction-Fee-Based Regime of Blockchains with the Longest Chain Rule",
    "authors": [
      {
        "name": "Rastislav Budinský"
      },
      {
        "name": "Ivana Stančíková",
        "personId": "ivana-stancikova"
      },
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      }
    ],
    "venue": "2023 IEEE International Conference on Blockchain (Blockchain)",
    "year": 2024,
    "url": "https://www.fit.vut.cz/research/result/c185121/.en"
  },
  {
    "publicationId": "fit-c193292",
    "title": "SoK: Cryptocurrency Wallets - A Security Review and Classification based on Authentication Factors",
    "authors": [
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      },
      {
        "name": "Martin Perešíni",
        "personId": "martin-peresini"
      }
    ],
    "venue": "2024 IEEE International Conference on Blockchain and Cryptocurrency (ICBC) - Proceedings",
    "year": 2024,
    "url": "https://www.fit.vut.cz/research/result/c193292/.en"
  },
  {
    "publicationId": "fit-c185122",
    "title": "DAG-Sword: A Simulator for DAG-Oriented Proof-of-Work Blockchains with Realistic Network Topologies",
    "authors": [
      {
        "name": "Martin Perešíni",
        "personId": "martin-peresini"
      },
      {
        "name": "Tomáš Hladký"
      },
      {
        "name": "Kamil Malinka"
      },
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      }
    ],
    "venue": "Proceedings of the 57th Annual Hawaii International Conference on System Sciences",
    "year": 2024,
    "url": "https://www.fit.vut.cz/research/result/c185122/.en"
  },
  {
    "publicationId": "fit-c185114",
    "title": "Detecting and Preventing Credential Misuse in OTP-Based Two and Half Factor Authentication Toward Centralized Services Utilizing Blockchain-Based Identity Management",
    "authors": [
      {
        "name": "Jozef Drga",
        "personId": "jozef-drga"
      },
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      },
      {
        "name": "Juraj Vančo"
      },
      {
        "name": "Martin Perešíni",
        "personId": "martin-peresini"
      },
      {
        "name": "Petr Hanáček"
      },
      {
        "name": "Athanasios Vasilakos"
      }
    ],
    "venue": "2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC)",
    "year": 2023,
    "url": "https://www.fit.vut.cz/research/result/c185114/.en"
  },
  {
    "publicationId": "fit-c185109",
    "title": "BBB-Voting: Self-Tallying End-to-End Verifiable 1-out-of-k Blockchain-Based Boardroom Voting",
    "authors": [
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      },
      {
        "name": "Z. Li"
      },
      {
        "name": "P. Szalachowski"
      }
    ],
    "venue": "2023 IEEE International Conference on Blockchain (Blockchain)",
    "year": 2023,
    "url": "https://www.fit.vut.cz/research/result/c185109/.en"
  },
  {
    "publicationId": "fit-c185137",
    "title": "Incentive Attacks on DAG-Based Blockchains with Random Transaction Selection",
    "authors": [
      {
        "name": "Martin Perešíni",
        "personId": "martin-peresini"
      },
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      },
      {
        "name": "Martin Hrubý"
      },
      {
        "name": "Federico M. Benčić"
      },
      {
        "name": "Kamil Malinka"
      }
    ],
    "venue": "IEEE International Conference on Blockchain",
    "year": 2023,
    "url": "https://www.fit.vut.cz/research/result/c185137/.en"
  },
  {
    "publicationId": "fit-c185118",
    "title": "SBvote: Scalable Self-Tallying Blockchain-Based Voting",
    "authors": [
      {
        "name": "Ivana Stančíková",
        "personId": "ivana-stancikova"
      },
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      }
    ],
    "venue": "SAC '23: Proceedings of the 38th ACM/SIGAPP Symposium on Applied Computing",
    "year": 2023,
    "url": "https://www.fit.vut.cz/research/result/c185118/.en"
  },
  {
    "publicationId": "fit-c185110",
    "title": "Always on Voting: A Framework for Repetitive Voting on the Blockchain",
    "authors": [
      {
        "name": "S. Venugopalan"
      },
      {
        "name": "Ivana Stančíková",
        "personId": "ivana-stancikova"
      },
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      }
    ],
    "venue": "IEEE Transactions on Emerging Topics in Computing",
    "year": 2023,
    "url": "https://www.fit.vut.cz/research/result/c185110/.en"
  },
  {
    "publicationId": "fit-c169617",
    "title": "HADES-IoT: A practical host-based anomaly detection system for IoT devices (Extended Version)",
    "authors": [
      {
        "name": "D. Breitenbacher"
      },
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      },
      {
        "name": "Y. Aung"
      },
      {
        "name": "Y. Elovici"
      },
      {
        "name": "N. Tippenhauer"
      }
    ],
    "venue": "IEEE Internet of Things Journal",
    "year": 2022,
    "url": "https://www.fit.vut.cz/research/result/c169617/.en"
  },
  {
    "publicationId": "fit-c185144",
    "title": "The Security Reference Architecture for Blockchains: Toward a Standardized Model for Studying Vulnerabilities, Threats, and Defenses",
    "authors": [
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      }
    ],
    "venue": "Sborník příspevků z 54. konference EurOpen.CZ, 28.5.-1.6.2022",
    "year": 2022,
    "url": "https://www.fit.vut.cz/research/result/c185144/.en"
  },
  {
    "publicationId": "fit-c179406",
    "title": "Simulations of DAG-based Blockchain Protocols and Attacks on the PHANTOM Protocol via Transaction Selection Strategies",
    "authors": [
      {
        "name": "Martin Perešíni",
        "personId": "martin-peresini"
      },
      {
        "name": "Kamil Malinka"
      },
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      },
      {
        "name": "Federico M. Benčić"
      },
      {
        "name": "Tomáš Hladký"
      }
    ],
    "venue": "Sborník příspevků z 54. konference EurOpen.CZ, 28.5.-1.6.2022",
    "year": 2022,
    "url": "https://www.fit.vut.cz/research/result/c179406/.en"
  },
  {
    "publicationId": "fit-c175771",
    "title": "Intercepting Hail Hydra: Real-Time Detection of Algorithmically Generated Domains",
    "authors": [
      {
        "name": "F. Casino"
      },
      {
        "name": "N. Lykousas"
      },
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      },
      {
        "name": "C. Patsakis"
      },
      {
        "name": "J. Hernandez-Castro"
      }
    ],
    "venue": "Journal of Network and Computer Applications",
    "year": 2021,
    "url": "https://www.fit.vut.cz/research/result/c175771/.en"
  },
  {
    "publicationId": "fit-c168173",
    "title": "The Security Reference Architecture for Blockchains: Toward a Standardized Model for Studying Vulnerabilities, Threats, and Defenses",
    "authors": [
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      },
      {
        "name": "S. Venugopalan"
      },
      {
        "name": "D. Reijsbergen"
      },
      {
        "name": "Q. Hum"
      },
      {
        "name": "R. Schumi"
      },
      {
        "name": "P. Szalachowski"
      }
    ],
    "venue": "IEEE Communications Surveys and Tutorials",
    "year": 2021,
    "url": "https://www.fit.vut.cz/research/result/c168173/.en"
  },
  {
    "publicationId": "fit-c168117",
    "title": "SmartOTPs: An Air-Gapped 2-Factor Authentication for Smart-Contract Wallets",
    "authors": [
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      },
      {
        "name": "Dominik Breitenbacher"
      },
      {
        "name": "Ondrej Hujnak"
      },
      {
        "name": "Pieter Hartel"
      },
      {
        "name": "Alexander Binder"
      },
      {
        "name": "Pawel Szalachowski"
      }
    ],
    "venue": "Proceedings of the 2nd ACM Conference on Advances in Financial Technologies",
    "year": 2020,
    "url": "https://www.fit.vut.cz/research/result/c168117/.en"
  },
  {
    "publicationId": "fit-c168144",
    "title": "CoinWatch: A Clone-Based Approach for Detecting Vulnerabilities in Cryptocurrencies",
    "authors": [
      {
        "name": "Q. Hum"
      },
      {
        "name": "W. Tan"
      },
      {
        "name": "S. Tey"
      },
      {
        "name": "L. Lenus"
      },
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      },
      {
        "name": "Y. Lin"
      },
      {
        "name": "J. Sun"
      }
    ],
    "venue": "3rd IEEE INTERNATIONAL CONFERENCE ON BLOCKCHAIN (BLOCKCHAIN 2020)",
    "year": 2020,
    "url": "https://www.fit.vut.cz/research/result/c168144/.en"
  },
  {
    "publicationId": "fit-c162294",
    "title": "An Empirical Study into the Success of Listed Smart Contracts in Ethereum",
    "authors": [
      {
        "name": "P. Hartel"
      },
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      },
      {
        "name": "D. Reijsbergen"
      }
    ],
    "venue": "IEEE Access",
    "year": 2019,
    "url": "https://www.fit.vut.cz/research/result/c162294/.en"
  },
  {
    "publicationId": "fit-c162597",
    "title": "Increasing Trust in Tor Node List Using Blockchain",
    "authors": [
      {
        "name": "Lukáš Hellebrandt"
      },
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      },
      {
        "name": "Kamil Malinka"
      },
      {
        "name": "Petr Hanáček"
      }
    ],
    "venue": "2019 IEEE International Conference on Blockchain and Cryptocurrency (ICBC)",
    "year": 2019,
    "url": "https://www.fit.vut.cz/research/result/c162597/.en"
  },
  {
    "publicationId": "fit-c168501",
    "title": "A Security Reference Architecture for Blockchains",
    "authors": [
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      },
      {
        "name": "Sarad Venugopalan"
      },
      {
        "name": "Qingze Hum"
      },
      {
        "name": "Pawel Szalachowski"
      }
    ],
    "venue": "2019 2nd IEEE International Conference on Blockchain",
    "year": 2019,
    "url": "https://www.fit.vut.cz/research/result/c168501/.en"
  },
  {
    "publicationId": "fit-c168504",
    "title": "Adversarial Attacks on Remote User Authentication Using Behavioural Mouse Dynamics",
    "authors": [
      {
        "name": "Yi Xiang Marcus Tan"
      },
      {
        "name": "Alfonso Iacovazzi"
      },
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      },
      {
        "name": "Yuval Elovici"
      },
      {
        "name": "Alexander Binder"
      }
    ],
    "venue": "2019 International Joint Conference on Neural Networks (IJCNN)",
    "year": 2019,
    "url": "https://www.fit.vut.cz/research/result/c168504/.en"
  },
  {
    "publicationId": "fit-c168500",
    "title": "HADES-IoT: A practical host-based anomaly detection system for IoT devices",
    "authors": [
      {
        "name": "Dominik Breitenbacher"
      },
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      },
      {
        "name": "Yan Lin Aung"
      },
      {
        "name": "Nils Ole Tippenhauer"
      },
      {
        "name": "Yuval Elovici"
      }
    ],
    "venue": "Asia CCS '19: Proceedings of the 2019 ACM Asia Conference on Computer and Communications Security",
    "year": 2019,
    "url": "https://www.fit.vut.cz/research/result/c168500/.en"
  },
  {
    "publicationId": "fit-c162600",
    "title": "StrongChain: Transparent and Collaborative Proof-of-Work Consensus",
    "authors": [
      {
        "name": "Pawel Szalachowski"
      },
      {
        "name": "Daniël Reijsbergen"
      },
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      },
      {
        "name": "Siwei Sun"
      }
    ],
    "venue": "Proceedings of The 28th USENIX Security Symposium",
    "year": 2019,
    "url": "https://www.fit.vut.cz/research/result/c162600/.en"
  },
  {
    "publicationId": "fit-c156851",
    "title": "Insight Into Insiders and IT: A Survey of Insider Threat Taxonomies, Analysis, Modeling, and Countermeasures",
    "authors": [
      {
        "name": "Ivan Homoliak",
        "personId": "ivan-homoliak"
      },
      {
        "name": "F. Toffalini"
      },
      {
        "name": "J. Guarnizo"
      },
      {
        "name": "Y. Elovici"
      },
      {
        "name": "M. Ochoa"
      }
    ],
    "venue": "ACM Computing Surveys",
    "year": 2019,
    "url": "https://www.fit.vut.cz/research/result/c156851/.en"
  }
];
