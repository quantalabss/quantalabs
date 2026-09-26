# What is a Cryptographic Bill of Materials (CBOM) - And Why Every Indian Fintech Needs One Before FY 2027-28

**Published by QuantaLabs | Post-Quantum Cryptography Migration**

---

## The Regulation Most Indian CTOs Haven't Read Yet

In February 2026, India's Department of Science and Technology published the *Implementation of Quantum Safe Ecosystem in India* - a phased, time-bound migration roadmap with hard deadlines for Critical Information Infrastructure, government bodies, and private enterprises.

Buried inside that document is a mandate that will affect every Indian company handling sensitive data:

**Cryptographic Bill of Materials (CBOM) submissions are mandatory from FY 2027-28.**

Most Indian CTOs don't know what a CBOM is. Most compliance teams have never heard the term. And most companies that need one have no idea where to start.

This guide explains exactly what a CBOM is, why it matters, what the India DST mandate requires, and what your organisation needs to do before the deadline hits.

---

## What Is a Cryptographic Bill of Materials (CBOM)?

A Cryptographic Bill of Materials is a structured inventory of every cryptographic asset your organisation uses - across every system, library, API, and third-party dependency.

Think of it like a BOM in manufacturing. Before you can upgrade a component in a product, you need to know every part, where it's used, and what it connects to. The same logic applies to cryptography.

A complete CBOM captures:

- **Every algorithm in use** - RSA-2048, ECDSA, AES-128, SHA-256, and so on
- **Where each algorithm is deployed** - TLS layer, database encryption, API request signing, JWT tokens, code signing, certificate infrastructure
- **Which libraries implement them** - OpenSSL version, BouncyCastle, libsodium, native platform APIs
- **Key sizes and certificate details** - expiry dates, key lengths, rotation policies
- **Third-party dependencies** - every vendor SDK, cloud provider service, or payment gateway that uses cryptography under the hood
- **Quantum vulnerability status** - which algorithms are broken by a Cryptographically Relevant Quantum Computer (CRQC) and which are safe

---

## Why Does CBOM Matter Right Now?

### The Harvest Now, Decrypt Later Threat

Nation-state actors are not waiting for quantum computers to arrive before they act.

They are harvesting encrypted data today - your transaction records, KYC documents, API payloads, internal communications - and storing it. The moment a sufficiently powerful quantum computer exists, that stored data becomes readable. Retroactively. All of it.

This is called the **Harvest Now, Decrypt Later (HNDL)** attack vector. It is not theoretical. The US NSA, CISA, and now India's DST have all acknowledged it as a present-day threat.

The implication is stark: your data that is encrypted today, using RSA or ECDSA, is already at risk.

### Quantum Computers Break Most Encryption in Use Today

The algorithms protecting most of the world's data - RSA, ECDSA, ECDH, Diffie-Hellman - are all based on mathematical problems that quantum computers can solve efficiently using Shor's algorithm.

When a Cryptographically Relevant Quantum Computer arrives (estimated between 2028 and 2035 by various intelligence agencies), these algorithms offer zero protection.

Symmetric algorithms like AES-256 are less affected - Grover's algorithm halves their effective key length, making AES-256 equivalent to AES-128 against a quantum adversary. Manageable, but worth noting.

The algorithms you need to migrate to are NIST-standardised post-quantum algorithms:
- **ML-KEM (Kyber-1024)** - for key encapsulation and encryption
- **ML-DSA (Dilithium)** - for digital signatures
- **SLH-DSA (SPHINCS+)** - for hash-based signatures

None of these are broken by known quantum attacks.

### The Migration Takes Years - Not Months

This is the most important thing most organisations underestimate.

A full PQC migration for a complex financial system is not a library swap. It involves:

- Identifying every cryptographic touchpoint (the CBOM)
- Assessing which systems are highest risk
- Testing PQC algorithms for performance and compatibility
- Updating certificate infrastructure
- Coordinating with third-party vendors
- Regulatory validation and audit

For a mid-sized Indian exchange or NBFC, this process realistically takes 18-36 months end to end.

FY 2027-28 starts in April 2027. That is less than 12 months away. Organisations that have not started the CBOM process today are already behind.

---

## India's DST PQC Mandate - What It Actually Says

India's *Implementation of Quantum Safe Ecosystem* roadmap published in February 2026 establishes a phased migration timeline:

