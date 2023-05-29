// больше констант Богу констант
const buttonOpenPopupEditProfile = document.querySelector('.profile__change');
const popupProfile = document.querySelector('.popup_for_profile');
const buttonClosePopupEditProfile = document.querySelector('.popup__close_for_profile');

const buttonOpenPopupAddCard = document.querySelector('.profile__place');
const popupPlace = document.querySelector('.popup_for_place');
const buttonClosePopupAddCard = document.querySelector('.popup__close_for_place');

const popupForImage = document.querySelector('.popup_for_image');
const popupCaption = document.querySelector('.popup__caption');
const buttonClosePopupImage = document.querySelector('.popup__close_for_image');
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

// создаю универсальные функции управления состоянием видимости модальных окон
// и функционал к ним
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

buttonOpenPopupEditProfile.addEventListener('click', (e) => {
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
});

buttonClosePopupEditProfile.addEventListener('click', (e) => {
    closePopup(popupProfile);
})

buttonOpenPopupAddCard.addEventListener('click', (e) => {
    openPopup(popupPlace);
});

buttonClosePopupAddCard.addEventListener('click', (e) => {
    closePopup(popupPlace);
})

buttonClosePopupImage.addEventListener('click', (e) => {
  closePopup(popupForImage);
});

// меняю данные профиля в попапе
formProfile.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupProfile);
  formProfile.reset();
});

// добавляю новую карточку на страницу через попап
formPlace.addEventListener('submit', function(evt) {
  evt.preventDefault();
  createCard(placeInput.value, linkInput.value);
  closePopup(popupPlace);
  addCard(placeInput.value, linkInput.value, elements);
  formPlace.reset();
});

// прописываю, что и как тянется из карточки в попап
function popupImageCreation(e, popupImage, popupCaption) {
  const element = e.target.parentNode;
  const image = element.querySelector('.element__img');
  const caption = element.querySelector('.element__title');
  popupImage.src = image.src;
  popupImage.alt = caption.textContent;
  popupCaption.textContent = caption.textContent;
}

// клонирую и создаю карточку
function createCard(nameValue, linkValue) {
  const element = cardsTemplate.querySelector('.element').cloneNode(true);
  const elementImg = element.querySelector('.element__img');
  const elementTrash = element.querySelector('.element__trash');
  const elementLike = element.querySelector('.element__like');
  elementImg.src = linkValue;
  elementImg.alt = nameValue;
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
  return element;
}

// добавляею карточку на сайт
function addCard(name, link, elements) {
  const card = createCard(name, link);
  elements.prepend(card);
}

// пробегаюсь функцией создания карточек по массиву с фотографиями
elementsCards.forEach((card) => {
  addCard(card.name, card.link, elements);
})