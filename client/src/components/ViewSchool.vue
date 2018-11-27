<template>
  <div>
    <panel title="Schools" />

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
</template>
<script>
import SchoolsService from '@/services/SchoolsService'
import Panel from '@/components/Panel'

export default {
    data(){
    return {
        school:null
    }
},
  async mounted(){
      const schoolId = this.$store.state.route.params.schoolId
      this.school = (await SchoolsService.show(schoolId)).data
  },
  components:{
    Panel
  }
}
</script>

<style scoped>

</style>
