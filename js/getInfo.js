// 8099310 - id приложения
// Запрос для получени токена:
//https://oauth.vk.com/authorize?client_id=8099310&display=page&redirect_uri=&scope=friends,photos,wall&response_type=token&v=5.131&state=123456
//Расширение Google Chrome, чтобы работали запросы и не мешал CORS - "Cross Domain - CORS"
const access_token = "966a5da80d52326e270a947bb99c23d080b33e96fd9d03dbaaf32a7ace418d6299ed81156e714d076e72f";
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