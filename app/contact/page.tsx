import ContactForm from "./ContactForm";
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({ title: 'Contact', description: 'Send a raven: get in touch with Tejjus Bhat about roles, collaborations or projects.', path: '/contact' });

export default function ContactPage() {
  return <ContactForm />;
}
