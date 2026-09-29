export interface Project {
  projectId: string;
  title: string;
  description: string;
  personIds: string[];
  url?: string;
  image?: string;
}

// Selected named research systems from the group publication list.
// People links identify group members/alumni credited as authors of the linked work.
// These entries do not imply ongoing funding or current maintenance.
// Sources and scope: docs/content-sources.md.
export const projects: Project[] = [
  {
    "projectId": "pos-copor",
    "title": "PoS-CoPOR",
    "description": "A proof-of-stake consensus protocol that hides the next block proposer through native onion routing to reduce exposure to targeted denial-of-service attacks.",
    "personIds": [
      "ivan-homoliak",
      "martin-peresini",
      "marek-tamaskovic"
    ],
    "url": "https://www.fit.vut.cz/research/result/c211660/.en"
  },
  {
    "projectId": "snarklet",
    "title": "SNARKlet",
    "description": "Mobile wallet synchronization using zk-SNARK proofs and on-chain checkpoints to reduce storage and bandwidth requirements without trusting a synchronization server.",
    "personIds": [
      "martin-peresini",
      "samuel-oleksak",
      "ivan-homoliak"
    ],
    "url": "https://www.fit.vut.cz/research/result/c201371/.en"
  },
  {
    "projectId": "dag-sword",
    "title": "DAG-Sword",
    "description": "A simulator for DAG-based proof-of-work protocols, realistic network topologies, and transaction-selection strategies used to study throughput and incentive attacks.",
    "personIds": [
      "martin-peresini",
      "ivan-homoliak"
    ],
    "url": "https://www.fit.vut.cz/research/result/c185122/.en"
  },
  {
    "projectId": "bbb-voting",
    "title": "BBB-Voting",
    "description": "A blockchain voting protocol for choosing among multiple candidates, with public verification, self-tallying, and recovery when participants stop responding.",
    "personIds": [
      "ivan-homoliak"
    ],
    "url": "https://www.fit.vut.cz/research/result/c185109/.en"
  },
  {
    "projectId": "sbvote",
    "title": "SBvote",
    "description": "A self-tallying voting protocol designed to scale blockchain elections while retaining voter privacy and verifiability.",
    "personIds": [
      "ivana-stancikova",
      "ivan-homoliak"
    ],
    "url": "https://www.fit.vut.cz/research/result/c185118/.en"
  },
  {
    "projectId": "always-on-voting",
    "title": "Always on Voting",
    "description": "A blockchain voting framework that lets participants revise their votes between elections, with changes taking effect at the end of shorter voting epochs.",
    "personIds": [
      "ivana-stancikova",
      "ivan-homoliak"
    ],
    "url": "https://www.fit.vut.cz/research/result/c185110/.en"
  },
  {
    "projectId": "hades-iot",
    "title": "HADES-IoT",
    "description": "Host-based anomaly detection for Linux IoT devices, designed to detect malicious activity with low resource overhead and resistance to tampering.",
    "personIds": [
      "ivan-homoliak"
    ],
    "url": "https://www.fit.vut.cz/research/result/c169617/.en"
  },
  {
    "projectId": "smartotps",
    "title": "SmartOTPs",
    "description": "A smart-contract wallet framework combining one-time passwords, an air-gapped authenticator, and two-factor authentication for managing crypto-assets.",
    "personIds": [
      "ivan-homoliak"
    ],
    "url": "https://www.fit.vut.cz/research/result/c168117/.en"
  },
  {
    "projectId": "coinwatch",
    "title": "CoinWatch",
    "description": "A vulnerability analysis tool that combines code evolution and clone detection to find cryptocurrency projects affected by a known vulnerability.",
    "personIds": [
      "ivan-homoliak"
    ],
    "url": "https://www.fit.vut.cz/research/result/c168144/.en"
  },
  {
    "projectId": "strongchain",
    "title": "StrongChain",
    "description": "A proof-of-work consensus design that incorporates weaker proofs of work to make mining contributions more visible and encourage collaboration.",
    "personIds": [
      "ivan-homoliak"
    ],
    "url": "https://www.fit.vut.cz/research/result/c162600/.en"
  }
];
