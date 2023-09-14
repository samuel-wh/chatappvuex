import { createStore } from 'vuex'

const store = createStore({
  state() {
    /**
     * Son las variables que se pueden acceder de forma global
     */
    return {
      username: 'sam.uc'
    }
  },

  getters: {
    /**
     * Son como funciones computadas pero pertenecen al manejo de estados 
     * Permite manipular la forma de presentacion de los datos 
     * sin necesidad de manipular los datos
     */
    firstName(state) {
      return state.username.split('.')[0]
    },
    firstName2: (state) => (c) => {
      // Tambien se le pueden pasar parametros, convirtiendolo a una funcion
      // Para que se comporte de una forma dependiendo del parametro
      return state.username.split('').join(c)
    }
  },
  mutations: {
    /**
     * Sirve para actualizar un state de forma sincrona
     */
    updateUsername(state, username) {
      state.username = username
    }
  }
})

export default store