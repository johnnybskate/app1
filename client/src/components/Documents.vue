<template>
  <div>
<panel title="Schools"/>

  <div v-for="school in schools" :key="school.id">
  <v-layout row style="padding:10px ">
    <v-flex xs12 sm6 offset-sm3>
      <v-card style="border-radius:15px">

    <v-toolbar
      color="blue"
      dark
      tabs
    >
      <v-toolbar-title>{{school.name}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <router-link :to="{name:'schools-add'}">
        <v-btn small fab color="yellow" 
        router
        :to="{
              name: 'school', params:{schoolId:school.id}
            }">
          <v-icon dark>edit</v-icon>
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
        grow
      >
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab>
        Classes        
        </v-tab>
        <v-tab>
        Tests        
        </v-tab>
        <v-tab>
        Quizzes        
        </v-tab>
        <v-tab>
        HWs        
        </v-tab>
        <v-tab>
        Study Guides        
        </v-tab>
      </v-tabs>
    </v-toolbar>
          <div style="padding:10px">
            <h3 style="text-decoration:underline">School</h3>
              <h1>{{"- "+school.name}}</h1>
            <v-divider class="my-1"></v-divider>
            
            <h3 style="text-decoration:underline">Classes</h3>
              <h1>{{"- "+school.classes}}</h1>
            <v-divider class="my-1"></v-divider>

            <h3 style="text-decoration:underline">GPA</h3>
              <h1>{{"- "+school.gpa}}</h1>
            <v-divider class="my-1"></v-divider>

            <h3 style="text-decoration:underline">Form</h3>
              <h1>{{"- "+school.form}}</h1>
          </div>
      </v-card>
    </v-flex>
  </v-layout>
</div>

  </div>
</template>
<script>
import SchoolsService from '@/services/SchoolsService'
import Panel from '@/components/Panel'

export default {
  data(){
    return {
    schools:null
    }
  },
  navigateTo(route){
        this.$router.push(route)
      },
  async mounted(){
    this.schools = (await SchoolsService.index()).data
  },
  components:{
    Panel
  }
}
</script>

<style scoped>

</style>
