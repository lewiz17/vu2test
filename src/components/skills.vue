<template>
  <div class="hello">
    <div class="holder">
      <input type="text" placeholder="Ingresa algun skill que poseas" v-model="skill">
      {{skill}}
      <ul>
        <li v-for="(data,i) in Skills" :key="i">{{i}}.{{data.skill}}</li>
      </ul>
      <p>Arriba los skills que posees</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mamita',
  data() {
    return {
      skill: '',
      Skills: [
        {'skill': 'vuejs'},
        {'skill': 'frontend'}
      ]
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.holder{
  background: #fff;
}
ul{
  margin: 0;
  padding: 0;
  list-style-type: none;
}
ul li{
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}
p{
  text-align: center;
  padding: 30px 0;
  color: gray;
}
.container{
  box-shadow: 0px 0px 40px lightgray;
}
input{
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1em;
  background-color: #323333;
  color: #687f7f;
}
</style>