**Phase 1 (Current - FY 2026-27)**
- Awareness and inventory
- Organisations begin identifying their cryptographic assets
- TEC, STQC, and BIS begin establishing testing laboratories

**Phase 2 (FY 2027-28)**
- CBOM submissions become mandatory for Critical Information Infrastructure
- Dedicated Tier-1 and Tier-2 quantum-safe testing laboratories become operational
- Private enterprises in financial services and data-sensitive sectors required to submit initial cryptographic inventories

**Phase 3 (FY 2028-30)**
- Active migration begins
- PQC-compliant systems required for new infrastructure
- Full audit and certification regime operational

**Who Is Affected**

The mandate explicitly covers:
- Banks and NBFCs
- Payment processors and fintech platforms
- Cryptocurrency exchanges
- Healthcare data platforms
- Telecom infrastructure
- Government contractors and vendors

If your organisation handles sensitive financial or personal data at scale, you are in scope.

---

## What Does a CBOM Actually Look Like?

A CBOM is a structured document - not a spreadsheet, not a vague audit report. It is a machine-readable, versioned inventory that maps every cryptographic dependency in your stack.

Here is a simplified example of what a CBOM entry looks like:

```json
{
  "asset_id": "QLA-001",
  "name": "User Authentication Service",
  "algorithm": "ECDSA",
  "curve": "secp256k1",
  "key_size": 256,
  "library": "OpenSSL 1.1.1",
  "location": "auth-service/src/signing.js",
  "deployment": "API request signing",
  "quantum_vulnerable": true,
  "migration_priority": "Critical",
  "recommended_replacement": "ML-DSA (Dilithium-3)"
}
```

A complete enterprise CBOM may contain hundreds or thousands of such entries, covering every service, microservice, third-party integration, and infrastructure component.

The CBOM is not a one-time document. It is a living inventory that must be maintained as your stack evolves.

---

## The Five Phases of a CBOM Audit

### Phase 1 - Discovery

Identify every system that uses cryptography. This includes:

- Application layer (APIs, authentication, session management)
- Data layer (database encryption, field-level encryption, backup encryption)
- Transport layer (TLS certificates, mTLS configurations)
- Infrastructure layer (cloud KMS, HSMs, secrets managers)
- Third-party layer (payment gateways, identity providers, vendor SDKs)

Discovery is typically the most time-consuming phase. Most organisations discover 30-50% more cryptographic touchpoints than they initially expected.

### Phase 2 - Classification

For each discovered asset, classify:

- **Algorithm type** - asymmetric, symmetric, hash, MAC
- **Quantum vulnerability** - broken by Shor's, weakened by Grover's, or quantum-safe
- **Data sensitivity** - what data does this algorithm protect and for how long must it remain confidential?
- **Operational criticality** - what breaks if this algorithm is compromised?

### Phase 3 - Risk Scoring

Assign a quantum risk score to each asset based on:

- Algorithm vulnerability
- Data longevity (data encrypted today that must remain confidential for 10+ years is highest risk)
- System criticality
- Migration complexity

This produces a prioritised migration queue - not everything needs to move at once, but the highest-risk assets need to move first.

### Phase 4 - CBOM Document Generation

Compile the structured CBOM document in a format compatible with regulatory submission. Include:

- Executive summary of quantum exposure
- Full cryptographic inventory
- Risk-scored migration priority list
- Recommended replacement algorithms
- Estimated migration timeline and effort

### Phase 5 - Ongoing Maintenance

The CBOM must be updated when:

- New services are added
- Libraries are upgraded
- Third-party vendors change their cryptographic implementations
- NIST or India DST publish updated algorithm recommendations

---

## Common Mistakes Indian Companies Make

**Mistake 1 - Assuming only their own code matters**

Most organisations audit their own codebase and stop there. But your cryptographic exposure includes every third-party library, every vendor SDK, every cloud service you use. A payment gateway using RSA-2048 is your problem, not just theirs.

**Mistake 2 - Treating it as a one-time exercise**

A CBOM done in 2026 and forgotten is worthless by 2028. Cryptographic inventories must be maintained continuously.

**Mistake 3 - Waiting for a vendor to solve it**

