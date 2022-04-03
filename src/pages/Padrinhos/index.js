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
    photo: 'joao-kamila.jpeg',
    name: 'João Miguel e Kamila Ercole',
  },
  {
    photo: 'igor-fernandes.jpeg',
    name: 'Igor Fernandes',
  },
  {
    photo: 'carol-rodrigo.jpg',
    name: 'Carolinne Barbosa e Rodrigo Costa',
  },
  {
    photo: 'rodolpho-brenda.png',
    name: 'Brenda Almeida e Rodolpho Rubim ',
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
    photo: 'elias-isadora.jpeg',
    name: 'Elias Martins e Isadora Caldas',
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
      <div className='content mt-5'>
        <Row>
          {padrinhos.map((p, index) => (
            <Col className='img-box' xs={12} md={6} lg={3} key={index}>
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
