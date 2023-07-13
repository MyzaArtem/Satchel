import { Header } from '../Header/Header'; 
import { Footer } from '../Footer/Footer';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
        <div>{children}</div>
      <Footer />
    </>
  );
};