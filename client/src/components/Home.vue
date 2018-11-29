<template>
  <div>
<panel title="Schools" v-if="$store.state.isUserLoggedIn" />
    <h1>Welcome to Lava</h1>
<h3>The ultimate source for Test, HWs, Quizzes, Studyguides and Projects!</h3>
  <v-carousel hide-controls>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>
import Panel from '@/components/Panel'

   export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.hipwallpaper.com/i/39/29/kMs8F0.jpg'
          },
          {
            src: 'https://cdn.hipwallpaper.com/i/71/0/30iTnO.jpg'
          },
          {
            src:'http://www.technocrazed.com/wp-content/uploads/2015/12/New-York-Wallpaper-Background-6.jpg'
          },
          {
            src: 'http://www.technocrazed.com/wp-content/uploads/2015/12/New-York-Wallpaper-Background-38.jpg'
          }
        ]
      }
    },
  components:{
    Panel
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