Your cloud provider will eventually offer PQC-compatible services. Your payment gateway will eventually upgrade. But waiting for vendors to migrate for you means you have no visibility into your risk exposure in the meantime - and you miss the regulatory deadline regardless.

**Mistake 4 - Underestimating discovery complexity**

The average enterprise has 3-5x more cryptographic dependencies than their engineering team initially estimates. Starting discovery late means running out of time before the migration even begins.

**Mistake 5 - Confusing TLS migration with full PQC migration**

Upgrading your TLS layer to support post-quantum key exchange is one step. It does not address application-layer signing keys, database encryption, backup encryption, or code signing. Full PQC compliance requires addressing all layers.

---

## How QuantaLabs Helps

QuantaLabs is India's first dedicated post-quantum cryptography migration company, incorporated in Coimbatore, Tamil Nadu in May 2026.

We built QuantaChain - a live 131,000-block blockchain using Falcon-512 post-quantum signatures from genesis. We published peer-reviewed research on new lattice-based hardness assumptions. We shipped QuantaCipher - a developer API for Kyber-1024 encryption. We did not read about post-quantum cryptography. We built with it.

Our CBOM Audit service covers all five phases described above and delivers:

- A complete, structured CBOM document ready for regulatory submission
- A risk-scored migration priority report
- A phased migration roadmap mapped to India DST deadlines
- An executive summary for board and compliance reporting

**Who this is for:**
- Indian crypto exchanges and Web3 platforms
- NBFCs and fintech companies
- Payment processors handling sensitive financial data
- Any organisation that must comply with India's DST PQC mandate

**Timeline:** A standard CBOM audit engagement takes 3-4 weeks for a mid-sized organisation.

**Starting price:** ₹1.5L for the initial CBOM audit and risk assessment.

---

## Frequently Asked Questions

**Is my company affected if we're not a bank?**

If you handle sensitive financial data, personal data, or operate Critical Information Infrastructure, yes. Cryptocurrency exchanges, payment processors, lending platforms, and insurtech companies are all explicitly in scope under India's DST framework.

**We use AWS/Azure/GCP - doesn't that handle encryption for us?**

Cloud providers handle infrastructure-layer encryption. Your application-layer cryptography - API signing keys, JWT tokens, database field encryption, user authentication - is your responsibility. Cloud providers are also in the process of migrating their own services; their timelines may not align with your regulatory deadlines.

**How long does a CBOM audit take?**

For a mid-sized Indian fintech or exchange, 3-4 weeks for discovery and classification. Larger organisations with complex microservice architectures may require 6-8 weeks.

**What happens if we miss the FY 2027-28 deadline?**

India's DST framework is moving toward an enforcement regime similar to GDPR in Europe. Early indications suggest penalties for Critical Information Infrastructure operators who fail to submit CBOM documentation. Beyond regulatory risk, any organisation that has not inventoried its cryptographic assets by 2028 will face a rushed, expensive migration under deadline pressure.

**Can we do the CBOM internally?**

Yes - but most engineering teams underestimate the scope of discovery, lack familiarity with quantum vulnerability classification, and don't have experience producing regulator-ready documentation. An external CBOM audit also provides independence that internal audits cannot.

---

## Start Before the Deadline

FY 2027-28 starts in April 2027. A CBOM audit for a mid-sized organisation takes 3-4 weeks minimum. The migration that follows takes 18-36 months.

The organisations that start today will migrate calmly, on their own timeline, with full visibility into their risk exposure.

The organisations that wait until 2027 will be scrambling.

**Book a free 30-minute CBOM consultation with QuantaLabs.**

We will walk through your current stack, estimate your quantum exposure, and tell you exactly what a full CBOM audit would involve for your organisation - no obligation.

[**Schedule a Free Consultation → quantalabs.cc**](https://quantalabs.cc)

---

*QuantaLabs Private Limited is incorporated in Coimbatore, Tamil Nadu. We build post-quantum cryptography infrastructure and help Indian and global organisations migrate to quantum-safe cryptographic standards. Contact us at quanta@quantachain.org*

---

**Tags:** CBOM, Cryptographic Bill of Materials, Post-Quantum Cryptography, PQC India, India DST PQC, Quantum Safe Cryptography India, PQC Migration India, NIST PQC, Kyber, Dilithium, QuantaLabs, Fintech Security India, Crypto Exchange Security India
