<template>
  <div class="wrapper">
    <label>{{label}}</label>
    <input :name="name" :type="type" :value="value" @change="handleChange"/>
    <div class="bar"/>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: [
    'label',
    'type',
    'value',
    'handleChange',
    'name'
  ]
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  label {
    margin-top: 8px;
    margin-bottom: 8px;
  }
  input {
    border: none;
    outline: none;
    margin-top: 8px;
    position: relative;
    width: 100%;
    max-width: 360px;
    border-bottom: 1px solid rgba(0,0,0,.2);
    background-color: transparent;
  }
  .bar {
    display: block;
    width: 100%;
    margin-bottom: 8px;
    position: relative;
    &:before {
      position: absolute;
      bottom: 0px;
      left: 0px;
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background-color: #2974ff;
      transition: all .25s ease-in-out;
    }
  }
  input:focus ~ .bar:before {
    width: 100%;
  }
}

</style>
