import profileImg from "./assets/images/profile.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://www.instagram.com/felpsfotografia/">
          <img src={profileImg} className="profile" alt="Felipe Farias" />
        </a>
      </div>
      <h2>Felipe Farias</h2>
      <header>
        <h3>Desculpe pelo transtorno, estamos em construção!</h3>
      </header>
      <section className="description">
        <p>Caros visitantes,</p>
        <p>
          Gostaríamos de informar que o nosso site,{" "}
          <a href="https://felpsrec.com/">https://felpsrec.com/</a>, encontra-se
          atualmente em construção. Estamos trabalhando arduamente para criar
          uma experiência online mais aprimorada e repleta de recursos incríveis
          para atender às suas necessidades.
        </p>
        <p>
          Durante esse período de construção, algumas áreas do site podem estar
          temporariamente indisponíveis. No entanto, estamos fazendo o nosso
          melhor para garantir que o site esteja de volta o mais rápido possível
          e melhor do que nunca.
        </p>
        <p>
          Pedimos desculpas por qualquer inconveniência que isso possa causar e
          agradecemos a sua paciência.
        </p>
        <p>
          Estamos empolgados com as melhorias que estão por vir e mal podemos
          esperar para compartilhar o novo e aprimorado{" "}
          <a href="https://felpsrec.com/">https://felpsrec.com/</a> com você em
          breve. Até lá, agradecemos a sua compreensão e apoio contínuo.
        </p>
      </section>
      <p className="read-the-docs">#origemjhanpoll</p>
    </>
  );
}

export default App;
