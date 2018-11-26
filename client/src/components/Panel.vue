<template>
  <div>

 <!-- <v-layout justify-center> -->
    <v-toolbar
      color="blue"
      dark
      tabs
      style="border-radius:15px;margin-bottom:10px; border-radius:10px"
    >
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <router-link :to="{name:'schools-add'}">
        <v-btn small fab color="yellow" 
        router
        :to="{
              name: 'schools-add'
            }">
          <v-icon dark>add</v-icon>
        </v-btn>
      </router-link>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>

      <v-tabs
        slot="extension"
        v-model="tab"
        color="blue"
        flat
      >
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <div v-for="school in schools" :key="school.id">
        <v-tab
        :to="{
            name: 'home'
          }"
          style="margin:10px">
        {{school.name}}        
        </v-tab>
        </div>
      </v-tabs>
    </v-toolbar>

<slot>
</slot>

  </div>
</template>
<script>
import SchoolsService from '@/services/SchoolsService'

export default {
  data(){
      return{
        schools:null
      }
  },
   async mounted(){
    this.schools = (await SchoolsService.index()).data
  },
   methods:{
      navigateTo(route){
        this.$router.push(route)
      }
   },
  props:[
    'title'
  ]
}
</script>

<style scoped>

</style>
