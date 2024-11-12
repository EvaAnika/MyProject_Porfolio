const gallery = document.getElementById('gallery')
 
images.forEach(imageUrl => {
  const img = document.createElement('img');
  img.src= imageUrl;
  gallery.appendChild(img)
})