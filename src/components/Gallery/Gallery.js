import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "./photos";

const slides = photos.map(({ src, width, height, images }) => ({
  src,
  width,
  height,
  srcSet: images.map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height,
  })),
}));


export const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section className='Gallery'>
      <div className='head'>
        <h2 className='title'>Galeria</h2>
      </div>
      <Container>
        <Row>
          <PhotoAlbum photos={photos} layout="columns" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

          <Lightbox
            slides={slides}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Zoom]}
          />
        </Row>
      </Container>
    </section>
  );
}