# Bryntix Labs: Execution Toolkit

This toolkit provides actionable tools, cost breakdowns, step-by-step checklists, and roadmaps to kickstart the launch of **Bryntix Labs** in India.

---

## 1. Complete Company Setup Checklist

Follow this sequence to go from concept to fully operational.

### Phase 1: Legal & Identity (Days 1–15)
- [ ] Brainstorm and reserve name (e.g., *Bryntix Labs Pvt. Ltd.*) on MCA portal.
- [ ] Obtain DSC (Digital Signature Certificates) for all directors.
- [ ] File SPICe+ form for incorporation, including PAN and TAN applications.
- [ ] Receive Certificate of Incorporation (COI).
- [ ] Purchase domain name (`bryntix.com`) and set up DNS (MX, SPF, DKIM, DMARC).

### Phase 2: Financials & Admin (Days 16–30)
- [ ] Open a corporate current account with ICICI, HDFC, or Axis Bank.
- [ ] Apply for GST Registration and file a Letter of Undertaking (LUT) for service exports.
- [ ] Register for a DUNS Number to secure organization accounts on Apple/Google.
- [ ] Set up Google Workspace (set up standard alias emails).
- [ ] Integrate payment gateways (Razorpay, Stripe) with the business bank account.

### Phase 3: Infrastructure & Brand (Days 31–45)
- [ ] Draft legal templates (Privacy Policy, Terms of Service, NDA, MSA, SOW).
- [ ] Design brand identity (Logo guidelines, typography, and slides).
- [ ] Build and launch the portfolio website (Next.js/React, deployed on Vercel).
- [ ] Provision engineering tools (GitHub, Linear, AWS/GCP, Doppler).
- [ ] Set up CRM (HubSpot) and Accounting software (Zoho Books).

---

## 2. Estimated Setup Costs in India (LLP vs. Private Limited)

Below is a realistic breakdown of initial registration and infrastructure costs in Indian Rupees (INR) and US Dollars (USD equivalent).

| Setup Component | Pvt. Ltd. Cost (INR) | LLP Cost (INR) | Freq. | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **MCA Incorporation & Gov Fees** | ₹6,000 | ₹3,000 | One-Time | Includes ROC fees, stamp duty, PAN, TAN |
| **DSC (Digital Signatures - 2 Nos)**| ₹2,000 | ₹2,000 | 2 Years | Mandatory for online filing |
| **Professional Agent Fee** | ₹5,000 - ₹10,000 | ₹4,000 - ₹7,000 | One-Time | CA/CS or platform fee (e.g., IndiaFilings) |
| **GST Registration** | ₹0 | ₹0 | One-Time | Free (if done directly; CA may charge ₹1,500) |
| **Google Workspace (5 Users)** | ₹1,500 / month | ₹1,500 / month | Monthly | ₹300 per user/month (Starter tier) |
| **Domain Purchase & DNS Hosting** | ₹1,000 | ₹1,000 | Annual | e.g., Namecheap, Cloudflare Registrar |
| **Website & Tech Stack (Basic)** | ₹0 - ₹3,000 / mo | ₹0 - ₹3,000 / mo | Monthly | Free tiers of Vercel/GitHub; paid tools later |
| **Legal Templates Drafting** | ₹5,000 - ₹15,000 | ₹5,000 - ₹15,000 | One-Time | Standard templates customized by lawyer |
| **Total Initial Outlay** | **₹20,000 - ₹35,000**<br>(~$240 - $420) | **₹15,000 - ₹28,000**<br>(~$180 - $340) | | **Excluding physical office rent & hardware** |

---

## 3. Recommended Tools & Software Stack

We recommend this highly efficient SaaS stack to keep overhead low while matching enterprise standards.

```text
Operations Stack:
[HubSpot CRM] ──> [Linear Project Board] ──> [GitHub + Actions] ──> [Vercel Hosting]
       │                                                                  ▲
       └───> [Zoho Books] ───> [Razorpay / Stripe Payments] ──────────────┘
```

