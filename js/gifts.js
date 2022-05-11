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