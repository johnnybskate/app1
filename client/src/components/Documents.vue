<template>
  <div>
    <!-- <v-layout justify-center> -->

    <v-toolbar
      color="blue"
      dark
      tabs
      style="border-radius:15px;margin-bottom:10px"
    >
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Schools</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn fab small dark color="yellow" 
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

  <div v-for="school in schools" :key="school.id">
  <v-layout justify-center row style="padding:10px">
    <v-flex xs12 sm6>
      <v-card style="border-radius:15px">
    <v-toolbar
      color="blue"
      dark
      tabs
    >

      <v-toolbar-title>{{school.name}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn fab dark small color="cyan"
      :to="{
            name: 'school',
            params:{
              schoolId:school.id
            }
          }">
      <v-icon dark>edit</v-icon>
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
        Calc 1        
        </v-tab>
        <v-tab>
        Chem 2        
        </v-tab>
        <v-tab>
        CS3        
        </v-tab>
        <v-tab>
        Web Programming        
        </v-tab>
        <v-tab>
        Physics        
        </v-tab>
      </v-tabs>
    </v-toolbar>
          <div style="padding:10px">
            
            <h4 style="text-decoration:underline">Classes</h4>
              <p>{{school.classes}}</p>
            <v-divider class="my-1"></v-divider>
            <h4 style="text-decoration:underline">GPA</h4>
              <p>{{school.gpa}}</p>
            <v-divider class="my-1"></v-divider>
            <h4 style="text-decoration:underline">Form</h4>
              <p>{{school.form}}</p>

          </div>
      </v-card>
    </v-flex>
  </v-layout>
</div>



           <!-- {{school}} -->
            <!-- <v-card>
            {{"School: "+school.name}}<br />
            {{"Classes: "+school.classes}}<br />
            {{"GPA: "+school.gpa}}<br />
            {{"Form: "+school.form}}<br />
            </v-card> -->


  </div>
</template>
<script>
import SchoolsService from '@/services/SchoolsService'
export default {
  data(){
    return {
    schools:null
    }
  },
  async mounted(){
    this.schools = (await SchoolsService.index()).data

    
  }
}
</script>

<style scoped>

</style>
