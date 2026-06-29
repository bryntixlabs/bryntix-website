# Bryntix Labs: Business & Legal Setup Guide

This guide outlines the foundational business registration, taxation, banking, and legal requirements for establishing **Bryntix Labs** as a premier software services and AI solutions company in India.

---

## 1. Business Registration Recommendations

For a technology startup specializing in AI, Web, Mobile, and UI/UX design, choosing the right legal entity is critical for credibility, liability protection, and future fundraising.

### Entity Types Comparison

| Criteria | Sole Proprietorship | Limited Liability Partnership (LLP) | Private Limited Company (Pvt. Ltd.) |
| :--- | :--- | :--- | :--- |
| **Liability** | Unlimited personal liability | Limited to partner's contribution | Limited to shareholding |
| **Credibility** | Low (not preferred by MNC clients) | Medium-High | Very High (preferred by clients & VCs) |
| **Tax Rate** | Slab rates (up to 30% + surcharge) | 30% flat + cess | 15% to 22% flat + cess (based on regime) |
| **Funding** | Cannot raise equity capital | Difficult to raise venture capital | Easy to issue shares to VCs/Angel investors |
| **Compliance Cost** | Low | Medium | High (Annual audits, ROC filings) |

### Recommended Choice: Private Limited Company (Pvt. Ltd.)
> [!TIP]
> If you plan to build proprietary AI products, raise venture capital, or offer ESOPs to attract top engineering talent, register as a **Private Limited Company**. If you intend to run purely as a bootstrapped service agency, an **LLP** is a cost-effective alternative.

### Step-by-Step Registration Process (Pvt. Ltd.)
1. **Obtain DSC (Digital Signature Certificate)**: For all proposed directors (minimum 2).
2. **Apply for DIN (Director Identification Number)**: Obtained during incorporation.
3. **Name Approval (RUN - Reserve Unique Name)**:
   - Apply on the MCA portal.
   - Recommended names: *Bryntix Labs Private Limited*, *Bryntix Technology Solutions Private Limited*.
4. **SPICe+ Incorporation Form**: 
   - Submit PAN, TAN, EPFO, ESIC, and Professional Tax applications simultaneously.
   - File the Articles of Association (AOA) and Memorandum of Association (MOA) defining the business scope (Software Development, AI/ML consultancies).
5. **Receive Certificate of Incorporation (COI)**: Issued by the Registrar of Companies (ROC), along with PAN and TAN.

---

## 2. GST (Goods and Services Tax) Requirements

GST registration is mandatory for service providers in India under specific criteria.

### Registration Thresholds
- **Turnover Threshold**: Mandatory if annual aggregate turnover exceeds **₹20 Lakhs** (₹10 Lakhs for North-Eastern and hill states).
- **Interstate Supplies**: Mandatory if you provide services to clients outside India or in other Indian states (even if turnover is below ₹20 Lakhs).
- **E-commerce**: Mandatory if selling services through e-commerce operators.

### GST on Export of Services
> [!IMPORTANT]
> Exports of services from India are treated as **Zero-Rated Supplies**. You do not need to pay GST on export invoices, provided you satisfy the following conditions:

1. **Letter of Undertaking (LUT)**: File an LUT online (Form GST RFD-11) at the start of each financial year. This allows you to export services without paying IGST upfront.
2. **Foreign Exchange Realization**: Payment must be received in convertible foreign exchange (USD, EUR, GBP, etc.) within 1 year from the invoice date.
3. **FIRC (Foreign Inward Remittance Certificate)**: Obtain this from your bank or payment processor (e.g., Stripe, PayPal, Wise) for every international transaction as proof of export.

---

## 3. PAN & TAN Requirements

- **Permanent Account Number (PAN)**: A unique 10-character alphanumeric identifier issued by the Income Tax Department. For a Pvt. Ltd. or LLP, it is generated automatically with the Certificate of Incorporation.
- **Tax Deduction and Collection Account Number (TAN)**: Mandatory for companies that need to deduct tax at source (TDS) when paying vendors, contractors, or salaries (under Section 192, 194J, etc.).

---

## 4. Business Verification Documents Checklist

Keep these digitized, high-resolution documents in a secure, shared drive for rapid verification (Stripe, AWS, Bank Accounts, Apple Developer Program, etc.):

- [ ] Certificate of Incorporation (COI)
- [ ] Memorandum (MOA) and Articles of Association (AOA) / LLP Agreement
- [ ] Company PAN Card
- [ ] GST Registration Certificate (Form REG-06)
- [ ] Utility Bill (Electricity/Internet) in the company's name (not older than 2 months)
- [ ] Board Resolution authorizing the opening of bank accounts/gateways
- [ ] Passport, Aadhaar, and PAN Cards of all Directors/Partners
- [ ] Digital Signature Certificate (DSC) files and passwords

---

## 5. Organization Verification (DUNS Number)

To publish apps on the **Apple App Store** or **Google Play Console** under an organization account, you must obtain a **D-U-N-S (Data Universal Numbering System)** number from Dun & Bradstreet.

### Process
1. Visit the D&B/Apple portal.
2. Search if Bryntix Labs is already listed. If not, request a new DUNS.
3. Provide COI, tax registrations, utility bills, and official domain email address.
4. Dun & Bradstreet will verify via phone call/email within 5-7 business days (Free of charge).

---

