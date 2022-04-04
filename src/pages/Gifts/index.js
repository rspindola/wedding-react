import camicadoImg from '../../assets/images/camicado.png';
import './style.scss';

function Gifts() {
  return (
    <section className='padrinhos'>
      <div className='head'>
        <h2 className='title'>Lista de presentes</h2>
        <h3 className='subtitle'>
          Para aqueles que preferem nos presentear em uma loja física, aqui vocês podem encontrar nossas listas de presentes.
        </h3>
      </div>

      <div className='container d-flex justify-content-center align-items-center flex-column'>
        <div class="card col-md-8 mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={camicadoImg} class="card-img" alt="logo camicado" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gifts;
