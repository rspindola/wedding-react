import DocumentMeta from 'react-document-meta';

import riachueloImg from '@assets/images/riachuelo.png';
import camicadoImg from '@assets/images/camicado.png';
import './style.scss';
import { useEffect } from 'react';

function Gifts() {
  const meta = {
    title: 'Julianne & Renato - Lista de Presentes',
    description: 'O amor move e constrói e quem o encontra tem a certeza de que a vida já valeu a pena. Quem o apoia aprende que a vida sempre tem sentido para quem acredita na beleza dela',
    canonical: 'http://renatoejulianne.com',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      }
    }
  };

  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return (
    <DocumentMeta {...meta}>
      <section className='padrinhos'>
        <div className='head'>
          <h2 className='title'>Lista de presentes</h2>
          <h3 className='subtitle'>
            Para aqueles que preferem nos presentear em uma loja física, aqui vocês podem encontrar nossas listas de presentes.
          </h3>
        </div>

        <div className='container d-flex justify-content-center align-items-center flex-column'>
          <div class="card col-md-8 mb-3">
            <div class="row no-gutters  d-flex justify-content-center align-items-center">
              <div class="col-md-4">
                <img src={camicadoImg} class="card-img" alt="Logo camicado" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Camicado</h5>
                  <p class="card-text">Na Camicado você encontra diversas opções itens de decoração, eletro, cozinha, cama, mesa e banho, churrasco. E também pode criar a sua lista de presentes.</p>
                  <a href="https://lista.camicado.com.br/julianneerenato" target="_blank" rel="noopener noreferrer">Clique aqui para acessar o site</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container d-flex justify-content-center align-items-center flex-column'>
          <div class="card col-md-8 mb-3">
            <div class="row no-gutters  d-flex justify-content-center align-items-center">
              <div class="col-md-4">
                <img src={riachueloImg} class="card-img" alt="Logo Casa Riachuelo" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Casa Riachuelo</h5>
                  <p class="card-text">Aqui você pode comprar as roupas da moda para renovar o seu guarda roupa e usar no seu dia a dia, além de decoração e produtos pra casa!</p>
                  <a href="https://www.domeujeito.com.br/lista/julianneerenato" target="_blank" rel="noopener noreferrer">Clique aqui para acessar o site</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocumentMeta>

  );
}

export default Gifts;
