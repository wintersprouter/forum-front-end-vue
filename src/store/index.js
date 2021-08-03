import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from '../apis/users'
Vue.use(Vuex)

export default new Vuex.Store({
  // 在 state 屬性中的資料，每個 Vue 元件都可以使用
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  // 想要修改 state 的資料時，會在 mutations 裡設定函式
  // commit 發動 mutations
  mutations: {
    // 參數(state, currentUser)
    // 傳入上方的 state 物件，準備變更物件內容
    // currentUser - 接收從 Vue component 傳入的資料，通常會以「想要更新的 state 屬性」來命名這組參數
    setCurrentUser (state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true
    }
  },
  // 設定其他的非同步函式，例如發送 API 請求等等。
  // dispatch 發動 actions
  actions: {
    async fetchCurrentUser ({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser()
        const { id, name, email, image, isAdmin } = data
        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })
      } catch (error) {
        console.error(error.message)
      }
    }
  },
  modules: {
  }
})
