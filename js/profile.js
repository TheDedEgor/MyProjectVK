const url4 = `https://api.vk.com/method/photos.get?album_id=profile&rev=1&feed_type=photo&count=1&access_token=${access_token}&v=5.131`;
const url5 = `https://api.vk.com/method/account.getProfileInfo?access_token=${access_token}&v=5.131`;
const url6 = `https://api.vk.com/method/users.get?user_ids=${user_id}&fields=online,education&access_token=${access_token}&v=5.131`;
const url7 = `https://api.vk.com/method/users.getFollowers?user_ids=${user_id}&access_token=${access_token}&v=5.131`;
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
fetch(url4).then(res => res.json()).then(
    (res) => {
        const data = res.response;
        setPhotoProfile(data.items[0].sizes);
    }
);
fetch(url5).then(res => res.json()).then(
    (res) => {
        const data = res.response;
        setInfoTop(data);
        setInfoMiddle(data);
    }
);
fetch(url6).then(res => res.json()).then(
    (res) => {
        const data = res.response;
        setUniversity(data[0]);
        setOnline(data[0]);
    }
);
fetch(url7).then(res => res.json()).then(
    (res) => {
        const data = res.response;
        setFollowers(data);
    }
);
function setUniversity(data){
    if(data.university_name != ""){
        const info_middle = document.getElementsByClassName("info__middle")[0];
        const info_row = document.createElement('div');
        info_row.classList.add('info__row');
        const label = document.createElement('div');
        label.classList.add("label");
        label.textContent = 'Место учебы:';
        const labeled = document.createElement('div');
        labeled.classList.add("labeleed");
        labeled.textContent = data.university_name;
        info_row.append(label, labeled);
        info_middle.append(info_row);
    }
}
function setFollowers(data){
    const count_followers = document.getElementById('count-followers-info');
    count_followers.textContent = data.count;
}
function setOnline(data){
    const status_online = document.getElementsByClassName('info__online')[0];
    if(data.online == 1){
        status_online.textContent = 'онлайн';
    }
    else{
        status_online.textContent = 'не в сети';
    }
}
function setPhotoProfile(sizes) {
    const left_profile = document.getElementsByClassName('left-column__item')[0];
    const photo = document.createElement('img');
    photo.classList.add("avatar");
    photo.setAttribute('alt', 'Моя фотография');
    photo.setAttribute('src', sizes[4].url);
    left_profile.append(photo);
}
function setInfoTop(data) {
    const name = document.getElementsByClassName('info__name')[0];
    name.textContent = data.first_name + " " + data.last_name;
    const status = document.getElementsByClassName('info__status')[0];
    status.textContent = data.status;
}
function setInfoMiddle(data) {
    const info_middle = document.getElementsByClassName("info__middle")[0];
    let info_row = document.createElement('div');
    info_row.classList.add('info__row');
    if (data.bdate_visibility == 1) {
        const label = document.createElement('div');
        label.classList.add("label");
        label.textContent = 'День рождения:';
        const labeled = document.createElement('div');
        labeled.classList.add("labeleed");
        const birthday = data.bdate.split('.');
        labeled.textContent = birthday[0] + " " + months[birthday[1] - 1] + " " + birthday[2];
        info_row.append(label, labeled);
        info_middle.append(info_row);
    }
    else if (data.bdate_visibility == 2) {
        const label = document.createElement('div');
        label.classList.add("label");
        label.textContent = 'День рождения:';
        const labeled = document.createElement('div');
        labeled.classList.add("labeleed");
        const birthday = data.bdate.split('.');
        labeled.textContent = birthday[0] + " " + months[birthday[1] - 1];
        info_row.append(label, labeled);
        info_middle.append(info_row);
    }
    if(data.city.title != ""){
        info_row = document.createElement('div');
        info_row.classList.add('info__row');
        const label = document.createElement('div');
        label.classList.add("label");
        label.textContent = 'Город:';
        const labeled = document.createElement('div');
        labeled.classList.add("labeleed");
        labeled.textContent = data.city.title;
        info_row.append(label, labeled);
        info_middle.append(info_row);
    }
}
