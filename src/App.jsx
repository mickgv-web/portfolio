import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { SpeedInsights } from "@vercel/speed-insights/react"
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
      <SpeedInsights />
    </Layout>
  );
}

export default App;