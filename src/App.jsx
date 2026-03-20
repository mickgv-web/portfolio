import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
// Importarías una sección de contacto si la tienes aparte

function App() {
  return (
    <Layout>
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      {/* <section id="contact">
        <Contact />
      </section>   */}

      <ScrollToTop />
    </Layout>
  );
}

export default App;