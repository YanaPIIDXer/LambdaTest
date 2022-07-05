<template>
  <div id="app">
    <h1>Lambda Test</h1>
    <button @click="getTest">GET</button><br />
    <button @click="postTest">POST</button><br />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {
  },
  data: function () {
    return {
    }
  },
  methods: {
    /**
     * GETのテスト
     */
    getTest: async function () {
      try {
        const response = await axios.get("http://localhost:3000/hello")
        if (!response || response.status !== 200) { throw response }
        alert(response.data.message)
      } catch (error) {
        console.error(error)
        alert("エラー")
      }
    },
    /**
     * POSTのテスト
     */
    postTest: async function () {

    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
