const actions = {
  mock(context) {
    return context.commit("set_name", "mock");
  }
  // async setName (context, name) {
  //     return context.commit('set_name', name)
  // },

  // async fetchQuizData (context, id) {
  //     const weeks = await until(Vue.axios.get(`${config.api.url}/player/progress/get`, {
  //         params: {
  //             playerId: id
  //         }
  //     }))

  //     if (weeks.status === 200 && weeks.data) {
  //         context.commit('set_weeks', weeks.data)
  //     }

  //     return weeks
  // }
};

export default actions;
