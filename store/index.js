export const state = () => ({
    menu: [],
    perks: [],
    urlPath: 'http://localhost/',
})

export const mutations = {
    SET_MENU_ITEMS(state, payload) {
        state.menu = payload
    },
    SET_PERKS_ITEMS(state, payload) {
        state.perks = payload
    },
}
export const getters = {
    menu(state) {
        return state.menu
    },
    perks(state) {
        return state.perks
    },
}
export const actions = {
    setMenuItems({ commit }, payload) {
        commit('SET_MENU_ITEMS', payload)
    },
    setPerksItems({ commit }, payload) {
        commit('SET_PERKS_ITEMS', payload)
    },
}