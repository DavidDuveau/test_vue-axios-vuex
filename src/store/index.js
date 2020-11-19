import { createStore } from 'vuex';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards',
  headers: {
    'x-rapidapi-key': '173457e8cdmsh8d2bc164d56ccd4p10f296jsn51c6e5174484',
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }
};



export default createStore({
  state() {
    return {
      datas: {},
    }
  },
  mutations: {
    SET_DATAS(state, datas) {
      state.datas = datas;
    }
  },
  actions: {
    loadDatas({ commit }) {
      axios.request(options)
        .then((res) => {
          commit('SET_DATAS', res.data)
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },
})
