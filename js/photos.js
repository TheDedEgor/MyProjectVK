const url8 = `https://api.vk.com/method/photos.getAll?owner_id=${user_id}&count=4&access_token=${access_token}&v=5.131`;
const url9 = `https://api.vk.com/method/photos.getUserPhotos?user_id=${user_id}&access_token=${access_token}&v=5.131`;
fetch(url8).then(res => res.json()).then(
    (res) => {
        const data = res.response;
        setCountPhotos(data);
        setPhotos(data.items);
    }
);
fetch(url9).then(res => res.json()).then(
    (res) => {
        const data = res.response;
        setCountTags(data);
    }
);
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