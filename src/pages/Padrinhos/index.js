import { Row, Col } from 'react-bootstrap';
import './style.scss';

const padrinhos = [
  {
    photo: 'bruno-willian.jpg',
    name: 'Bruno William',
  },
  {
    photo: 'nayara-sardou.jpg',
    name: 'Nayara Sardou',
  },
  {
    photo: 'joao-miguel.jpeg',
    name: 'João Miguel',
  },
  {
    photo: 'kamila-ercole.jpeg',
    name: 'Kamila Ercole',
  },
  {
    photo: 'igor-fernandes.jpeg',
    name: 'Igor Fernandes',
  },
  {
    photo: 'rodrigo-costa.jpeg',
    name: 'Rodrigo Costa',
  },
  {
    photo: 'carolinne-barbosa.jpeg',
    name: 'Carolinne Barbosa',
  },
  {
    photo: 'brenda-almeida.jpeg',
    name: 'Brenda Almeida ',
  },
  {
    photo: 'rodolpho-rubim.jpeg',
    name: 'Rodolpho Rubim',
  },
  {
    photo: 'thiago-fernandes.jpeg',
    name: 'Thiago Spíndola',
  },
  {
    photo: 'renan-spindola.jpeg',
    name: 'Renan Spíndola',
  },
  {
    photo: 'leticia-spindola.jpg',
    name: 'Leticia Spíndola',
  },
  {
    photo: 'ana-beatriz.jpeg',
    name: 'Ana Beatriz',
  },
  {
    photo: 'mayara-cruz.jpeg',
    name: 'Mayara Cruz',
  },
  {
    photo: 'camilla-teixeira.jpeg',
    name: 'Camilla Teixeira',
  },
  {
    photo: 'italo-daniel.jpeg',
    name: 'Italo Daniel',
  },
  {
    photo: 'giulianna-moreira.jpeg',
    name: 'Giulliana Moreira',
  },
  {
    photo: 'ricardo-raunheitti.jpeg',
    name: 'Ricardo Raunheitti',
  },
  {
    photo: 'isabella-veloso.jpeg',
    name: 'Isabella Veloso',
  },
  {
    photo: 'marlon-caldas.jpeg',
    name: 'Marllon Paiva',
  },
  {
    photo: 'maykon-caldas.jpeg',
    name: 'Maykon Paiva',
  },
  {
    photo: 'isadora-caldas.jpeg',
    name: 'Isadora Caldas',
  },
  {
    photo: 'elias-martins.jpeg',
    name: 'Elias Martins',
  },
  {
    photo: 'ana-clara.jpeg',
    name: 'Ana Clara',
  },
  {
    photo: 'victor-teixeira.jpeg',
    name: 'Victor Teixeira',
  },
  {
    photo: 'giovanna-moraes.jpeg',
    name: 'Giovanna Moraes',
  },
];

function Padrinhos() {
  padrinhos.sort(function (a, b) {
    return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
  });
  return (
    <section className='padrinhos'>
      <div className='head'>
        <h2 className='title'>PADRINHOS</h2>
        <h3 className='subtitle'>
          AQUI ESTÃO AS PESSOAS QUE VÃO FAZER O NOSSO DIA AINDA MAIS ESPECIAL.
        </h3>
      </div>

      <div className='d-flex justify-content-center align-items-center flex-column'>
        <Row className='col-lg-10 mt-5'>
          {padrinhos.map((p, index) => (
            <Col className='img-box' xs={12} md={6} lg={2} key={index}>
              <img
                src={`/images/padrinhos/${p.photo}`}
                className='card-img'
                alt={`Foto de ${p.name}`}
              />
              <div className={`overlay overlay__bg-${index + 1}`}>
                <div className='text'>{p.name}</div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default Padrinhos;
