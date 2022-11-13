import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galeryContainer = document.querySelector('.gallery');
const createGalary = creatingPictures(galleryItems) 

galeryContainer.insertAdjacentHTML('beforeend', createGalary)
// gallery.addEventListener('click', openModal)

function creatingPictures(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`
    }).join("")
}

// function openModal(event) {
//     console.log(event.target.nodeName)

//     if (event.target.nodeName !== "IMG") {
//         return
//     }

//     event.preventDefault()
let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250
});

//     gallery.on('show.simplelightbox', function () {
	
// });

    //  const instance = basiclightbox.create(`
    //     <div class="modal">
    //         <img src="${event.target.dataset.source}" width="800" heigth="600";
    //     </div>
    // `)
    // instance.show()
// }