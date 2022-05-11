function setCountPhotos(data){
    let count_photos = document.getElementById("count-photos-info");
    count_photos.textContent = data.count;
    count_photos = document.getElementById("count-photos");
    count_photos.textContent = data.count;
}
function setPhotos(items){
    const photos = document.getElementsByClassName("photos")[0];
    for(const item of items){
        const photo = document.createElement('img');
        photo.classList.add('photo');
        photo.setAttribute('src', item.sizes[3].url);
        photo.setAttribute('alt', 'Фото');
        photos.append(photo);
    }
}
function setCountTags(data){
    const count_tags = document.getElementById("count-tags-info");
    count_tags.textContent = data.count;
}