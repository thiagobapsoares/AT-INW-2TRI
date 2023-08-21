import NavProjeto from "../components/NavProjeto";
import Carrossel from "../components/Carrossel";
import Descubra from "../components/Descubra";
import Footer from "../components/Footer";
import lion from "../assets/lion.jpg";
import cachorro from "../assets/cachorro.jpg";

import "../App.css";

function Home() {
  return (
    <div>
      <div>
        <NavProjeto />
        <div>
          <Carrossel />

          <section class="main">
            <div className="home">
              <h1 class="h1-home">RESPEITO PELAS VIDAS!</h1>
              <p class="p-home">Acompanhe nossos trabalhos e veja os dados</p>
            </div>

            <div id="sobre" class="explicado">
              <div class="intro text">
                <p class="p-texto">
                  Bem-vindo à Taking Care, um refúgio dedicado à defesa, cuidado
                  e proteção dos nossos amigos peludos de quatro patas. Nossa
                  paixão pelo bem-estar animal nos impulsiona a agir em prol da
                  criação de um mundo onde cada ser vivo receba o amor, respeito
                  e cuidado que merece. Na Taking Care, nossos esforços se
                  concentram em diversas áreas que abrangem desde o resgate até
                  a conscientização pública. Aqui estão algumas das maneiras
                  pelas quais impactamos a vida dos animais e da comunidade.
                </p>
              </div>
              <div class="inicial-img">
                <img className="inicial-img" src={lion} alt="First slide" />
              </div>
            </div>

            <div id="sobre" class="explicado">
              <div class="intro-text">
                <img
                  className="inicial-img2"
                  src={cachorro}
                  alt="First slide"
                />
              </div>
              <div class="intro text">
                <p class="p-texto2">
                  Seja recebido de braços abertos pelo Taking Care, uma
                  plataforma de adoção online que está transformando a maneira
                  como você encontra e adota um novo membro para sua família.
                  Com o Taking Care, estamos unindo tecnologia e compaixão para
                  garantir que cada animal encontre o lar amoroso que merece. O
                  Taking Care é muito mais do que apenas uma plataforma de
                  adoção online. Nós entendemos que o processo de adoção é uma
                  decisão importante e queremos torná-lo mais fácil, informativo
                  e emocionante para você.
                </p>
              </div>
            </div>
          

          <div class="d-flex flex-column justify-content-center align-items-center taxas adote">
            <button type="button" class="btn btn-success btn-lg btn-block">
              Adote!
            </button>
          </div>
          </section>

          <section class="dados">
            <div className="home">
              <h1 class="h1-home">ACOMPANHE OS DADOS!</h1>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center taxas">
              <Descubra
                titulo="Animais Abandonados"
                paragrafo="O Brasil possui hoje 184.960 animais abandonados ou resgatados por maus tratos"
                descubra="src\assets\abandonados.jpg"
              />

              <Descubra
                titulo="Aumento de 33% em 2022"
                paragrafo="Serviço do telefone do Disque Denúncia do RJ para crimes ambientais indica que houve aumento de 33% desse tipo de crime"
                descubra="src\assets\quantidade.jpg"
              />

              <Descubra
                titulo="Quantidade de animais mortos"
                paragrafo="Todos os dias morrem 1,300,000 animais no Mundo"
                descubra="src\assets\animais-dia-ano.jpg"
              />

              <Descubra
                titulo="Quantidade de Crianças e Cães (2013)"
                paragrafo="No ano de 2013 havia mais cães que crianças no Brasil"
                descubra="src\assets\pop.jpg"
              />
            </div>
          </section>

          <div>
            <br />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
