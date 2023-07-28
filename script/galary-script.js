// JavaScript File: path/to/your/javascript-file.js

// Function to scan the "images/gallery" folder and add images to the container
function scanAndDisplayImages() {
    const galleryContainer = document.getElementById('gallery-container');
  
    // Replace 'images/gallery' with the path to your image folder
    const imagesFolderPath = './hindipressclub/images/gallery/';
    // List of image file extensions you want to include (you can add more if needed)
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
  
    // Fetch images from the folder
    fetch(imagesFolderPath)
      .then(response => response.text())
      .then(data => {
        // scan the sources of all <a> elements in <li> in html data
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(data, 'text/html');
        const links = htmlDocument.querySelectorAll('li a');
        console.log(links);
        const fileNames = [];
        links.forEach(link => {
          const fileName = link.getAttribute('href');
          fileNames.push(fileName);
        });
        console.log(fileNames);


        // Split the data into lines
        // const fileNames = data.split('\n');
        console.log(fileNames);
        // Filter the file names to only include image files
        const imageFiles = fileNames.filter(fileName => {
          const extension = fileName.split('.').pop().toLowerCase();
          return imageExtensions.includes(extension);
        });
        console.log(imageFiles);
  
        // Create <img> elements and append them to the container
        imageFiles.forEach(imageFile => {
          const imgElement = document.createElement('img');
          imgElement.src = imageFile;
          imgElement.alt = 'Image';
          galleryContainer.appendChild(imgElement);
        });
      })
      .catch(error => console.error(error));
  }
  
  // Call the function to display the images when the page is loaded
  window.onload = function() {
    scanAndDisplayImages();
  };
  