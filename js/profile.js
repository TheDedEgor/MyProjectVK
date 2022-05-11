const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
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
