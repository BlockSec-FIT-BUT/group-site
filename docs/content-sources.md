# BlockSec@FIT content sources

Imported on 2026-09-29 from live FIT pages. This is a repository-managed snapshot, not a runtime API integration.

## Group and people

- [Official group profile, English](https://www.fit.vut.cz/research/group/blocksec%40fit/.en): BlockSec@FIT; full name **Blockchains & System Security @ FIT**. Used for the site identity and a short paraphrase of its research focus.
- [Official team](https://www.fit.vut.cz/research/group/blocksec%40fit/team/.en): nine profiles: one principal researcher, five members, and three alumni. Roles are group roles; alumni remain labelled as such.
- Each person's `website` links to the official profile used to verify their name and, where available, academic position. Biographies summarize either the listed research interests, role, or linked publications; they are not copied biographies.
- [Ivan Homoliak's profile](https://www.fit.vut.cz/person/110908/.en): public professional contact details. The faculty postal address comes from the official group page.

Only people listed on the team page receive local profiles. A publication co-author's FIT affiliation alone does not establish membership in BlockSec@FIT.

## Publications

Imported all **27 records** on the [supplied Czech publication page](https://www.fit.vut.cz/research/group/blocksec%40fit/publication-results/.cs), covering 2019–2026. The live page contained newer records absent from search-engine cached copies.

The 27 entries were audited on **2026-09-29** against publisher or institutional sources. Citation keys remain `fit-c<result number>` so existing anchors, `personIds`, and `projectIds` stay stable. Conference papers, journal versions, proceedings contributions, and lecture notes remain separate records.

`src/data/publications.ts` now contains **23 BibTeX exports from publisher-deposited Crossref metadata**, **one direct SciTePress export**, **one direct USENIX export**, and **two FIT exports checked against the EurOpen proceedings PDF**. Crossref exports are available at `https://api.crossref.org/works/<DOI>/transform/application/x-bibtex`. They are actual exported entries, not citations reconstructed from titles. Parsing remains local at build time; the deployed site performs no metadata lookup.

Normalization preserves the exported content while retaining the local citation keys, formatting fields on separate lines, using HTTPS DOI links, standard three-letter month macros and BibTeX page-range separators, and fixing HTML-encoded ampersands. Author spelling follows the publication export, including its use or omission of accents. Local profile names retain their official spelling.

### Audit trail for every entry

The source links below identify the published versions. The BibTeX retains available author, venue, year, publisher, DOI, page, volume, issue, ISBN and ISSN fields. Fields that do not apply or are not present in the checked source are not invented. The website displays its compact citation; the complete exported metadata remains in the BibTeX.

| FIT key | Publication | BibTeX source / checked metadata |
| --- | --- | --- |
| `c199851` | Analysing Multidisciplinary Approaches to Fight Large-Scale Digital Influence Operations (2026) | [SciTePress direct export](https://www.scitepress.org/Link.aspx?doi=10.5220/0014291400004061); pp. 161–168, ISBN 978-989-758-800-6 |
| `c212092` | Lecture Notes for the Course: Blockchains and Decentralized Applications (2026) | [Crossref / publisher](https://doi.org/10.13164/9788021463943); ISBN 9788021463943 |
| `c211657` | Selfish Mining in Multi-attacker Scenarios: An Empirical Evaluation of Nakamoto, Fruitchain, and Strongchain (2026) | [Crossref / publisher](https://doi.org/10.1007/978-3-032-16089-8_21); pp. 328–343, ISBN 9783032160898 |
| `c211660` | PoS-CoPOR: Proof-of-Stake Consensus Protocol with Native Onion Routing Providing Scalability and DoS-Resistance (2025) | [Crossref / publisher](https://doi.org/10.1109/BRAINS67003.2025.11302912); pp. 1–9 |
| `c201371` | SNARKlet: Efficient Mobile Wallet Synchronization with zk-SNARKs (2025) | [Crossref / publisher](https://doi.org/10.1109/icbc64466.2025.11185067); pp. 1–7 |
| `c185121` | Mitigating Undercutting Attacks: Fee-Redistribution Smart Contracts for Transaction-Fee-Based Regime of Blockchains with the Longest Chain Rule (2023) | [Crossref / publisher](https://doi.org/10.1109/Blockchain60715.2023.00014); pp. 25–32 |
| `c193292` | SoK: Cryptocurrency Wallets – A Security Review and Classification based on Authentication Factors (2024) | [Crossref / publisher](https://doi.org/10.1109/ICBC59979.2024.10634439); pp. 1–8 |
| `c185122` | DAG-Sword: A Simulator of Large-Scale Network Topologies for DAG-Oriented Proof-of-Work Blockchains (2024) | [Crossref / publisher](https://doi.org/10.24251/HICSS.2024.716); pp. 5960–5969, ISBN 978-0-9981331-7-1 |
| `c185114` | Detecting and Preventing Credential Misuse in OTP-Based Two and Half Factor Authentication Toward Centralized Services Utilizing Blockchain-Based Identity Management (2023) | [Crossref / publisher](https://doi.org/10.1109/ICBC56567.2023.10174997); pp. 1–4 |
| `c185109` | BBB-Voting: Self-Tallying End-to-End Verifiable 1-out-of-k Blockchain-Based Boardroom Voting (2023) | [Crossref / publisher](https://doi.org/10.1109/Blockchain60715.2023.00054); pp. 297–306 |
| `c185137` | Incentive Attacks on DAG-Based Blockchains with Random Transaction Selection (2023) | [Crossref / publisher](https://doi.org/10.1109/Blockchain60715.2023.00011); pp. 1–8 |
| `c185118` | SBvote: Scalable Self-Tallying Blockchain-Based Voting (2023) | [Crossref / publisher](https://doi.org/10.1145/3555776.3578603); pp. 203–211 |
| `c185110` | Always on Voting: A Framework for Repetitive Voting on the Blockchain (2023) | [Crossref / publisher](https://doi.org/10.1109/TETC.2023.3315748); vol. 11, no. 4, pp. 1082–1092 |
| `c169617` | HADES-IoT: A Practical and Effective Host-Based Anomaly Detection System for IoT Devices (Extended Version) (2022) | [Crossref / publisher](https://doi.org/10.1109/JIOT.2021.3135789); vol. 9, no. 12, pp. 9640–9658 |
| `c185144` | The Security Reference Architecture for Blockchains: Toward a Standardized Model for Studying Vulnerabilities, Threats, and Defenses (2022) | [FIT export + EurOpen proceedings PDF](https://europen.cz/Anot/54-1/sbornik-54.pdf); pp. 185–210, ISBN 978-80-86583-34-1 |
| `c179406` | Simulations of DAG-based Blockchain Protocols and Attacks on the PHANTOM Protocol via Transaction Selection Strategies (2022) | [FIT export + EurOpen proceedings PDF](https://europen.cz/Anot/54-1/sbornik-54.pdf); pp. 173–184, ISBN 978-80-86583-34-1 |
| `c175771` | Intercepting Hail Hydra: Real-time detection of Algorithmically Generated Domains (2021) | [Crossref / publisher](https://doi.org/10.1016/j.jnca.2021.103135); vol. 190, article 103135 |
| `c168173` | The Security Reference Architecture for Blockchains: Toward a Standardized Model for Studying Vulnerabilities, Threats, and Defenses (2021) | [Crossref / publisher](https://doi.org/10.1109/COMST.2020.3033665); vol. 23, no. 1, pp. 341–390 |
| `c168117` | SmartOTPs: An Air-Gapped 2-Factor Authentication for Smart-Contract Wallets (2020) | [Crossref / publisher](https://doi.org/10.1145/3419614.3423257); pp. 145–162 |
| `c168144` | CoinWatch: A Clone-Based Approach For Detecting Vulnerabilities in Cryptocurrencies (2020) | [Crossref / publisher](https://doi.org/10.1109/Blockchain50366.2020.00011); pp. 17–25 |
| `c162294` | An Empirical Study Into the Success of Listed Smart Contracts in Ethereum (2019) | [Crossref / publisher](https://doi.org/10.1109/ACCESS.2019.2957284); vol. 7, pp. 177539–177555 |
| `c162597` | Increasing Trust in Tor Node List Using Blockchain (2019) | [Crossref / publisher](https://doi.org/10.1109/BLOC.2019.8751340); pp. 29–32 |
| `c168501` | A Security Reference Architecture for Blockchains (2019) | [Crossref / publisher](https://doi.org/10.1109/Blockchain.2019.00060); pp. 390–397 |
| `c168504` | Adversarial Attacks on Remote User Authentication Using Behavioural Mouse Dynamics (2019) | [Crossref / publisher](https://doi.org/10.1109/IJCNN.2019.8852414); pp. 1–10 |
| `c168500` | HADES-IoT: A Practical Host-Based Anomaly Detection System for IoT Devices (2019) | [Crossref / publisher](https://doi.org/10.1145/3321705.3329847); pp. 479–484 |
| `c162600` | StrongChain: Transparent and Collaborative Proof-of-Work Consensus (2019) | [USENIX direct export](https://www.usenix.org/conference/usenixsecurity19/presentation/szalachowski); pp. 819–836, ISBN 978-1-939133-06-9 |
| `c156851` | Insight Into Insiders and IT: A Survey of Insider Threat Taxonomies, Analysis, Modeling, and Countermeasures (2019) | [Crossref / publisher](https://doi.org/10.1145/3303771); vol. 52, no. 2, pp. 1–40 |

### Substantive corrections

- **DAG-Sword (`c185122`):** the FIT DOI `10.24251/HICSS.2023.716` belongs to an unrelated paper. The [Hawaii publisher record](https://hdl.handle.net/10125/107101) confirms **`10.24251/HICSS.2024.716`**, the published title *A Simulator of Large-Scale Network Topologies for DAG-Oriented Proof-of-Work Blockchains*, and ISBN `978-0-9981331-7-1`. Pages **5960–5969** were checked in the [published PDF](https://scholarspace.manoa.hawaii.edu/bitstreams/f038cabe-aa33-4ac7-9907-6e4886c2509c/download) and added to the Crossref export.
- **Digital influence operations (`c199851`):** use the direct SciTePress BibTeX rather than FIT's one-author export or Crossref's shortened names. It supplies seven authors, including **Rafael Mata Milla** and **Marc Almeida Ros**, pages 161–168, ISBN and ISSN.
- **Mitigating Undercutting Attacks (`c185121`):** use the publisher's **2023** publication year, rather than FIT's recorded year of 2024.
- **Credential misuse (`c185114`):** published order places **Athanasios Vasilakos before Martin Perešíni and Petr Hanacek**.
- **Incentive Attacks (`c185137`):** published order is Martin Perešíni, **Federico Matteo Benčić**, Martin Hrubý, Kamil Malinka, Ivan Homoliak.
- **EurOpen DAG simulations (`c179406`):** correct the FIT export against the proceedings title page (printed p. 173): Martin Perešíni, **Ivan Homoliak**, Kamil Malinka, **Federico Matteo Benčić**, Tomáš Hladký. Its full page range is 173–184. The separate single-author security architecture contribution (`c185144`) occupies pp. 185–210.
- **Selfish Mining (`c211657`):** Springer confirms **Jakub Kubík**, the published author order, and pages **328–343**.
- **Always on Voting (`c185110`):** volume 11, issue 4, pages **1082–1092**, rather than the provisional 1–11.
- **Hail Hydra (`c175771`):** volume **190**, article **103135**, rather than FIT's volume/year and provisional page range.
- **Ethereum smart-contract study (`c162294`):** volume 7, pages 177539–177555; no issue number is asserted by the publisher export.
- **HADES-IoT extended version (`c169617`):** restore the published title's **“and Effective”**, full author names, volume 9, issue 12, and pages 9640–9658.
- The other entries now retain their exported full author names and bibliographic fields. Earlier restorations of missing authors in SmartOTPs, the 2019 security architecture paper, remote-authentication paper, 2019 HADES-IoT and StrongChain are confirmed by the publisher exports.

## Projects

The group page has no separate project catalogue. The Projects page therefore presents ten selected **named research systems and prototypes** described in the listed papers. It is not a list of grants or a claim that every system is actively maintained.

Descriptions are short paraphrases of the abstracts in the linked records. `personIds` contains only group members/alumni who are credited authors of that system's paper; it is not a complete contributor list.

Publication-to-project links use `projectIds` on the publication input. Each project's source paper is assigned to it; both the 2019 and 2022 HADES-IoT papers belong to `hades-iot`. Other papers retain no project assignment unless a direct relationship is established.

| Research system | FIT source |
| --- | --- |
| PoS-CoPOR | [c211660](https://www.fit.vut.cz/research/result/c211660/.en) |
| SNARKlet | [c201371](https://www.fit.vut.cz/research/result/c201371/.en) |
| DAG-Sword | [c185122](https://www.fit.vut.cz/research/result/c185122/.en) |
| BBB-Voting | [c185109](https://www.fit.vut.cz/research/result/c185109/.en) |
| SBvote | [c185118](https://www.fit.vut.cz/research/result/c185118/.en) |
| Always on Voting | [c185110](https://www.fit.vut.cz/research/result/c185110/.en) |
| HADES-IoT | [c169617](https://www.fit.vut.cz/research/result/c169617/.en) |
| SmartOTPs | [c168117](https://www.fit.vut.cz/research/result/c168117/.en) |
| CoinWatch | [c168144](https://www.fit.vut.cz/research/result/c168144/.en) |
| StrongChain | [c162600](https://www.fit.vut.cz/research/result/c162600/.en), [USENIX](https://www.usenix.org/conference/usenixsecurity19/presentation/szalachowski) |

### Independent project destinations

`Project.url` is optional and means the project's own homepage or code repository. Related papers are already derived from publication `projectIds`; a paper record is not an additional project destination.

The following public repositories were checked on 2026-09-29. Their READMEs identify the corresponding systems (and, where supplied, link their papers):

- [DAG-Sword](https://github.com/Tem12/DAG-simulator)
- [BBB-Voting](https://github.com/ivan-homoliak-sutd/BBB-Voting)
- [SmartOTPs](https://github.com/ivan-homoliak-sutd/SmartOTPs)
- [StrongChain proof-of-concept](https://github.com/ivan-homoliak-sutd/strongchain-demo)

No separate verified public destination was established for SNARKlet, SBvote, Always on Voting, HADES-IoT, or CoinWatch during this audit, so their optional URLs are omitted. PoS-CoPOR's [author paper](https://arxiv.org/abs/2510.04619) names `https://github.com/st22nestrel/COPOR`, but that repository returned 404 during verification; it is omitted as well. This does not assert that those projects have no implementations. Their related publications and people remain linked.

No news, portraits, or unverified project assignments were invented during this import.
