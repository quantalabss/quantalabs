import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock, Calendar, User } from "lucide-react";
import { getBlogPost } from "@/lib/blog";

const ogImage = "/seo/image.png";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | QuantaLabs Blog`,
    description: post.excerpt, // 150-160 characters
    alternates: {
      canonical: `https://www.quantalabs.cc/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.quantalabs.cc/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Kishore K, QuantaLabs'],
      tags: post.tags,
    },
  }
}

export function generateStaticParams() {
  return [
    { slug: "ecdsa-liability-2026" },
    { slug: "cbom-india-compliance-guide" },
  ];
}

// ── ECDSA BLOG POST CONTENT ──────────────────────────────────────────────────

function ECDSAPost() {
  return (
    <article className="prose-custom">

      <p className="lead">
        Five days ago, an independent researcher named Giancarlo Lelli broke a 15-bit elliptic curve key on a publicly accessible IBM quantum computer and collected a 1 BTC bounty from Project Eleven. The result was debated — some Bitcoin developers showed the winning result could be replicated with random noise, suggesting limited true quantum advantage at this scale. But the debate misses the point entirely.
      </p>
      <p>The real story is what happened three weeks before that, in the research papers.</p>

      <hr />

      <h2>The Three Papers That Changed the Timeline</h2>
      <p>In the last week of March 2026, two papers dropped on the same day that fundamentally rewrote the resource estimates for breaking ECDSA:</p>

      <h3>Google Quantum AI (March 31, 2026)</h3>
      <p>
        Google&apos;s research team published a 57-page whitepaper outlining a significantly more efficient implementation of Shor&apos;s algorithm against secp256k1 — the elliptic curve that secures Bitcoin, Ethereum, and virtually every EVM-compatible blockchain. Their circuits require <strong>fewer than 500,000 physical qubits</strong> on a superconducting architecture to break ECDSA-P256. Critically, the estimated execution time is <strong>under 9 minutes</strong>.
      </p>
      <p>
        Bitcoin&apos;s average block time is 10 minutes. The implication: a sufficiently powerful quantum computer could theoretically crack an exposed public key faster than a transaction confirms on-chain.
      </p>
      <p>
        The previous estimate from Litinski (2023) required ~9 million qubits. Google&apos;s paper represents an approximately <strong>20-fold reduction</strong> in the qubit threshold. The paper closed with a line that should be framed on the wall of every blockchain security team:
      </p>
      <blockquote>
        &ldquo;It is conceivable that the existence of early CRQCs may first be detected on the blockchain rather than announced.&rdquo;
      </blockquote>

      <h3>Oratomic / Caltech / UC Berkeley (March 31, 2026)</h3>
      <p>
        On the exact same day, a team spanning Oratomic, Caltech, and UC Berkeley published a paper showing Shor&apos;s algorithm can be executed at cryptographically relevant scales with <strong>as few as 10,000 reconfigurable neutral-atom qubits</strong>.
      </p>
      <p>
        That is 50× lower than Google&apos;s already-shocking estimate. The key insight: high-rate quantum Low-Density Parity-Check (qLDPC) codes achieve approximately 30% encoding rate, compared to ~4% for surface codes in Google&apos;s architecture. Under plausible assumptions, a 26,000-qubit neutral-atom system could crack P-256 in a matter of <strong>a few days</strong>.
      </p>

      <h3>Chevignard-Fouque-Schrottenloher (EUROCRYPT 2026)</h3>
      <p>French researchers published a new quantum circuit architecture for the 256-bit Elliptic Curve Discrete Logarithm Problem at EUROCRYPT 2026, further optimizing the circuit depth needed to attack full production keys.</p>

      <hr />

      <h2>Three Papers. Three Weeks. The Timeline Just Moved.</h2>
      <p>
        This is not distant future speculation. The shift from &ldquo;we need 20 million qubits&rdquo; to &ldquo;we might need 10,000&rdquo; happened in three months. The trajectory matters more than today&apos;s hardware state.
      </p>
      <p>
        Cloudflare put it bluntly in their post-quantum roadmap published this month: &ldquo;Q-Day has been pulled forward significantly from typical 2035+ timelines, with neutral atoms in the lead, and other approaches not far behind.&rdquo;
      </p>
      <p>
        Google followed with a formal 2029 deadline to transition their entire infrastructure to post-quantum cryptography. Android 17 is shipping with ML-DSA (post-quantum digital signatures) by default. As of their latest reporting, <strong>65% of human traffic to Cloudflare is now post-quantum encrypted</strong>.
      </p>
      <p><em>The web is already migrating. Blockchain hasn&apos;t started.</em></p>

      <hr />

      <h2>Why Blockchain Is More Exposed Than TLS</h2>
      <p>There&apos;s a subtle but critical difference between what Cloudflare is protecting and what your blockchain is exposing.</p>
      <p>TLS key exchange is ephemeral. The keys are fresh for every session. Even if a quantum adversary harvests ciphertext today, breaking the key later only reveals that session&apos;s traffic — not the ability to forge future transactions.</p>
      <p><strong>Blockchain public keys are permanent and on-chain.</strong></p>
      <p>
        When you receive funds to an Ethereum address and spend from it, your public key is visible in the transaction history. Anyone who archives that public key today can attempt to derive the private key later. Every wallet that has ever signed a transaction exposes its public key to &ldquo;harvest now, decrypt later&rdquo; attacks.
      </p>
      <p>
        ~6.9 million Bitcoin currently sit in wallets where the public key is already fully exposed on-chain. All of those funds can be targeted the moment a sufficiently powerful quantum computer exists.
      </p>

      <hr />

      <h2>What a Production Falcon-512 Blockchain Actually Looks Like</h2>
      <p>We didn&apos;t write this post from theory. QuantaLabs builds <a href="https://quantachain.org" target="_blank" rel="noopener noreferrer">Quantachain</a> — the first publicly live Layer 1 blockchain using NIST-standardized Falcon-512 lattice signatures from genesis. Here is what our engineering team measured in the April 2026 benchmark run (Node v0.7.1, Ubuntu 22.04, 4-core environment):</p>

      <h3>Cryptographic Core — Falcon-512</h3>
      <div className="overflow-x-auto my-6">
        <table>
          <thead><tr><th>Operation</th><th>Quantachain</th><th>ECDSA-P256</th><th>Overhead</th></tr></thead>
          <tbody>
            <tr><td>Sign</td><td><strong>0.227 ms</strong></td><td>~0.05 ms</td><td>~4.5×</td></tr>
            <tr><td>Verify (serial)</td><td><strong>0.006 µs</strong></td><td>~0.12 ms</td><td>&lt; 1× (faster)</td></tr>
            <tr><td>Verify (parallel, 4 cores)</td><td><strong>0.001 µs</strong></td><td>—</td><td>—</td></tr>
            <tr><td>Key generation</td><td>6.8 ms</td><td>~0.05 ms</td><td>Higher</td></tr>
            <tr><td>Signature size</td><td><strong>689 bytes avg</strong></td><td>64 bytes</td><td>~10.8×</td></tr>
            <tr><td>Public key size</td><td>897 bytes</td><td>64 bytes</td><td>~14×</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        The signing overhead is real — Falcon-512 costs approximately 4.5× more to sign than ECDSA-P256. But look at verification: Falcon-512 serial verification in our implementation runs at <strong>168,000+ verifications per second</strong>. With Rayon-based parallel batch verification across 4 physical cores, a block of 200 transactions verifies in <strong>0.169 ms total</strong> — a 7× speedup over serial.
      </p>

      <h3>Mempool and Throughput</h3>
      <div className="overflow-x-auto my-6">
        <table>
          <thead><tr><th>Metric</th><th>Result</th></tr></thead>
          <tbody>
            <tr><td>Mempool insert throughput</td><td><strong>230,041 tx/sec</strong></td></tr>
            <tr><td>Duplicate rejection latency (Bloom filter)</td><td><strong>3.3 µs</strong> (O(1))</td></tr>
            <tr><td>Fee-ordered top-1200 selection</td><td><strong>590 µs</strong></td></tr>
            <tr><td>Eviction under flood</td><td><strong>251,312 ops/sec</strong></td></tr>
          </tbody>
        </table>
      </div>

      <h3>Block Compression</h3>
      <p>Falcon-512 signatures are ~10× larger than ECDSA. We integrated zstd Level-3 block compression:</p>
      <div className="overflow-x-auto my-6">
        <table>
          <thead><tr><th>Block size</th><th>Raw</th><th>Compressed</th><th>Ratio</th><th>Time</th></tr></thead>
          <tbody>
            <tr><td>100 txs</td><td>171 KB</td><td>86 KB</td><td><strong>1.97×</strong></td><td>0.37 ms</td></tr>
            <tr><td>500 txs</td><td>856 KB</td><td>359 KB</td><td><strong>2.38×</strong></td><td>1.57 ms</td></tr>
            <tr><td>1,200 txs (full block)</td><td><strong>2,054 KB</strong></td><td><strong>838 KB</strong></td><td><strong>2.45×</strong></td><td>5.48 ms</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Live Node — End-to-End HTTP Pipeline</h3>
      <ul>
        <li><strong>Median round-trip latency (p50): 0.70 ms</strong> — full pipeline (HTTP + JSON deserialize + Falcon-512 verify + nonce + balance + mempool)</li>
        <li><strong>Concurrent flood throughput: 792 tx/sec</strong> (end-to-end, real network path)</li>
        <li><strong>Sequential acceptance rate: 100%</strong> — zero false rejections, zero signature errors</li>
      </ul>

      <hr />

      <h2>Falcon-512 vs. Every Alternative</h2>
      <div className="overflow-x-auto my-6">
        <table>
          <thead><tr><th>Scheme</th><th>Quantum-Safe</th><th>Sig Size</th><th>PK Size</th><th>Verify Speed</th></tr></thead>
          <tbody>
            <tr><td><strong>Falcon-512</strong></td><td>Yes</td><td><strong>~689 B</strong></td><td>897 B</td><td>~168K ops/s</td></tr>
            <tr><td>CRYSTALS-Dilithium3</td><td>Yes</td><td>3,309 B</td><td>1,952 B</td><td>High</td></tr>
            <tr><td>ECDSA-P256</td><td>No</td><td>64 B</td><td>64 B</td><td>~8K ops/s</td></tr>
            <tr><td>Ed25519</td><td>No</td><td>64 B</td><td>32 B</td><td>Very high</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Falcon-512 produces the smallest signature of any NIST-standardized PQC scheme.</strong> At ~689 bytes average, it is 4.8× smaller than Dilithium3.</p>

      <hr />

      <h2>What &ldquo;Harvest Now, Decrypt Later&rdquo; Means for Your Infrastructure Today</h2>
      <p>
        Nation-state-level adversaries have been operating HNDL campaigns since at least the Snowden-era disclosures. Every ECDSA-signed transaction in your history is already being harvested. You cannot retroactively re-sign historical transactions. You can only control what you build from now forward.
      </p>
      <p>
        The NSA&apos;s CNSA 2.0 framework mandates that <strong>all new national security systems must be quantum-safe by January 2027.</strong> NIST&apos;s deprecation timeline calls for RSA and ECDSA to be disallowed after 2035.
      </p>

      <hr />

      <h2>What We Built, and Why It&apos;s Different</h2>
      <p>Quantachain is not a proof of concept. It is a live mainnet-adjacent network with:</p>
      <ul>
        <li>Falcon-512 signatures from genesis — every transaction on every block, since block #1</li>
        <li>A <a href="https://chromewebstore.google.com/detail/quanta-wallet/glofbcgdmodmaohealombcgoapdbdaff" target="_blank" rel="noopener noreferrer">Chrome extension wallet</a> with Falcon-512 key generation, mnemonic recovery, and AES-256-GCM encrypted local storage</li>
        <li>External node operators running independent validating nodes</li>
        <li>A live block explorer at <a href="https://scan.quantachain.org" target="_blank" rel="noopener noreferrer">scan.quantachain.org</a></li>
        <li>A <a href="https://doi.org/10.5281/zenodo.18753528" target="_blank" rel="noopener noreferrer">Zenodo-published research paper</a> documenting the architecture</li>
      </ul>

      <hr />

      <h2>What You Should Do If You&apos;re Building on ECC Today</h2>
      <p><strong>Immediate:</strong></p>
      <ul>
        <li>Audit your signing scheme. Know every place ECDSA or Ed25519 is used — transaction signing, TLS certificates, internal service auth, HSM configuration.</li>
        <li>Migrate TLS key exchange to ML-KEM (this is already handled by Cloudflare for your edge, but your origin servers need manual configuration).</li>
      </ul>
      <p><strong>Medium term (before 2027):</strong></p>
      <ul>
        <li>If you are building a new chain or significant protocol upgrade, do not build on ECDSA. The engineering cost of migrating later — coordinating a hard fork, building parallel signing schemes, migrating wallet key material — will be an order of magnitude larger than building on Falcon-512 from genesis.</li>
        <li>Implement crypto agility in your signing layer. Even if you stay on ECDSA today, your codebase should be structured so the signing scheme is swappable without a full protocol rewrite.</li>
      </ul>
      <p>
        <strong>If you want help:</strong> QuantaLabs offers cryptographic readiness audits and Falcon-512 / Kyber-1024 migration engineering. We have done this on a production network. Reach us at <a href="mailto:contact@quantalabs.cc">contact@quantalabs.cc</a>.
      </p>

      <hr />

      <h2>The Line That Should Stay With You</h2>
      <blockquote>
        &ldquo;It is conceivable that the existence of early CRQCs may first be detected on the blockchain rather than announced.&rdquo;
        <footer>— Google Quantum AI, March 2026</footer>
      </blockquote>
      <p>
        Meaning: the first sign that Q-Day has arrived might not be a press release. It might be $2.5 trillion in ECC-secured digital assets draining to an unknown address.
      </p>
      <p><em>The migration window is open. Build accordingly.</em></p>
    </article>
  );
}

