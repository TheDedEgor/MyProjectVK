const url10 = `https://api.vk.com/method/wall.get?owner_id=${user_id}&filter=owner&access_token=${access_token}&v=5.131`;
fetch(url10).then(res => res.json()).then(
    (res) => {
        const data = res.response;
        console.log(data);
        setPosts(data.items);
    }
);
function setPosts(items){
    const posts = document.getElementById('posts');
    for(const item of items){
        if(item.post_source.data == "profile_photo"){
            posts.append(createPost(item));
        }
    }
}
function createPost(data){
    const post = document.createElement('div');
    post.classList.add('post');
    post.append(createPhotoPost(data.attachments[0]),createInfoPost(data));
    return post;
}
function createPhotoPost(data){
    const photo_post = document.createElement('img');
    photo_post.classList.add('photo-post');
    photo_post.setAttribute('alt', 'Фото поста');
    photo_post.setAttribute('src', data.photo.sizes[4].url);
    return photo_post;
}
function createInfoPost(data){
    const info_post = document.createElement('div');
    info_post.classList.add('info-post');
    info_post.append(createLikesPost(data), createViewsPost(data));
    return info_post;
}
function createLikesPost(data){
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
function createViewsPost(data){
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