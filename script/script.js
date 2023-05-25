const profileChange = document.querySelector('.profile__change');
const popupProfile = document.querySelector('.popup_for_profile');
const popupCloseProfile = document.querySelector('.popup__close_for_profile');

const profilePlace = document.querySelector('.profile__place');
const popupPlace = document.querySelector('.popup_for_place');
const popupClosePlace = document.querySelector('.popup__close_for_place');

const popupForImage = document.querySelector('.popup_for_image');
const popupCaption = document.querySelector('.popup__caption');
const popupCloseImage = document.querySelector('.popup__close_for_image');
const popupImage = document.querySelector('.popup__img');

const formProfile = document.querySelector('.popup__form_for_profile');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__info_for_name');
const jobInput = document.querySelector('.popup__info_for_job');

const formPlace = document.querySelector('.popup__form_for_place');
const placeInput = document.querySelector('.popup__info_for_place');
const linkInput = document.querySelector('.popup__info_for_link');

const elements = document.querySelector('.elements');
const cardsTemplate = document.querySelector('.cards').content;

const elementsCards = [
    {
      name: 'Красная Поляна',
      link: 'images/20220620_143407-01.jpeg'
    },
    {
      name: 'Санкт-Петербург',
      link: 'images/IMG_20230514_132614.jpg'
    },
    {
      name: 'Сочи',
      link: 'images/photo_2022-06-30_19-46-35.jpg'
    },
    {
      name: 'Инсбрук',
      link: 'images/HAPsjyIEt-Y.jpg'
    },
    {
      name: 'Красноярск',
      link: 'images/ddGoCtvY5SE-1.jpg'
    },
    {
      name: 'Москва',
      link: 'images/IMG_20230525_210917.jpg'
    }
    ];

// открываем и закрываем попап профиля
profileChange.addEventListener('click', () => {
    popupProfile.classList.add('popup_opened');
});

popupCloseProfile.addEventListener('click', () => {
    popupProfile.classList.remove('popup_opened');
});

// открываем и закрываем попап карточки
profilePlace.addEventListener('click', () => {
  popupPlace.classList.add('popup_opened');
});

popupClosePlace.addEventListener('click', () => {
  popupPlace.classList.remove('popup_opened');
});

// закрываем попап изображения
popupCloseImage.addEventListener('click', () => {
  popupForImage.classList.remove('popup_opened');
});

// меняем данные профиля в попапе
formProfile.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popupProfile.classList.remove('popup_opened');
  formProfile.reset();
});

// добавляем новую карточку на страницу через попап
formPlace.addEventListener('submit', function(evt) {
  evt.preventDefault();
  addPlace(placeInput.value, linkInput.value);
  popupPlace.classList.remove('popup_opened');
  formPlace.reset();
});

// прописываем, что и как тянется из карточки в попап
function popupImageCreation(e, popupImage, popupCaption) {
  const element = e.target.parentNode;
  const image = element.querySelector('.element__img');
  const caption = element.querySelector('.element__title');
  popupImage.src = image.src;
  popupImage.alt = caption.textContent;
  popupCaption.textContent = caption.textContent;
}

// клонируем и воспроизводим структуру и логику карточки
function addPlace(nameValue, linkValue) {
  const element = cardsTemplate.querySelector('.element').cloneNode(true);
  const elementTrash = element.querySelector('.element__trash');
  const elementLike = element.querySelector('.element__like');
  element.querySelector('.element__img').src = linkValue;
  element.querySelector('.element__img').alt = nameValue
  element.querySelector('.element__title').textContent = nameValue;
  element.addEventListener('click', (e) => {
      if (e.target.className === 'element__like' && e.target.nodeName === 'BUTTON') {
          elementLike.classList.add('element__like_active');
      } else {
          elementLike.classList.remove('element__like_active');
      }
      if (e.target.className === 'element__trash' && e.target.nodeName === 'BUTTON') {
          elementTrash.parentNode.remove();
      }
      if (e.target.className === 'element__img' && e.target.nodeName ==='IMG') {
        popupForImage.classList.add('popup_opened');
        popupImageCreation(e, popupImage, popupCaption)
    }
  })
  elements.prepend(element);
}

// заносим карточки на страницу, пробежавшись по массиву
for (let card of elementsCards) {
  addPlace(card.name, card.link)
}