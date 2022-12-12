const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id) =>
  `https://renatoejulianne.com/images/us/${id}.jpg`;

const unsplashPhotos = [
  { id: "RkBTPqPEGDo", width: 1080, height: 720 },
  { id: "GbLS6YVXj0U", width: 1080, height: 780 },
  { id: "ALrCdq-ui_Q", width: 854, height: 1280 },
  { id: "1azAjl8FTnU", width: 1080, height: 1549 },
  { id: "Dhmn6ete6g8", width: 1280, height: 854 },
  { id: "Osq7UAVxIOI", width: 1080, height: 780 },
  { id: "Jztmx9yqjBw", width: 854, height: 1280 },
  { id: "heLWtuAN3c", width: 854, height: 1280 },
  { id: "9CRd1J1rEOM", width: 1080, height: 720 },
  { id: "xOigCUcFdA8", width: 854, height: 1280 },
  { id: "twukN12EN7c", width: 854, height: 1280 },
  { id: "9UjEyzA6pP4", width: 1080, height: 1620 },
  { id: "X48pUOPKf7A", width: 1080, height: 780 },
  { id: "xKhtkhc9HbQ", width: 1080, height: 780 },
];

const photos = unsplashPhotos.map((photo) => {
  const width = breakpoints[0];
  const height = (photo.height / photo.width) * width;

  return {
    src: unsplashLink(photo.id, width, height),
    width,
    height,
    images: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: unsplashLink(photo.id, breakpoint, height),
        width: breakpoint,
        height,
      };
    }),
  };
});

export default photos;
