const getters = {
  getMessages: (state) => (channelId) => {
    return state.messages.filter((message) => message.channelId === parseInt(channelId))
  },
  getMessage: (state) => (id) => {
    return state.messages.find((message) => message.id === id)
  }
}

export default getters