module.exports = (photos) => {
  let photosList = photos.map( photo =>{
    return { src: photo.url, subHtml: photo.description }
  });
  return JSON.stringify(photosList);
};