## 6. Domain Email Setup & DNS Configurations

Deliverability is crucial for client outreach and proposal submissions. Ensure the following DNS records are configured in your domain registrar (e.g., Cloudflare, Namecheap):

### DNS Records Table

| Record Type | Host / Name | Value / Target | Purpose |
| :--- | :--- | :--- | :--- |
| **MX** | `@` | `aspmx.l.google.com.` (or workspace server) | Directs email to the inbox provider |
| **TXT (SPF)** | `@` | `v=spf1 include:_spf.google.com ~all` | Prevents email spoofing by listing authorized IPs |
| **TXT (DKIM)** | `google._domainkey` | `v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BA...` | Cryptographically signs emails to verify sender |
| **TXT (DMARC)** | `_dmarc` | `v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc-reports@bryntix.com` | Defines policy for emails failing SPF/DKIM checks |

---

## 7. Google Workspace Setup

Organize communication using a clean Google Workspace organizational unit (OU) model.

### Recommended Email Aliases & Groups
- `hello@bryntix.com` (Catch-all info/sales group)
- `billing@bryntix.com` (Invoicing, Stripe notices, vendor bills)
- `security@bryntix.com` (Vulnerability disclosure, API notices)
- `dev@bryntix.com` (Engineering notices, GitHub alerts)

---

## 8. Tax Profile & Compliance Calendar

### Key Indian Corporate Tax Rules
- **Income Tax**: Pvt. Ltd. companies can opt for the concessional tax rate under Section 115BAA (22% flat + 10% Surcharge + 4% Cess = **25.17%** overall tax rate).
- **TDS (Tax Deducted at Source)**: Bryntix Labs must deduct TDS when making payments to third-party consultants (10% under 194J), office rent (10% under 194I), and contractor charges (2% under 194C).
- **GST Filings**: GSTR-1 (Outward Supplies) by the 11th of every month, GSTR-3B (Summary return and tax payment) by the 20th of every month.

---

## 9. Business Bank Account Setup

Open a corporate current account with a bank that offers robust API integrations, competitive international transfer rates (inward remittance), and integrations with accounting platforms.

### Recommended Banks
1. **ICICI Bank / HDFC Bank**: Best for traditional branch networks, local trade services, and capital transactions.
2. **Axis Bank**: Great corporate API suite and digital onboarding.
3. **RazorpayX / Fi Money**: Ideal for modern software startups looking for automated payroll and instant vendor payouts.

### Required Documents for Bank Account
- Certificate of Incorporation (COI)
- Memorandum and Articles of Association (MOA & AOA)
- Board Resolution signed by all directors
- PAN Card of the Company
- Aadhaar and PAN Cards of authorized signatories
- GST Registration Certificate

---

## 10. Privacy Policy Requirements

Your privacy policy must comply with the Indian **Information Technology Act, 2000 (Section 43A)**, the **SPDI (Sensitive Personal Data or Information) Rules, 2011**, and global standards like **GDPR** (Europe) and **CCPA** (California) if dealing with international clients.

### Critical Sections
- **Data Collection**: Details on what data is collected (Name, Email, Device IDs, Analytics, AI prompts/input).
- **Data Protection**: Encryption in transit and at rest (TLS 1.3, AES-256).
- **GDPR Rights**: Right to access, rectification, erasure (right to be forgotten), and data portability.
- **AI Processing Disclaimer**: Notice that user data/prompts may be processed by third-party LLM providers (e.g., OpenAI, Anthropic, Google Gemini APIs) and outline the security measures in place.

---

## 11. Terms & Conditions

The Terms & Conditions form a binding contract between Bryntix Labs and the users of its products/services.

### Key Clauses
- **Intellectual Property (IP)**: All rights, titles, and interests in the software, UI/UX designs, and code remain the exclusive property of Bryntix Labs until final invoice settlement (for services) or permanently (for SaaS).
- **Limitation of Liability**: Bryntix Labs is not liable for indirect, incidental, or consequential damages (e.g., loss of revenue due to system downtime). Cumulative liability should be capped at the amount paid by the client in the preceding 3 months.
- **Governing Law & Jurisdiction**: The agreement is governed by the laws of India, with exclusive jurisdiction in the courts of **Bangalore, India** (or your primary operating city).
- **Arbitration**: Disputes will be settled via arbitration under the Indian Arbitration and Conciliation Act, 1996.

---

## 12. Refund Policy

For a software development and consulting company, a structured, non-ambiguous refund policy is necessary to protect cash flow.

### Recommended Policy Model: Milestone-Based Payments
- **Discovery & UX Phase**: 25% non-refundable advance required to start work.
- **Mid-Project Milestones**: Payments are tied to deliverables. Once a milestone is reviewed and signed off by the client, no refunds can be claimed for that phase.
- **Termination Clause**: Either party can terminate the agreement with a 30-day written notice. The client is obligated to pay for all work completed up to the termination date.

---

## 13. Website Requirements

Your public website is your primary business card. Ensure it has:

1. **Company Legal Name & Address**: Displayed in the footer (complies with Indian Companies Act requirements).
2. **Corporate Identity Number (CIN)**: Displayed on the 'Contact Us' page.
3. **Official Links**: Privacy Policy, Terms & Conditions, Refund Policy, and Disclaimer.
4. **Cookie Consent Banner**: With granular opt-in options for GDPR compliance.
