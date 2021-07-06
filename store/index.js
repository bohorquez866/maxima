export const state = () => ({
    menu: [],
    perks: [],
    home: {},
    services: [],
    category: [],
    urlPath: 'http://localhost/maxima/backend/',
})

export const mutations = {
    SET_MENU_ITEMS(state, payload) {
        state.menu = payload
    },
    SET_PERKS_ITEMS(state, payload) {
        state.perks = payload
    },
    SET_HOME_ITEMS(state, payload) {
        state.home = payload
    },
    SET_SERVICES_ITEMS(state, payload) {
        state.services = payload
    },
    SET_CATEGORY_ITEMS(state, payload) {
        state.category = payload
    },
}
export const getters = {
    menu(state) {
        return state.menu
    },
    perks(state) {
        return state.perks
    },
    home(state) {
        return state.home
    },
    services(state) {
        return state.services
    },
    category(state) {
        return state.category
    },
    urlPath(state) {
        return state.urlPath
    },
}
export const actions = {
    setMenuItems({ commit }, payload) {
        commit('SET_MENU_ITEMS', payload)
    },
    setPerksItems({ commit }, payload) {
        commit('SET_PERKS_ITEMS', payload)
    },
    setHomeItems({ commit }, payload) {
        commit('SET_HOME_ITEMS', payload)
    },
    setServicesItems({ commit }, payload) {
        commit('SET_SERVICES_ITEMS', payload)
    },
    setCategoryItems({ commit }, payload) {
        commit('SET_CATEGORY_ITEMS', payload)
    },
}