<template>
  <div>
    <p ></p>
    <table>
      <thead>
        <th></th>
        <th>Name</th>
        <th>Set</th>
        <th>Type</th>
        <th>Text</th>
        <th>Class</th>
      </thead>

      <tbody>
        <tr v-for="(mission, index) in store.state.datas.Missions" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ mission.name }}</td>
          <td>{{ mission.cardSet }}</td>
          <td>{{ mission.type }}</td>
          <td>{{ mission.text }}</td>
          <td>{{ mission.playerClass }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import store from '../store'

export default {
  data() {
    return {
      store: store,
    };
  },
  created() {
      this.$store.dispatch('loadDatas')
  },
};
</script>