// Legal page templates. Replace every [BRACKETED] placeholder with your real
// details and have the final text reviewed before publishing.

export const COMPANY = {
  name: 'Kova Development',
  legalName: '[Registered company name, e.g. Kova Development j.d.o.o.]',
  address: '[Street, postal code, city, country]',
  vatId: '[OIB / VAT ID]',
  email: 'hello@kovadevelopment.com',
}

const UPDATED = '[Date]'

export const LEGAL = {
  privacy: {
    title: 'Privacy Policy',
    updated: UPDATED,
    sections: [
      ['Who we are', `${COMPANY.legalName} (“${COMPANY.name}”, “we”), ${COMPANY.address}, ${COMPANY.vatId}, is the controller of personal data collected through this website. Contact: ${COMPANY.email}.`],
      ['What we collect', 'When you contact us or send an inquiry we collect the details you provide: your name, business name, email address and the content of your message. We may also collect basic technical data (such as browser type and pages visited) if analytics are enabled.'],
      ['Why we use it', 'We use your data to reply to your inquiry, prepare quotes, deliver and maintain the services you order, and meet our legal obligations. The legal bases are your consent, steps taken at your request before entering into a contract, performance of a contract, and our legal obligations (Art. 6 GDPR).'],
      ['How long we keep it', 'Inquiry data is kept for as long as needed to handle your request, and client data for the duration of our contract plus any period required by accounting and tax law.'],
      ['Who we share it with', 'We only share data with service providers we need to run our business (for example hosting, email and accounting providers), under appropriate data-processing agreements. We never sell your data.'],
      ['Your rights', 'You have the right to access, correct, delete or restrict the processing of your data, to object to processing, to data portability, and to withdraw consent at any time. To exercise these rights, email us. You can also lodge a complaint with your national data-protection authority (in Croatia: AZOP, azop.hr).'],
      ['Changes', 'We may update this policy from time to time. The latest version is always published on this page.'],
    ],
  },
  terms: {
    title: 'Terms of Service',
    updated: UPDATED,
    sections: [
      ['Scope', `These terms apply to all website design, development, hosting and maintenance services provided by ${COMPANY.legalName}. Any project-specific quote or agreement takes precedence over these terms.`],
      ['Quotes and scope', 'Each project starts with a written quote describing the agreed scope and fixed build price. Work outside the agreed scope is quoted separately before we begin it.'],
      ['Payment', '[Describe your payment terms, e.g. deposit before work starts, balance due at launch, invoice due within X days.] Monthly running fees are billed [monthly in advance].'],
      ['Client responsibilities', 'You provide the content, images and information needed for the project and confirm you have the rights to use them. Delays in providing materials may affect the timeline.'],
      ['Ownership', 'Once the build fee is paid in full, the website design and content created for you are yours. We may show the finished work in our portfolio unless agreed otherwise.'],
      ['Hosting and maintenance', 'The monthly running fee covers hosting, SSL, backups, security updates and monitoring as described on our website. You may cancel with [X days] notice; we will hand over your website files on request.'],
      ['Liability', '[Limitation of liability clause — have this reviewed by a lawyer.]'],
      ['Governing law', 'These terms are governed by the laws of [Croatia]. Disputes will be handled by the competent court in [city].'],
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    updated: UPDATED,
    sections: [
      ['What cookies are', 'Cookies are small text files stored on your device when you visit a website. They help the site work and can provide information to the site owner.'],
      ['Cookies we use', 'This website currently uses only strictly necessary technical storage needed for it to function. [If you add analytics or marketing tools, list each cookie, its purpose and duration here.]'],
      ['Consent', 'If we add non-essential cookies (such as analytics), we will ask for your consent first, and you can change your choice at any time.'],
      ['Managing cookies', 'You can delete or block cookies in your browser settings. Blocking strictly necessary cookies may affect how the site works.'],
    ],
  },
}
