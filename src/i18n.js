import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    'en-US': {
        translation: {
            "signIn": "Sign in",
            "russian": "Russian",
            "english": "English",
            "korean": "Korean",
            "faq": "FAQ",
            "4suppliers": "For suppliers",
            "4customers": "For customers",
            "favorites": "Favorites",
            "cart": "Cart",
            "hurryUp": "Hurry up to buy",
            "computers": "Computers",
            "computers2": "Computers 2",
            "mice": "Mice",
            "keyboards": "Keyboards",
            "headphones": "Headphones",
            "vr": "VR",
            "accessories": "Accessories",
            "accessories2": "Accessories 2",
            "accessories3": "Accessories 3",
            "popularCategories": "Popular categories",
            "allCategories": "All categories"
        }
    },
    ru: {
        translation: {
            "signIn": "Войти",
            "russian": "Русский",
            "english": "Английский",
            "korean": "Корейский",
            "faq": "Частые вопросы",
            "4suppliers": "Поставщикам",
            "4customers": "Покупателям",
            "favorites": "Избранное",
            "cart": "Корзина",
            "hurryUp": "Успей купить",
            "computers": "Компьютеры",
            "computers2": "Компьютеры 2",
            "mice": "Мыши",
            "keyboards": "Клавиатуры",
            "headphones": "Наушники",
            "vr": "VR",
            "accessories": "Аксессуары",
            "accessories2": "Аксессуары 2",
            "accessories3": "Аксессуары 3",
            "popularCategories": "Популярные категории",
            "allCategories": "Все категории",
            "productDetailsInfo": "Информация о технических характеристиках, комплекте поставки, стране изготовления, внешнем виде и цвете товара носит справочный характер и основывается на последних доступных к моменту публикации сведениях.",
            "reviews": "отзывов",
            "vendorCode": "Артикул",
            "favorite": "В избранном",
            'inStock': "В наличии",
            "color": "Цвет",
            "size": "Размер",
            "white": "Белый",
            "black": "Черный",
            "yellow": "Желтый",
            "notChosen": "Не выбрано",
            "buyNow": "Купить сейчас",
            "addToCart": "Добавить в корзину",
            "productDetails": "О товаре",
            "productDescription": "Описание",
            "productReviews": "Отзывы",
            "doorDelivery": "Доставка до дверей",
            "returnGuarantee": "Гарантия возврата",
            "onlinePayment": "Оплата онлайн",
            "bronze": "Бронзовый",
            "supplierRating": "Рейтинг",
            "sendSupplierMessage": "Связаться с магазином",
            "collecting": "Коллекция",
            "material": "Материал",
            "cotton": "100% хлопок",
            "photosFromCustomers": "Фотографии покупателей",
            "sendReview": "Отправить отзыв",
            "onlyWithPhoto": "Только с фото",
            "byRatingDesc": "Сначала с низкой оценкой",
            "byRatingAsc": "Сначала с высокой оценкой",
            "basedOn": "На основании",
            "deliverySpeed": "Скорость доставки",
            "feedback": "Консультация",
            "productQuality": "Качество товара",
            "star": "звезда",
            "stars": "звезды",
            "sendRequest": "Ответить",
            "yourText": "Ваш текст",
            "yourReview": "Ваш отзыв",
            "yourName": "Ваше имя",
            "enterName": "Введите имя",
            "yourEmail": "Ваш Email",
            "enterEmail": "Введите Email",
            "reviewShopWork": "Оцените работу магазина",
            "addPhotos": "Добавьте фото"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
        .init({
            resources,
            lng: "ru", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
            // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
            // if you're using a language detector, do not define the lng option

            interpolation: {
                escapeValue: false // react already safes from xss
            }
        });

export default i18n;