// ── CBOM BLOG POST CONTENT ──────────────────────────────────────────────────

function CBOMPost() {
  return (
    <article className="prose-custom">
      <p className="lead">
        In February 2026, India&apos;s Department of Science and Technology published the <em>Implementation of Quantum Safe Ecosystem in India</em> — a phased, time-bound migration roadmap with hard deadlines for Critical Information Infrastructure, government bodies, and private enterprises.
      </p>
      <p>
        Buried inside that document is a mandate that will affect every Indian company handling sensitive data:
      </p>
      <p>
        <strong>Cryptographic Bill of Materials (CBOM) submissions are mandatory from FY 2027-28.</strong>
      </p>
      <p>
        Most Indian CTOs don&apos;t know what a CBOM is. Most compliance teams have never heard the term. And most companies that need one have no idea where to start.
      </p>
      <p>
        This guide explains exactly what a CBOM is, why it matters, what the India DST mandate requires, and what your organisation needs to do before the deadline hits.
      </p>

      <hr />

      <h2>What Is a Cryptographic Bill of Materials (CBOM)?</h2>
      <p>
        A Cryptographic Bill of Materials is a structured inventory of every cryptographic asset your organisation uses — across every system, library, API, and third-party dependency.
      </p>
      <p>
        Think of it like a BOM in manufacturing. Before you can upgrade a component in a product, you need to know every part, where it&apos;s used, and what it connects to. The same logic applies to cryptography.
      </p>
      <p>A complete CBOM captures:</p>
      <ul>
        <li><strong>Every algorithm in use</strong> — RSA-2048, ECDSA, AES-128, SHA-256, and so on</li>
        <li><strong>Where each algorithm is deployed</strong> — TLS layer, database encryption, API request signing, JWT tokens, code signing, certificate infrastructure</li>
        <li><strong>Which libraries implement them</strong> — OpenSSL version, BouncyCastle, libsodium, native platform APIs</li>
        <li><strong>Key sizes and certificate details</strong> — expiry dates, key lengths, rotation policies</li>
        <li><strong>Third-party dependencies</strong> — every vendor SDK, cloud provider service, or payment gateway that uses cryptography under the hood</li>
        <li><strong>Quantum vulnerability status</strong> — which algorithms are broken by a Cryptographically Relevant Quantum Computer (CRQC) and which are safe</li>
      </ul>

      <hr />

      <h2>Why Does CBOM Matter Right Now?</h2>
      
      <h3>The Harvest Now, Decrypt Later Threat</h3>
      <p>
        Nation-state actors are not waiting for quantum computers to arrive before they act.
      </p>
      <p>
        They are harvesting encrypted data today — your transaction records, KYC documents, API payloads, internal communications — and storing it. The moment a sufficiently powerful quantum computer exists, that stored data becomes readable. Retroactively. All of it.
      </p>
      <p>
        This is called the <strong>Harvest Now, Decrypt Later (HNDL)</strong> attack vector. It is not theoretical. The US NSA, CISA, and now India&apos;s DST have all acknowledged it as a present-day threat.
      </p>
      <p>
        The implication is stark: your data that is encrypted today, using RSA or ECDSA, is already at risk.
      </p>

      <h3>Quantum Computers Break Most Encryption in Use Today</h3>
      <p>
        The algorithms protecting most of the world&apos;s data — RSA, ECDSA, ECDH, Diffie-Hellman — are all based on mathematical problems that quantum computers can solve efficiently using Shor&apos;s algorithm.
      </p>
      <p>
        When a Cryptographically Relevant Quantum Computer arrives (estimated between 2028 and 2035 by various intelligence agencies), these algorithms offer zero protection.
      </p>
      <p>
        Symmetric algorithms like AES-256 are less affected — Grover&apos;s algorithm halves their effective key length, making AES-256 equivalent to AES-128 against a quantum adversary. Manageable, but worth noting.
      </p>
      <p>The algorithms you need to migrate to are NIST-standardised post-quantum algorithms:</p>
      <ul>
        <li><strong>ML-KEM (Kyber-1024)</strong> — for key encapsulation and encryption</li>
        <li><strong>ML-DSA (Dilithium)</strong> — for digital signatures</li>
        <li><strong>SLH-DSA (SPHINCS+)</strong> — for hash-based signatures</li>
      </ul>
      <p>None of these are broken by known quantum attacks.</p>

      <h3>The Migration Takes Years — Not Months</h3>
      <p>This is the most important thing most organisations underestimate.</p>
      <p>A full PQC migration for a complex financial system is not a library swap. It involves:</p>
      <ul>
        <li>Identifying every cryptographic touchpoint (the CBOM)</li>
        <li>Assessing which systems are highest risk</li>
        <li>Testing PQC algorithms for performance and compatibility</li>
        <li>Updating certificate infrastructure</li>
        <li>Coordinating with third-party vendors</li>
        <li>Regulatory validation and audit</li>
      </ul>
      <p>
        For a mid-sized Indian exchange or NBFC, this process realistically takes 18-36 months end to end.
      </p>
      <p>
        FY 2027-28 starts in April 2027. That is less than 12 months away. Organisations that have not started the CBOM process today are already behind.
      </p>

      <hr />

      <h2>India&apos;s DST PQC Mandate — What It Actually Says</h2>
      <p>
        India&apos;s <em>Implementation of Quantum Safe Ecosystem</em> roadmap published in February 2026 establishes a phased migration timeline:
      </p>
      
      <p><strong>Phase 1 (Current — FY 2026-27)</strong></p>
      <ul>
        <li>Awareness and inventory</li>
        <li>Organisations begin identifying their cryptographic assets</li>
        <li>TEC, STQC, and BIS begin establishing testing laboratories</li>
      </ul>

      <p><strong>Phase 2 (FY 2027-28)</strong></p>
      <ul>
        <li>CBOM submissions become mandatory for Critical Information Infrastructure</li>
        <li>Dedicated Tier-1 and Tier-2 quantum-safe testing laboratories become operational</li>
        <li>Private enterprises in financial services and data-sensitive sectors required to submit initial cryptographic inventories</li>
      </ul>

      <p><strong>Phase 3 (FY 2028-30)</strong></p>
      <ul>
        <li>Active migration begins</li>
        <li>PQC-compliant systems required for new infrastructure</li>
        <li>Full audit and certification regime operational</li>
      </ul>

      <p><strong>Who Is Affected</strong></p>
      <p>The mandate explicitly covers:</p>
      <ul>
        <li>Banks and NBFCs</li>
        <li>Payment processors and fintech platforms</li>
        <li>Cryptocurrency exchanges</li>
        <li>Healthcare data platforms</li>
        <li>Telecom infrastructure</li>
        <li>Government contractors and vendors</li>
      </ul>
      <p>If your organisation handles sensitive financial or personal data at scale, you are in scope.</p>

      <hr />

      <h2>What Does a CBOM Actually Look Like?</h2>
      <p>
        A CBOM is a structured document — not a spreadsheet, not a vague audit report. It is a machine-readable, versioned inventory that maps every cryptographic dependency in your stack.
      </p>
      <p>Here is a simplified example of what a CBOM entry looks like:</p>

      <pre className="bg-gray-50 p-4 rounded-xl text-sm text-gray-800 overflow-x-auto border border-gray-100 my-6 font-mono">
{`{
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
}`}
      </pre>

      <p>
        A complete enterprise CBOM may contain hundreds or thousands of such entries, covering every service, microservice, third-party integration, and infrastructure component.
      </p>
      <p>The CBOM is not a one-time document. It is a living inventory that must be maintained as your stack evolves.</p>

      <hr />

      <h2>The Five Phases of a CBOM Audit</h2>
      
      <h3>Phase 1 — Discovery</h3>
      <p>Identify every system that uses cryptography. This includes:</p>
      <ul>
        <li>Application layer (APIs, authentication, session management)</li>
        <li>Data layer (database encryption, field-level encryption, backup encryption)</li>
        <li>Transport layer (TLS certificates, mTLS configurations)</li>
        <li>Infrastructure layer (cloud KMS, HSMs, secrets managers)</li>
        <li>Third-party layer (payment gateways, identity providers, vendor SDKs)</li>
      </ul>
      <p>Discovery is typically the most time-consuming phase. Most organisations discover 30-50% more cryptographic touchpoints than they initially expected.</p>

      <h3>Phase 2 — Classification</h3>
      <p>For each discovered asset, classify:</p>
      <ul>
        <li><strong>Algorithm type</strong> — asymmetric, symmetric, hash, MAC</li>
        <li><strong>Quantum vulnerability</strong> — broken by Shor&apos;s, weakened by Grover&apos;s, or quantum-safe</li>
        <li><strong>Data sensitivity</strong> — what data does this algorithm protect and for how long must it remain confidential?</li>
        <li><strong>Operational criticality</strong> — what breaks if this algorithm is compromised?</li>
      </ul>

      <h3>Phase 3 — Risk Scoring</h3>
      <p>Assign a quantum risk score to each asset based on:</p>
      <ul>
        <li>Algorithm vulnerability</li>
        <li>Data longevity (data encrypted today that must remain confidential for 10+ years is highest risk)</li>
        <li>System criticality</li>
        <li>Migration complexity</li>
      </ul>
      <p>This produces a prioritised migration queue — not everything needs to move at once, but the highest-risk assets need to move first.</p>

      <h3>Phase 4 — CBOM Document Generation</h3>
      <p>Compile the structured CBOM document in a format compatible with regulatory submission. Include:</p>
      <ul>
        <li>Executive summary of quantum exposure</li>
        <li>Full cryptographic inventory</li>
        <li>Risk-scored migration priority list</li>
        <li>Recommended replacement algorithms</li>
        <li>Estimated migration timeline and effort</li>
      </ul>

      <h3>Phase 5 — Ongoing Maintenance</h3>
      <p>The CBOM must be updated when:</p>
      <ul>
        <li>New services are added</li>
        <li>Libraries are upgraded</li>
        <li>Third-party vendors change their cryptographic implementations</li>
        <li>NIST or India DST publish updated algorithm recommendations</li>
      </ul>

      <hr />

      <h2>Common Mistakes Indian Companies Make</h2>
      <p><strong>Mistake 1 — Assuming only their own code matters</strong></p>
      <p>Most organisations audit their own codebase and stop there. But your cryptographic exposure includes every third-party library, every vendor SDK, every cloud service you use. A payment gateway using RSA-2048 is your problem, not just theirs.</p>

      <p><strong>Mistake 2 — Treating it as a one-time exercise</strong></p>
      <p>A CBOM done in 2026 and forgotten is worthless by 2028. Cryptographic inventories must be maintained continuously.</p>

      <p><strong>Mistake 3 — Waiting for a vendor to solve it</strong></p>
      <p>Your cloud provider will eventually offer PQC-compatible services. Your payment gateway will eventually upgrade. But waiting for vendors to migrate for you means you have no visibility into your risk exposure in the meantime — and you miss the regulatory deadline regardless.</p>

      <p><strong>Mistake 4 — Underestimating discovery complexity</strong></p>
      <p>The average enterprise has 3-5x more cryptographic dependencies than their engineering team initially estimates. Starting discovery late means running out of time before the migration even begins.</p>

      <p><strong>Mistake 5 — Confusing TLS migration with full PQC migration</strong></p>
      <p>Upgrading your TLS layer to support post-quantum key exchange is one step. It does not address application-layer signing keys, database encryption, backup encryption, or code signing. Full PQC compliance requires addressing all layers.</p>

      <hr />

      <h2>How QuantaLabs Helps</h2>
      <p>
        QuantaLabs is India&apos;s first dedicated post-quantum cryptography migration company, incorporated in Coimbatore, Tamil Nadu in May 2026.
      </p>
      <p>
        We built QuantaChain — a live 131,000-block blockchain using Falcon-512 post-quantum signatures from genesis. We published peer-reviewed research on new lattice-based hardness assumptions. We shipped QuantaCipher — a developer API for Kyber-1024 encryption. We did not read about post-quantum cryptography. We built with it.
      </p>
      <p>Our CBOM Audit service covers all five phases described above and delivers:</p>
      <ul>
        <li>A complete, structured CBOM document ready for regulatory submission</li>
        <li>A risk-scored migration priority report</li>
        <li>A phased migration roadmap mapped to India DST deadlines</li>
        <li>An executive summary for board and compliance reporting</li>
      </ul>
      <p><strong>Who this is for:</strong></p>
      <ul>
        <li>Indian crypto exchanges and Web3 platforms</li>
        <li>NBFCs and fintech companies</li>
        <li>Payment processors handling sensitive financial data</li>
        <li>Any organisation that must comply with India&apos;s DST PQC mandate</li>
      </ul>
      <p><strong>Timeline:</strong> A standard CBOM audit engagement takes 3-4 weeks for a mid-sized organisation.</p>
      <p><strong>Starting price:</strong> ₹1.5L for the initial CBOM audit and risk assessment.</p>

      <hr />

      <h2>Frequently Asked Questions</h2>
      <p><strong>Is my company affected if we&apos;re not a bank?</strong></p>
      <p>If you handle sensitive financial data, personal data, or operate Critical Information Infrastructure, yes. Cryptocurrency exchanges, payment processors, lending platforms, and insurtech companies are all explicitly in scope under India&apos;s DST framework.</p>

      <p><strong>We use AWS/Azure/GCP — doesn&apos;t that handle encryption for us?</strong></p>
      <p>Cloud providers handle infrastructure-layer encryption. Your application-layer cryptography — API signing keys, JWT tokens, database field encryption, user authentication — is your responsibility. Cloud providers are also in the process of migrating their own services; their timelines may not align with your regulatory deadlines.</p>

      <p><strong>How long does a CBOM audit take?</strong></p>
      <p>For a mid-sized Indian fintech or exchange, 3-4 weeks for discovery and classification. Larger organisations with complex microservice architectures may require 6-8 weeks.</p>

      <p><strong>What happens if we miss the FY 2027-28 deadline?</strong></p>
      <p>India&apos;s DST framework is moving toward an enforcement regime similar to GDPR in Europe. Early indications suggest penalties for Critical Information Infrastructure operators who fail to submit CBOM documentation. Beyond regulatory risk, any organisation that has not inventoried its cryptographic assets by 2028 will face a rushed, expensive migration under deadline pressure.</p>

      <p><strong>Can we do the CBOM internally?</strong></p>
      <p>Yes — but most engineering teams underestimate the scope of discovery, lack familiarity with quantum vulnerability classification, and don&apos;t have experience producing regulator-ready documentation. An external CBOM audit also provides independence that internal audits cannot.</p>

      <hr />

      <h2>Start Before the Deadline</h2>
      <p>FY 2027-28 starts in April 2027. A CBOM audit for a mid-sized organisation takes 3-4 weeks minimum. The migration that follows takes 18-36 months.</p>
      <p>The organisations that start today will migrate calmly, on their own timeline, with full visibility into their risk exposure.</p>
      <p>The organisations that wait until 2027 will be scrambling.</p>
      <p><strong>Book a free 30-minute CBOM consultation with QuantaLabs.</strong></p>
      <p>We will walk through your current stack, estimate your quantum exposure, and tell you exactly what a full CBOM audit would involve for your organisation — no obligation.</p>
      <p>
        <a href="https://quantalabs.cc" target="_blank" rel="noopener noreferrer">
          <strong>Schedule a Free Consultation → quantalabs.cc</strong>
        </a>
      </p>

    </article>
  );
}

