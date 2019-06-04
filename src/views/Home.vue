<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <span>{{ typedAccessExample() }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { getModule } from 'vuex-module-decorators';
import TestModule from '../store/TestModule';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private testModule = getModule(TestModule, this.$store);

  protected typedAccessExample() {
    return this.testModule.MyData;
  }
}
</script>
