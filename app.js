// SIdebar

const menuItems =document.querySelectorAll('.menu-item');

// Messages
// const messagesNotifiaction =document.querySelector('#messages-notification');
// const messages =document.querySelector('.messages');
// const message =document.querySelectorAll('.message');
// const messageSearch =document.querySelector('#messag-search');
//THEMS
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
var root = document.querySelector(':root');
const colorPalette =document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

const explore = document.querySelector('#explore');
const exploreModel = document.querySelector('.explore');

const bookmark = document.querySelector('#bookmarks');
const BookmarkModels = document.querySelector('.bookmarks');

const insight = document.querySelector('#insight');
const insightModel = document.querySelector('.insight');


const setting = document.querySelector('#settings');
const settingModel = document.querySelector('.setting');


const changeActiveItem = ()=>{
    menuItems.forEach(item =>{
        item.classList.remove('active')
    })
}
menuItems.forEach(item =>{
    item.addEventListener('click',() =>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notifiaction-count').
            style.display = 'none';
        }
    })
})

//================= Thems

//open model
const openThemeModel = () => {
    themeModel.style.display = 'grid';
}
//close model
const closeThemeModel = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModel.style.display = 'none';
    }
}
themeModel.addEventListener('click', closeThemeModel);
theme.addEventListener('click', openThemeModel);

// remove ative class frome color
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPalette => {
        colorPalette.classList.remove('active');
    })
}
//change primary colors
colorPalette.forEach(color =>{
    color.addEventListener('click', () =>{
        let primary;

        // remove ative class frome color
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

// theme Background values 
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//change background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}
//change bg color
Bg1.addEventListener('click',() => {
    //add active class
    Bg1.classList.add('active');
    //remove active class frome the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //reomove customise changes frome local storage
    window.location.reload();
    

});

Bg2.addEventListener('click',() => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class
    Bg2.classList.add('active');
    //remove active class frome the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();

});

Bg3.addEventListener('click',() => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class
    Bg3.classList.add('active');
    //remove active class frome the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();

});


// ===========================Explore====================
const openexploreModel = () => {
    exploreModel.style.display = 'grid';
}
//close model
const closeexploreModel = (e) => {
    if(e.target.classList.contains('explore')){
        exploreModel.style.display = 'none';
    }
}
exploreModel.addEventListener('click', closeexploreModel);
explore.addEventListener('click', openexploreModel);

// ===========================BOOKMARK====================
const openBookmarkModelss = () => {
    BookmarkModels.style.display = 'grid';
}
//close model
const closeBookmarkModelss = (e) => {
    if(e.target.classList.contains('bookmarks')){
        BookmarkModels.style.display = 'none';
    }
}
BookmarkModels.addEventListener('click', closeBookmarkModelss);
bookmark.addEventListener('click', openBookmarkModelss);

// ============================Insight==========================
const openinsightModels = () => {
    insightModel.style.display = 'grid';
}
//close model
const closeinsightModels = (e) => {
    if(e.target.classList.contains('insight')){
        insightModel.style.display = 'none';
    }
}
insightModel.addEventListener('click', closeinsightModels);
insight.addEventListener('click', openinsightModels);

// ============================SETTING==========================
const opensettingModels = () => {
    settingModel.style.display = 'grid';
}
//close model
const closesettingModels = (e) => {
    if(e.target.classList.contains('setting')){
        settingModel.style.display = 'none';
    }
}
settingModel.addEventListener('click', closesettingModels);
setting.addEventListener('click', opensettingModels);

















