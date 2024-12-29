
document.getElementById('add-image').addEventListener('click', () => {
    let image = document.getElementById('city-image');
    if (!image) {
        const newImage = document.createElement('img');
        newImage.src = 'https://www.moyaeuropa.com.ua/wp-content/uploads/2013/04/Venice-528x352.jpg';
        newImage.alt = 'Фото міста';
        newImage.id = 'city-image';
        newImage.style.width = '600px';
        document.body.appendChild(newImage);
    }
});

document.getElementById('increase-image').addEventListener('click', () => {
    const image = document.getElementById('city-image');
    if (image) {
        image.style.width = `${parseInt(image.style.width || 600) + 50}px`;
    }
});

document.getElementById('decrease-image').addEventListener('click', () => {
    const image = document.getElementById('city-image');
    if (image) {
        image.style.width = `${Math.max(50, parseInt(image.style.width || 600) - 50)}px`;
    }
});

document.getElementById('remove-image').addEventListener('click', () => {
    const image = document.getElementById('city-image');
    if (image) {
        image.remove();
    }
});