- **Communication & Docs**: Google Workspace, Slack (Client communication), Notion (Internal Wiki / SOPs).
- **Design & UX/UI**: Figma (Collaboration and design systems).
- **Project Management**: Linear (Sprints, tasks, bug tracking).
- **Code & Version Control**: GitHub (Organizations account, private repos).
- **Hosting & Infrastructure**: Vercel (Frontend), AWS or GCP (Backend & AI services), Cloudflare (DNS, SSL, CDN).
- **Finance & Invoicing**: Zoho Books (GST compliance), Wise Business & Stripe (International clients).
- **Secrets Management**: Doppler (Centralized environment variables).

---

## 4. 30-60-90 Day Business Roadmap

### Days 1–30: The Launch Phase
- **Goal**: Complete legal existence, brand identity, and setup infrastructure.
- **Key Milestones**:
  - Incorporate Bryntix Labs Private Limited.
  - Setup bank accounts, PAN, TAN, GST, and LUT.
  - Configure domain and Google Workspace.
  - Design logo, visual guidelines, and SOW templates.

### Days 31–60: The Presence Phase
- **Goal**: Launch website, setup developer environments, and start marketing outreach.
- **Key Milestones**:
  - Launch high-performance, dark-themed portfolio website.
  - Setup Linear, GitHub, and CI/CD pipelines.
  - Establish content calendar on LinkedIn/Twitter for thought leadership.
  - Implement outbound cold-email/ABM playbooks targeting US/EU clients.

### Days 61–90: The Delivery Phase
- **Goal**: Secure the first 2 paying clients and establish smooth development operations.
- **Key Milestones**:
  - Close 1st major contract using the productized consulting model.
  - Execute project onboarding process and run the first two 2-week sprints.
  - Automate invoicing, GST filing tracking, and inward remittance e-FIRC collection.
  - Refine development templates to cut down future project setup times.

---

## 5. Frequently Asked Questions (FAQs)

### Q: Do I need a physical office address to register the company in India?
**A**: Yes, MCA requires a registered office address to send official correspondence. However, it does not need to be a commercial office. You can use your residential address or a virtual office service (coworking spaces like WeWork offer virtual office plans with NOC and utility bills for GST/ROC registration).

### Q: How do we avoid paying GST on services sold to international clients?
**A**: You must file a **Letter of Undertaking (LUT)** at the start of each financial year on the GST portal. When invoicing an international client, include the text *"Export of services without payment of tax under Letter of Undertaking (LUT) filed"* on your invoice and set the GST rate to 0%. Ensure payments are received in foreign currency within the specified period.

### Q: What is an e-FIRC, and why is it critical?
**A**: An **electronic Foreign Inward Remittance Certificate** is a document issued by an authorized dealer bank in India confirming that foreign funds have arrived and been converted into Indian Rupees. Under GST law, you must keep FIRCs for all export transactions to prove that the services were indeed exported and qualify for zero-rated GST.

### Q: How do we legally protect our AI IP when using API providers like OpenAI?
**A**: Ensure your client agreements state that while third-party AI models are used to process data, no client proprietary code or sensitive personal data is sent for *training public models*. Use APIs that guarantee data privacy (e.g., OpenAI Enterprise/API platform states they do not train models on API request data).

---

## 6. Actionable Advice for Scaling

1. **Hire for Autonomy**: Look for "T-shaped" engineers who can handle both coding and basic client communication. In a small team, a developer who understands product requirements is twice as valuable as a pure coder.
2. **Standardize Your Stack**: Do not build different client projects in different stacks (e.g., one in React, one in Angular, one in Vue). Standardize on **Next.js/Node/TypeScript** and **Flutter** for mobile. This allows developers to move between projects instantly and lets you reuse code blocks.
3. **Automate Admin**: Minimize the time founders spend on non-revenue tasks. Use automatic payroll transfers, invoice reminders, and a retainer accountant to manage GST/TDS filings.
