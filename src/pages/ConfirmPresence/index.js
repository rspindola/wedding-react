import { Row } from 'react-bootstrap';
import { Confirm } from '../../components/Forms/Confirm/Confirm';
import './style.scss';

function ConfirmPresence() {
  return (
    <section className='padrinhos'>
      <div className='head'>
        <h2 className='title'>Confirmação de presença</h2>
        <h3 className='subtitle'>
          Faça parte da nossa história de amor, confirme sua presença.
        </h3>
      </div>

      <div className='d-flex justify-content-center align-items-center flex-column'>
        <Row className='col-lg-10 mt-5'>
          <Confirm />
        </Row>
      </div>
    </section>
  );
}

export default ConfirmPresence;
