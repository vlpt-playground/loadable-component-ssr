const sleep = time => new Promise(resolve => setTimeout(resolve, time));

const api = {
  getRabbit: async () => {
    await sleep(1000);
    return 'https://i.imgur.com/WaqcGk8.jpg';
  },
  getTurtle: async () => {
    await sleep(1000);
    return 'https://i.imgur.com/cetSlCs.jpg';
  }
};

export default api;
