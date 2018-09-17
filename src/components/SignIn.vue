<template>
  <div>
    <div>
      <h4>
        Welcome to my house!!!
      </h4>
      <label>Username/email</label>
      <input v-model="username"/>
      <label>Password</label>
      <input type="password" v-model="password"/>
    </div>
    <div>
      <button @click="login">
        Sign In
      </button>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import { generateHeader } from '@/lib/utils';

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log(this)
      axios({url: 'https://api.github.com/user', headers: generateHeader(this.username, this.password)}).then(item => console.log(item)).catch(e => console.error(e))
    }
  }
}

</script>

<style scoped lang="scss">
</style>