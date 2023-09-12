import { reactive } from 'vue'

const store = reactive({
  username: 'Samuel',
  updateUsername(username) {
    this.username = username
  }
})

export default store