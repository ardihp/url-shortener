import Boost from "./components/Boost";
import ContentHeader from "./components/ContentHeader";
import ContentStatistic from "./components/ContentStatistic";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col mx-auto overflow-hidden">
      <div className="flex flex-col px-8 lg:px-14 xl:px-0 items-center">
        <Navbar />
        <ContentHeader />
      </div>
      <ContentStatistic />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
