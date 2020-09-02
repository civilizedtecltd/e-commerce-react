import * as path from 'path';

require('dotenv').config({ path: path.join('/home/dell/Freelancing/book_eCommerce/e-commerce-react', '.env') });

class APP_URL {
    constructor() {
        this.BASE = `https://admin.abookstore.co.ke`;
        //this.BASE = ` http://127.0.0.1:3333`;
        this.API = `${this.BASE}/api`;
    }

    get _CATEGORY() {
        return `${this.API}/category`;
    }

    get _REGISTER() {
        return `${this.API}/auth/register`;
    }

    get _LOGIN() {
        return `${this.API}/auth/login`;
    }

    get _LOGOUT() {
        return `${this.API}/auth/logout`;
    }

    get _GET_USER() {
        return `${this.API}/user/info`;
    }

    get _USER_UPDATE() {
        return `${this.API}/user/info`;
    }

    get _USER_PAYMENT() {
        return `${this.API}/user/payment`;
    }

    _ALL_BOOKS(page, show, keyword) {
        return `${this.API}/product/all-books/${page}/${show} ${keyword ? "/" + keyword : ''}`;
    }

    _DELETE_PAYMENT(id) {
        return `${this.API}/user/payment/${id}`;
    }

    _SINGLE_BOOK(id) {
        return `${this.API}/product/book/${id}`
    }

    _CATEGORY_BOOKS(id, page, show) {
        return `${this.API}/product/category/${id}/${page}/${show}`;
    }

    get _FAVORITE_ITEMS() {
        return `${this.API}/user/favorite`;
    }

    _DELETE_FAVORITE(id) {
        return `${this.API}/user/favorite/${id}/delete`
    }

    get _POST_REVIEW() {
        return `${this.API}/book/review`;
    }

    _FILTER_BY_PRICE_RANGE(page, show, lowPrice, highestPrice, type, type_id) {
        return `${this.API}/product/range/${page}/${show}/${lowPrice}/${highestPrice}${(type && type_id) ? '/' + type + "/" + type_id : ''}`;
    }

    _FILTER_SHORT_BY(page, show, query) {
        return `${this.API}/product/short-by/${page}/${show}/${query}`;
    }

    get _CONFIRM_ORDER() {
        return `${this.API}/order`;
    }

    get _GET_PAY_IFR() {
        return `${this.API}/get_pay_iframe`;
    }

    get _SET_PAY_SUCCESS(){
        return `${this.API}/swype_success`
    }

    get _SUBSCRIBE() {
        return `${this.API}/subscribe`
    }

    get _UPDATE_SUBSCRIBER() {
        return `${this.API}/subscribe-update/`
    }

    get _DELIVERY_METHOD() {
        return `${this.API}/delivery-method`
    }

    get MAX_MIN_PRICE() {
        return `${this.API}/price-max-min`
    }

    get UPDATE_PAYMENT_METHOD() {
        return `${this.API}/update-payment-method`
    }

    _GET_STAGES(id) {
        return `${this.API}/filter/stage/category/${id}`
    }

    get _GET_DISCIPLINES() {
        return `${this.API}/filter/disciplines`
    }

    get _GET_AUTHORS() {
        return `${this.API}/filter/authors`
    }

    get _GET_PUBLISHERS() {
        return `${this.API}/filter/publishers`
    }

    get _GET_PUBLISHING_YEARS() {
        return `${this.API}/filter/publishing-years`
    }

    get _GET_LANGUAGES() {
        return `${this.API}/filter/languages`
    }

    get _GET_BOOK_COVERS() {
        return `${this.API}/filter/book-covers`
    }

    _GET_FILTERED_BOOKS(filter_type, filter_id, page, show) {
        return `${this.API}/filter/${filter_type}/${filter_id}/${page}/${show}`
    }

    _GET_PROMO_INFO(code) {
        return `${this.API}/promo-code/info/${code}`
    }

    get _GET_STAGE_FILTER() {
        return `${this.API}/filter-with-category`;
    }

    get _RESET_PASSWORD() {
        return `${this.API}/auth/reset-password`;
    }

    get _VERIFICATION_CODE() {
        return `${this.API}/auth/verify-code`;
    }

    get _RECOVER_PASSWORD() {
        return `${this.API}/auth/recover-password`;
    }
    __OAUTH(type) {
        return `${this.API}/auth0/${type}`
    }

    __GET_SUBSCRIPTIONS(email) {
        return `${this.API}/subscriptions/${email}`
    }

    get __SET_SUBSCRIPTIONS() {
        return `${this.API}/subscriptions`
    }

    __CURRENCY_EXCHANGE_RATE(base) {
        return `https://openexchangerates.org/api/latest.json?app_id=f09d5860616c45edb2ab8346180efe75&base=${base}`
    }
}

const URL = new APP_URL();
export {
    URL
};
