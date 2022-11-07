import DocumentMeta from 'react-document-meta';

import { Row } from 'react-bootstrap';
import { Confirm } from '@components/Forms/Confirm/Confirm';
import './style.scss';
import { useEffect } from 'react';

function ConfirmPresence() {
  const meta = {
    title: 'Julianne & Renato - Confirmação de Presença',
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
          <h2 className='title'>Confirmação de presença</h2>
          <h3 className='subtitle'>
            Faça parte da nossa história de amor, confirme sua presença.
          </h3>
        </div>

        <div className='d-flex justify-content-center align-items-center flex-column'>
          <Row className='col-lg-10'>
            <Confirm />
          </Row>
        </div>
      </section>
    </DocumentMeta>
  );
}

export default ConfirmPresence;
