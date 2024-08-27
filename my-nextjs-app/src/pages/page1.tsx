// pages/index.tsx
import Header from '@/componenets/Header';


const InsightsDashboardPage: React.FC = () => {
    const handleNavToggle = () => {
        console.log("test");
      };
    
      const handleHamToggle = () => {
        console.log("test");
      };


  return (
    <Header 
        name={'Unknown Customer'}
        customerId={'unknown'}  // Using logoUrl as customerId for now
        onNavToggle={handleNavToggle}
        onHamToggle={handleHamToggle}
        isNavOpen={false}
      />
  );
};

export default InsightsDashboardPage;