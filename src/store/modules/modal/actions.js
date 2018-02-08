const actions = {
  toggle(context, state) {
    return context.commit(state ? "open" : "close");
  }
};

export default actions;
