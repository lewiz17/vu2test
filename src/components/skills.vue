<template>
  <div class="hello">
    <div class="holder">
      <form @submit.prevent="addSkill" class="form-skill">
        <input type="text" placeholder="Ingresa algun skill que poseas" v-model="skill" v-validate="'min:5'" name="skill">
        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
        </transition>
      </form>
      <transition-group name="list" tag="ul" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">  
        <li v-for="(data,index) in Skills" :key="data.skill">
          {{index}} - {{data.skill}}
          <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
        </li>
        
      </transition-group>
      
      <p>Arriba los skills que posees</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  data() {
    return {
      skill: '',
      Skills: [
        {'skill': 'vuejs'},
        {'skill': 'frontend'}
      ]
    }
  },
  methods: {
    addSkill() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.Skills.push({skill: this.skill})
          this.skill = "";
        }else{
          this.log('Not valid');
        }
      })
      
    },
    remove(id) {
      this.Skills.splice(id,1);
    },
    log(error) {
      /* eslint-disable no-console */
      console.log(error);
      /* eslint-enable no-console */
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.2";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 

.form-skill{
  position: relative;
}

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
  margin: 0;
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
.alert{
  background: #fdf2ce;
  font-weight: bold;
  position: absolute;
  padding: 5px;
  margin-top: -15px;
}
  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
i {
  float:right;
  cursor:pointer;
}
</style>
