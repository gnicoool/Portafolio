import { AboutMe } from './aboutme';
import { Contact } from '../contact/contact';

export default {
  title: 'Portfolio/About & Contact',
};

const Page = ({ children }) => <div className="portfolio-page-bg">{children}</div>;

export const Combined = () => (
  <Page>
    <AboutMe />
    <Contact />
  </Page>
);

export const AboutOnly = () => (
  <Page>
    <AboutMe />
  </Page>
);

export const ContactOnly = () => (
  <Page>
    <Contact />
  </Page>
);
