import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { pageMeta } from '../../utils/meta';
import { contactEmail } from '../../data/site';

export const metadata: Metadata = pageMeta('Privacy Policy', 'How Pixential collects, uses and protects your information.', '/privacy');

const sections = [
  {
    title: 'What we collect',
    body: [
      'When you fill in the contact form we collect your name, email address, the plan you picked and your message.',
      'If you are a client, we also store your login email, your project milestones and the files you or our team upload to the portal.',
      'We do not use advertising trackers and we do not sell your information.',
    ],
  },
  {
    title: 'How we use it',
    body: [
      'To reply to your enquiry, run your project and send you updates about it, such as milestone emails and password reset links.',
      'We only email you about your enquiry or your project.',
    ],
  },
  {
    title: 'Cookies and storage',
    body: [
      'We use one cookie to keep you signed in to the client portal. Your browser also remembers your light or dark theme choice. Neither is used for tracking.',
    ],
  },
  {
    title: 'Who can see it',
    body: [
      'Only the Pixential team. Our hosting, email and file storage providers process the data on our behalf so the website can work.',
    ],
  },
  {
    title: 'How long we keep it',
    body: [
      'We keep enquiries for up to 2 years and client project data for as long as the project and any support period lasts. You can ask us to delete it sooner.',
    ],
  },
  {
    title: 'Your rights',
    body: [
      'You can ask to see, correct or delete the information we hold about you, or withdraw your consent, as allowed under the Digital Personal Data Protection Act, 2023.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent font-sans">
      <Navbar />
      <main className="flex-grow pt-36 md:pt-44 pb-24">
        <article className="max-w-3xl mx-auto px-5 sm:px-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tighter text-black dark:text-white">Privacy Policy</h1>
          <p className="mt-4 text-gray-500">Last updated 19 October 2026</p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{section.title}</h2>
                {section.body.map((text) => (
                  <p key={text} className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-3">{text}</p>
                ))}
              </section>
            ))}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Contact</h2>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                For any privacy question or request, email{' '}
                <a href={`mailto:${contactEmail}`} className="text-blue-600 dark:text-cyan-400 underline">{contactEmail}</a>.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
