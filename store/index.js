export const state = () => ({
    menu: [],
    perks: [],
    home: {},

    commercial: [],
    residential: [],
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
    SET_CATEGORY_ITEMS(state, payload) {
        state.category = payload
    },

    SET_COMMERCIAL_ITEMS(state, payload) {
        state.commercial = payload
    },
    SET_RESIDENTIAL_ITEMS(state, payload) {
        state.residential = payload
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

    category(state) {
        return state.category
    },
    commercial(state) {
        return state.commercial
    },
    residential(state) {
        return state.residential
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

    setCategoryItems({ commit }, payload) {
        commit('SET_CATEGORY_ITEMS', payload)
    },
    setCommercialItems({ commit }, payload) {
        commit('SET_COMMERCIAL_ITEMS', payload)
    },
    setResidentialItems({ commit }, payload) {
        commit('SET_RESIDENTIAL_ITEMS', payload)
    },
}