<template>
  <div class="box">
    <div class="column">
      <h4>
        Welcome to my house!!!
      </h4>
      <Input label="Username / Email" name="username" :value="username" :handleChange="handleChange"/>
      <Input label="Password" type="password" name="password" :value="password" :handleChange="handleChange"/>
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
import Input from '@/views/Input';

export default {
  components: {
    Input
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log(this)
      axios({url: 'https://api.github.com/user', headers: generateHeader(this.username, this.password)}).then(item => console.log(item)).catch(e => {
        window.localStorage.setItem('token', null);
        console.error(e)
      })
    },
    handleChange (e) {
      console.log(e.target.name, '=', e.target.value)
      this[e.target.name] = e.target.value;
    }
  }
}

</script>

<style scoped lang="scss">
.box {
  box-shadow: 0px 3px 8px 1px rgba(0, 0, 0, .25);
  padding: 24px;
}
.column {
  display: flex;
  align-items: center;
  flex-direction: column;
}

button {
  width: 100%;
  outline: none;
  background-color: #2974ff;
  border: none;
  box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.2);
  padding: 8px;
  border-radius: 5px;
  margin-top: 16px;
  cursor: pointer;
  transition: box-shadow .25s linear;
  &:hover {
    box-shadow: 0px 3px 16px 0px rgba(0,0,0,0.25);
  }
  &:active {
    box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.2);
  }
}
</style>