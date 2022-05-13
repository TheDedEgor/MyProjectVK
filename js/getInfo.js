// 8099310 - id приложения
// Запрос для получени токена:
//https://oauth.vk.com/authorize?client_id=8099310&display=page&redirect_uri=&scope=friends,photos,wall&response_type=token&v=5.131&state=123456
//Расширение Google Chrome, чтобы работали запросы и не мешал CORS - "Cross Domain - CORS"
const access_token = "d6424c3f968f55776d7235d6d8fa0ec852fe70ad41abf48b60cb4ecc37058fe942446f78abc0662741c32";
// VKscript
const code = `
    var userId = 161781618;
    var allFriends0 = API.friends.get({"user_id":userId,"fields":"photo_200_orig","order":"random","count":6});
    var results = API.friends.getOnline({"user_id":userId,"order":"random"});
    var onlineFriends1 = API.users.get({"user_ids":results,"fields":"photo_200_orig"});
    var gifts2 = API.gifts.get({"user_id":userId,"count": 3});
    var allPhotos3 = API.photos.getAll({"owner_id":userId,"count":4});
    var allTags4 = API.photos.getUserPhotos({"user_id":userId});
    var allPosts5 = API.wall.get({"owner_id":userId,"filter":"owner"});
    var allFollowers6 = API.users.getFollowers({"user_ids":userId});
    var photoProfile7 = API.photos.get({"album_id":"profile", "rev":1,"feed_type":"photo","count":1});
    var mainInfoProfile8 = API.account.getProfileInfo();
    var addInfoProfile9 = API.users.get({"user_ids":userId, "fields":"online,education"});
    return [allFriends0, onlineFriends1, gifts2, allPhotos3, allTags4, allPosts5, allFollowers6, photoProfile7, mainInfoProfile8, addInfoProfile9];
`;
const url = `https://api.vk.com/method/execute?code=${code}&access_token=${access_token}&v=5.131`;
fetch(url).then(res => res.json()).then(
    (res) => {
        const data = res.response;
        console.log(data);
        allFriends(data[0]);
        onlineFriends(data[1]);
        gifts(data[2]);
        allPhotos(data[3]);
        allTags(data[4]);
        allPosts(data[5]);
        allFollowers(data[6]);
        photoProfile(data[7]);
        mainInfoProfile(data[8]);
        addInfoProfile(data[9]);
    }
);
function allFriends(data) {
    setCountFriends(data);
    fillAllFriends(data.items);
}
function onlineFriends(items) {
    setCountOnlineFriends(items);
    fillAllOnlineFriends(items);
}
function gifts(data) {
    setCountGifts(data);
    fillGifts(data.items);
}
function allPhotos(data) {
    setCountPhotos(data);
    setPhotos(data.items);
}
function allTags(data) {
    setCountTags(data);
}
function allPosts(data) {
    setPosts(data.items);
}
function allFollowers(data) {
    setFollowers(data);
}
function photoProfile(data) {
    setPhotoProfile(data.items[0].sizes);
}
function mainInfoProfile(data) {
    setInfoTop(data);
    setInfoMiddle(data);
}
function addInfoProfile(data) {
    setUniversity(data[0]);
    setOnline(data[0]);
}

//methods friends
function fillAllOnlineFriends(items) {
    const all_friends = document.getElementsByClassName('online-friends')[0];
    const first_items = items.slice(0, 3);
    const second_items = items.slice(3, 6);
    all_friends.append(createPeopleRow(first_items));
    all_friends.append(createPeopleRow(second_items));
}
function fillAllFriends(items) {
    const all_friends = document.getElementsByClassName('all-friends')[0];
    const first_items = items.slice(0, 3);
    const second_items = items.slice(3, 6);
    all_friends.append(createPeopleRow(first_items));
    all_friends.append(createPeopleRow(second_items));
}
function setCountOnlineFriends(data) {
    const count_friends = document.getElementById('count-online-friends-content');
    count_friends.textContent = data.length;
}
function setCountFriends(data) {
    const count_friends = document.getElementById('count-friends-content');
    count_friends.textContent = data.count;
    const count_friends_info = document.getElementById('count-friends-info');
    count_friends_info.textContent = data.count;
}
function createFriendAvatar(item) {
    const friend_avatar = document.createElement('img');
    friend_avatar.classList.add('friend-avatar');
    friend_avatar.setAttribute('alt', 'Фото друга');
    friend_avatar.setAttribute('src', item.photo_200_orig);
    return friend_avatar;
}
function createPeopleRow(items) {
    const people_row = document.createElement('div');
    people_row.classList.add('people-row');
    for (const element of items) {
        people_row.append(createPeopleCell(element));
    }
    return people_row;
}
function createPeopleCell(item) {
    const people_cell = document.createElement('div');
    people_cell.classList.add('people-cell');
    people_cell.append(createFriendAvatar(item), createFriendName(item));
    return people_cell;
}
function createFriendName(item) {
    const friend_name = document.createElement('div');
    friend_name.classList.add('friend-name');
    friend_name.textContent = item.first_name;
    return friend_name;
}
//methods gifts
function setCountGifts(data) {
    const count_gifts = document.getElementById('count-gifts-content');
    count_gifts.textContent = data.count;
}
function fillGifts(items){
    const gifts = document.getElementsByClassName('gifts')[0];
    for(const item of items){
        gifts.append(createGift(item));
    }
}
function createGift(item) {
    const gift = document.createElement('img');
    gift.classList.add('gift');
    gift.setAttribute('alt', 'Подарок');
    gift.setAttribute('src', item.gift.thumb_96);
    return gift;
}
//methods photos
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
//methods posts
function setPosts(items) {
    const posts = document.getElementById('posts');
    for (const item of items) {
        if (item.post_source.data == "profile_photo") {
            posts.append(createPost(item));
        }
    }
}
function createPost(data) {
    const post = document.createElement('div');
    post.classList.add('post');
    post.append(createPhotoPost(data.attachments[0]), createInfoPost(data));
    return post;
}
function createPhotoPost(data) {
    const photo_post = document.createElement('img');
    photo_post.classList.add('photo-post');
    photo_post.setAttribute('alt', 'Фото поста');
    photo_post.setAttribute('src', data.photo.sizes[4].url);
    return photo_post;
}
function createInfoPost(data) {
    const info_post = document.createElement('div');
    info_post.classList.add('info-post');
    info_post.append(createLikesPost(data), createViewsPost(data));
    return info_post;
}
function createLikesPost(data) {
    const likes = document.createElement('div');
    likes.classList.add('likes');
    likes.insertAdjacentHTML('beforeend',
        '<img class="like-ico" src="/icons/likes.svg">');
    const count_likes = document.createElement('span');
    count_likes.classList.add('likes-count');
    count_likes.textContent = data.likes.count;
    likes.append(count_likes);
    return likes;
}
function createViewsPost(data) {
    const views = document.createElement('div');
    views.classList.add('views');
    views.insertAdjacentHTML('beforeend',
        '<img class="view-ico" src="/icons/views.svg">');
    const count_views = document.createElement('span');
    count_views.classList.add('views-coint');
    count_views.textContent = data.views.count;
    views.append(count_views);
    return views;
}
//methods profile
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
