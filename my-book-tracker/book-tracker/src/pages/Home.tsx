import Expereince from "../components/homeComponents/Expereince";
import Footer from "../components/homeComponents/Footer";
import Header from "../components/homeComponents/Header";
import List from "../components/homeComponents/List";

function Home() {
  return (
    <section id="home" className="pt-6">
      <Header />
      <List />
      <Expereince />
      <Footer />
    </section>
  );
}

export default Home;
