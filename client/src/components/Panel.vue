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

        <v-btn small fab color="yellow" 
        router
        :to="{
              name: 'schools-add'
            }">
          <v-icon dark>add</v-icon>
        </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>

      <v-tabs
        slot="extension"
        v-model="tab"
        color="blue"
        grow
        flat
      >
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <div v-for="school in schools" :key="school.id">
        <!-- <router-link :to="{ name: 'school', params:{schoolId:school.id}}"> -->
                   <!-- name: 'school', params(){return {schoolId:school.id}} -->
<v-tab
        router
        :to="{
              name: 'school', params:{schoolId:school.id}
            }"
          style="margin:10px">
        {{school.name}}        
        </v-tab>
              <!-- </router-link> -->

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
