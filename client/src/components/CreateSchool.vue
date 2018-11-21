<template>
  <div>

          <h3 class="display-3">Add school</h3>

          <span class="subheading">Use this page to add schools to your profle.</span>

          <v-divider class="my-3"></v-divider>

          <div class="title mb-3">Please enter your schools information below</div>
 <v-form>
    <v-container>
      <v-layout row wrap>

        <v-flex xs12 sm12>
          <v-text-field
            label="School name"
            hint="SUNY New Paltz"
            persistent-hint
            outline
            v-model="school.name"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12>
          <v-text-field
            label="Classes"
            hint="Calc1, Calc 2, Chem 2"
            persistent-hint
            outline
            v-model="school.classes"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm12>
          <v-text-field
            label="GPA"
            hint="3.35"
            persistent-hint
            outline
            v-model="school.gpa"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm12>
          <v-text-field
            label="Form"
            hint="Hello my name ...."
            persistent-hint
            multi-line
            outline
            v-model="school.form"
          ></v-text-field>
        
           <v-btn
                dark
                class="blue float-right"
                style="border-radius: 10px"
                @click="create"
                >
                Submit
              </v-btn>

        </v-flex>

      </v-layout>
    </v-container>
  </v-form>


    
  </div>
</template>
<script>

import SchoolsService from '@/services/SchoolsService'
export default {
  data(){
    return {
      school:{
    name: null,
    classes:null,
    gpa:null,
    form:null
      }
    }
  },
  methods:{
    async create(){
      try{
        await SchoolsService.post(this.school)
               this.$router.push({
          name:'documents'
        })
      }catch(err){
      }
    }
  }
}
</script>

<style scoped>

</style>
