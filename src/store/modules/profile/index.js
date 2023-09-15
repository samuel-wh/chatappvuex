import { COMMIT_UPDATE_USERNAME } from '@/common/mutation-types.js'
import { getUser } from '@/api'

const module = {
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
    [COMMIT_UPDATE_USERNAME](state, username) {
      state.username = username
    }
  },
  actions: {
    /**
     * Se usa para ejecutar codigo igual para actualizar states
     * tambien de forma asyncrona, aqui se puede aplicar la logica del negocio
     * puede tener una llamada al backend
     * Pueden ser encadenadas y ejecutar otras action, ejecutando dispatch dentro del action
     */
    async updateUsername({ commit, state }, username) {
      console.log('update username action!', state.username, username)
      const user = await getUser(1)
      console.log(user)
      commit(COMMIT_UPDATE_USERNAME, user.username)
    }
  }
}

export default module