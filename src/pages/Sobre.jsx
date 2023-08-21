import NavProjeto from "../components/NavProjeto";
import Descubra from "../components/Descubra";
import Footer from "../components/Footer";
import "../App.css";

function Sobre() {
  return (
    <div>
      <div>
        <NavProjeto />
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center taxas">
      <Descubra titulo="Sobre o Taking Care" paragrafo="
Bem-vindo ao Taking Care, uma organização dedicada a fazer a diferença no mundo dos animais por meio de ações concretas, paixão inabalável e inovação contínua. Fundada com a visão de criar um ambiente onde cada ser vivo seja valorizado, respeitado e protegido, estamos empenhados em deixar uma marca duradoura no bem-estar animal.
Nossa missão é clara e inspiradora: proteger, cuidar e advogar pelos direitos dos animais. Trabalhamos incansavelmente para erradicar o abuso, a negligência e o sofrimento animal, promovendo um mundo onde todos os seres vivos possam viver vidas plenas e felizes. Visualizamos um futuro onde a empatia e a compaixão são as forças motrizes de nossa sociedade. Acreditamos que cada ser vivo merece viver em um ambiente seguro, saudável e cheio de amor, onde suas necessidades são atendidas e seus direitos são reconhecidos.
" descubra="src\assets\sobre.jpg" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Sobre;
