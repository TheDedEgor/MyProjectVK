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