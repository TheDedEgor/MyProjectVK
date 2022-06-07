// 8099310 - id приложения
// Запрос для получени токена:
//https://oauth.vk.com/authorize?client_id=8099310&display=page&redirect_uri=&scope=friends,photos,wall,groups&response_type=token&v=5.131&state=123456
//Расширение Google Chrome, чтобы работали запросы и не мешал CORS - "Cross Domain - CORS"
//161781618
export const access_token =
  "faa934bfd5edab14986a690f8b9a431aeaf30d173ce25800dc07f48bce17ce67dce6024b1568157518bea";
const code = `
var userId = 164134398;  
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
export const url = `https://api.vk.com/method/execute?code=${code}&access_token=${access_token}&v=5.131`;
export const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
