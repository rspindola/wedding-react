import { Row, Col } from 'react-bootstrap';

const padrinhos = [
  {
    photo: 'bruno-willian.jpg',
    name: 'Bruno William',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
  {
    photo: 'nayara-sardou.jpg',
    name: 'Nayara Sardou',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
  {
    photo: 'joao-kamila.jpeg',
    name: 'João Miguel e Kamila Ercole',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
  {
    photo: 'igor-fernandes.jpeg',
    name: 'Igor Fernandes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
  {
    photo: 'carol-rodrigo.jpg',
    name: 'Carolinne Barbosa e Rodrigo Costa',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
  {
    photo: 'rodolpho-brenda.png',
    name: 'Brenda Almeida e Rodolpho Rubim ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
  {
    photo: 'thiago-fernandes.jpeg',
    name: 'Thiago Spíndola',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
  {
    photo: 'renan-spindola.jpeg',
    name: 'Renan Spíndola',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
  {
    photo: 'leticia-spindola.jpg',
    name: 'Leticia Spíndola',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
  {
    photo: 'ana-beatriz.jpeg',
    name: 'Ana Beatriz',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
  {
    photo: 'mayara-cruz.jpeg',
    name: 'Mayara Cruz',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
  {
    photo: 'camilla-teixeira.jpeg',
    name: 'Camilla Teixeira',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
  {
    photo: 'italo-daniel.jpeg',
    name: 'Italo Daniel',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
  {
    photo: 'giulianna-moreira.jpeg',
    name: 'Giulliana Moreira',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
  {
    photo: 'ricardo-raunheitti.jpeg',
    name: 'Ricardo Raunheitti',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
  {
    photo: 'isabella-veloso.jpeg',
    name: 'Isabella Veloso',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
  {
    photo: 'marlon-caldas.jpeg',
    name: 'Marllon Paiva',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
  {
    photo: 'maykon-caldas.jpeg',
    name: 'Maykon Paiva',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
  {
    photo: 'elias-isadora.jpeg',
    name: 'Elias Martins e Isadora Caldas',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
  {
    photo: 'ana-clara.jpeg',
    name: 'Ana Clara',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
  {
    photo: 'victor-teixeira.jpeg',
    name: 'Victor Teixeira',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
  {
    photo: 'giovanna-moraes.jpeg',
    name: 'Giovanna Moraes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula leo. Proin sit amet pulvinar felis. Donec sed imperdiet tellus. Phasellus et felis mauris. Duis non sagittis turpis.',
  },
];

function Padrinhos() {
  padrinhos.sort(function (a, b) {
    return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
  });
  return (
    <section>
      <div className='head'>
        <h2 className='title'>PADRINHOS</h2>
        <h3 className='subtitle'>
          AQUI ESTÃO AS PESSOAS QUE VÃO FAZER O NOSSO DIA AINDA MAIS ESPECIAL.
        </h3>
      </div>
      <div className='content mt-5'>
        <Row>
          {padrinhos.map((p, index) => (
            <Col className='my-2' xs={12} md={12} lg={6} key={index}>
              <div className='card mb-3'>
                <div className='row'>
                  <div className='col-md-4'>
                    <img
                      src={`/images/padrinhos/${p.photo}`}
                      className='card-img'
                      alt={`Foto de ${p.name}`}
                    />
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body'>
                      <h5 className='card-title'>{p.name}</h5>
                      <p className='card-text'>{p.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default Padrinhos;
