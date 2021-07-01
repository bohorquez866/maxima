export const state = () => ({
    menu: [],
    perks: [],
    home: {},
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
}