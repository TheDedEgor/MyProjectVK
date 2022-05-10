// 8099310 - id приложения
// Запрос для получени токена:
//https://oauth.vk.com/authorize?client_id=8099310&display=page&redirect_uri=&scope=friends,photos,wall&response_type=token&v=5.131&state=123456
//Расширение Google Chrome, чтобы работали запросы и не мешал CORS - "Cross Domain - CORS"
const access_token = "21fcc5b1a1fffbf42582d67ef5733389c870cdd37e23b3cb66a007d9c36c99d55f6d820487b9f1d750feb";
const user_id = "161781618";
const url1 = `https://api.vk.com/method/friends.get?user_id=${user_id}&fields=photo_200_orig&order=random&count=6&access_token=${access_token}&v=5.131`;
const url2 = `https://api.vk.com/method/friends.getOnline?user_id=${user_id}&order=random&access_token=${access_token}&v=5.131`;
fetch(url1).then(res => res.json()).then(
    (res) => {
        const data = res.response;
        setCountFriends(data);
        fillAllFriends(data.items);
    }
);
fetch(url2).then(res => res.json()).then(
    (res) => {
        const data = res.response;
        setCountOnlineFriends(data);
        const url = `https://api.vk.com/method/users.get?user_ids=${data.slice(0,6).join(',')}&fields=photo_200_orig&access_token=${access_token}&v=5.131`;
        fetch(url).then(res => res.json()).then(
            (res) => {
                const items = res.response;
                //console.log(res);
                fillAllOnlineFriends(items);
            }
        );
    }
);
function fillAllOnlineFriends(items){
    const all_friends = document.getElementsByClassName('online-friends')[0];
    const first_items = items.slice(0,3);
    const second_items = items.slice(3,6);
    all_friends.append(createPeopleRow(first_items));
    all_friends.append(createPeopleRow(second_items));
}
function fillAllFriends(items){
    const all_friends = document.getElementsByClassName('all-friends')[0];
    const first_items = items.slice(0,3);
    const second_items = items.slice(3,6);
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