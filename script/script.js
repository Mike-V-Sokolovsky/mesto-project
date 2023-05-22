const profileChange = document.querySelector('.profile__change');
const popupProfile = document.querySelector('.popup-profile');
const popupCloseProfile = document.querySelector('.popup__close-profile');
const profilePlace = document.querySelector('.profile__place');
const popupPlace = document.querySelector('.popup-place');
const popupClosePlace = document.querySelector('.popup__close-place');
const formElement = document.querySelector('.popup__form-profile');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__info-name');
const jobInput = document.querySelector('.popup__info-job');
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
    ];

profileChange.addEventListener('click', () => {
    popupProfile.classList.add('popup_opened');
});

popupCloseProfile.addEventListener('click', () => {
    popupProfile.classList.remove('popup_opened');
});

profilePlace.addEventListener('click', () => {
  popupPlace.classList.add('popup_opened');
});

popupClosePlace.addEventListener('click', () => {
  popupPlace.classList.remove('popup_opened');
});

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
}
formElement.addEventListener('submit', formSubmitHandler);