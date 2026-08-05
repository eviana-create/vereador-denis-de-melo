import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContadorVisitas from "../components/ContadorVisitas";
import Historia from "../components/Historia";
import CarrosselDenis from "../components/CarrosselDenis";
import VilaMoraes from "../components/VilaMoraes";
import Causas from "../components/Causas";
import Comunidade from "../components/Comunidade";
import Participacao from "../components/Participacao";
import Contato from "../components/Contato";
import Footer from "../components/Footer";
import Compromissos from "../components/Compromissos";
import Numeros from "../components/Numeros";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <ContadorVisitas />

      <Historia />

      <Compromissos />

      <Numeros />

      <CarrosselDenis />

      <VilaMoraes />

      <Causas />

      <Comunidade />

      <Participacao />

      <Contato />

      <Footer />
    </>
  );
}

export default Home;