import { Navbar } from '../Navbar/Navbar.jsx';
import './PageLayout.css';

export function PageLayout({ children }) {
  return (
    <div className="page-layout">
      <div className="page-layout__bg" aria-hidden="true" />
      
      <div className="page-layout__grain" aria-hidden="true" />
      
      <Navbar />
      {children}
    </div>
  );
}