// ── PAGE ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const tagColors: Record<string, string> = {
    "Post-Quantum": "bg-emerald-50 text-emerald-700 border-emerald-100",
    "ECDSA": "bg-red-50 text-red-700 border-red-100",
    "Falcon-512": "bg-blue-50 text-blue-700 border-blue-100",
    "Security": "bg-gray-100 text-gray-700 border-gray-200",
    "CBOM": "bg-purple-50 text-purple-700 border-purple-100",
  };

  const components: Record<string, React.FC> = {
    "ecdsa-liability-2026": ECDSAPost,
    "cbom-india-compliance-guide": CBOMPost,
  };
  const PostContent = components[slug];
  if (!PostContent) notFound();

  return (
    <div className="pt-24 min-h-screen pb-32 bg-white">

      {/* ── BACK NAV ──────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mb-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-black transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      </div>

      {/* ── HERO HEADER ───────────────────────────────────────────── */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[10px] font-black px-2.5 py-1 rounded-full border ${tagColors[tag] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-black leading-[1.05] mb-8">
          {post.title}
        </h1>

        <p className="text-xl text-gray-500 font-medium leading-relaxed mb-8 max-w-3xl">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-6 pb-10 border-b border-gray-100">
          <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
            <User className="w-4 h-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </div>
        </div>
      </header>

      {/* ── ARTICLE BODY ──────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <style>{`
          .prose-custom { color: #1a1a1a; font-size: 1.0625rem; line-height: 1.8; }
          .prose-custom h2 { font-size: 1.75rem; font-weight: 800; letter-spacing: -0.03em; color: #000; margin: 3rem 0 1rem; line-height: 1.2; }
          .prose-custom h3 { font-size: 1.25rem; font-weight: 700; color: #111; margin: 2rem 0 0.75rem; }
          .prose-custom p { margin: 1.25rem 0; color: #374151; }
          .prose-custom p.lead { font-size: 1.15rem; color: #1f2937; font-weight: 500; }
          .prose-custom a { color: #059669; font-weight: 600; text-decoration: underline; text-underline-offset: 3px; }
          .prose-custom a:hover { color: #047857; }
          .prose-custom strong { color: #111; font-weight: 700; }
          .prose-custom em { color: #374151; font-style: italic; }
          .prose-custom hr { border: none; border-top: 1px solid #e5e7eb; margin: 2.5rem 0; }
          .prose-custom blockquote { border-left: 3px solid #00E599; padding: 1rem 1.5rem; margin: 2rem 0; background: #f9fafb; border-radius: 0 0.75rem 0.75rem 0; }
          .prose-custom blockquote p { color: #111; font-size: 1.1rem; font-style: italic; font-weight: 600; margin: 0 0 0.5rem; }
          .prose-custom blockquote footer { font-size: 0.8rem; color: #6b7280; font-style: normal; font-weight: 700; }
          .prose-custom ul { list-style: disc; padding-left: 1.75rem; margin: 1.25rem 0; }
          .prose-custom ul li { margin: 0.5rem 0; color: #374151; }
          .prose-custom table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
          .prose-custom th { background: #f3f4f6; font-weight: 800; text-align: left; padding: 0.6rem 1rem; border: 1px solid #e5e7eb; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #374151; }
          .prose-custom td { padding: 0.6rem 1rem; border: 1px solid #e5e7eb; color: #1f2937; }
          .prose-custom tr:hover td { background: #f9fafb; }
          .prose-custom pre { margin: 1.5rem 0; }
        `}</style>
        <PostContent />
      </div>

      {/* ── REFERENCES ────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
          <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6">References</h2>
          <ul className="space-y-2 text-sm text-gray-500">
            {[
              ["Google Quantum AI — Safeguarding cryptocurrency by disclosing quantum vulnerabilities responsibly (March 2026)", "https://research.google/blog/safeguarding-cryptocurrency-by-disclosing-quantum-vulnerabilities-responsibly/"],
              ["Oratomic/Caltech/UCB — Shor's algorithm with as few as 10,000 atomic qubits", "https://arxiv.org/pdf/2603.28627"],
              ["Project Eleven — Q-Day Prize awarded (April 24, 2026)", "https://blog.projecteleven.com/posts/project-eleven-awards-1-btc-q-day-prize-for-largest-quantum-attack-on-elliptic-curve-cryptography-to-date"],
              ["Cloudflare — Post-Quantum Roadmap (2026)", "https://blog.cloudflare.com/post-quantum-roadmap/"],
              ["Google — Cryptography migration timeline (2029 commitment)", "https://blog.google/innovation-and-ai/technology/safety-security/cryptography-migration-timeline/"],
              ["NIST IR 8547 — PQC deprecation timeline", "https://csrc.nist.gov/pubs/ir/8547/ipd"],
              ["NSA CNSA 2.0 — Post-quantum cybersecurity resources", "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"],
              ["Quantachain Research — QUANTA: Engineering a Production-Ready Post-Quantum Blockchain (Zenodo)", "https://doi.org/10.5281/zenodo.18753528"],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black transition-colors font-medium hover:underline underline-offset-2"
                >
                  {label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── FOOTER CTA ────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-[2rem] p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E599] opacity-[0.04] rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <div className="w-12 h-12 bg-[#00E599]/10 border border-[#00E599]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#00E599] font-extrabold text-xl">Q</div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
              QuantaLabs — Building the Post-Quantum Future
            </h3>
            <p className="text-gray-400 font-medium mb-8 max-w-lg mx-auto leading-relaxed">
              The engineering lab behind Quantachain — the first live post-quantum blockchain running Falcon-512 in production. We publish our benchmarks, architecture, and research openly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://quantachain.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00E599] text-black font-bold rounded-xl hover:bg-white transition-all text-sm"
              >
                Visit Quantachain <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-700 text-white font-bold rounded-xl hover:border-white transition-all text-sm"
              >
                Enterprise Enquiries
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
