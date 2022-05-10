//const access_token = "f4dcbf437f58963f7e1dced4bb9cc81c78e4f476647733e28b50c60433b7ce48b89911972df35c9e55a23";
//const user_id = "161781618";
const url3 = `https://api.vk.com/method/gifts.get?user_id=${user_id}&count=3&access_token=${access_token}&v=5.131`;
fetch(url3).then(res => res.json()).then(
    (res) => {
        const data = res.response;
        setCountGifts(data);
        fillGifts(data.items);
    }
);
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