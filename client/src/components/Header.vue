<template>
  <div>
 <v-toolbar fixed class="blue" dark>
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title>
          <v-btn flat dark 
          class="home"
          @click = "navigateTo({name:'home'})">Home
          </v-btn>
      </v-toolbar-title>
        <!-- <v-toolbar-title>
          <v-btn 
          flat 
          dark
          router
          to="home">Home
          </v-btn>
      </v-toolbar-title> -->

        <v-toolbar-items>
          <v-btn 
          flat 
          dark
          router
          to="documents"
          >Documents</v-btn>
      </v-toolbar-items>

        <v-spacer></v-spacer>

      <v-toolbar-items>
          <v-btn 
          flat 
          dark
          router
          to="register"
          >Sign Up</v-btn>
      </v-toolbar-items>
 
      <v-toolbar-items>
          <v-btn 
          flat 
          dark
          router
          to="login"
          >Log in</v-btn>
      </v-toolbar-items>
  </v-toolbar>

  <v-navigation-drawer
    stateless
    value="true"
  style="float:left">
    <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile>

      <v-list-group
        prepend-icon="account_circle"
        value="true"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Users</v-list-tile-title>
        </v-list-tile>

        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Admin</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(admin, i) in admins"
            :key="i"
            @click=""
          >
            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-group
          sub-group
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Actions</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(crud, i) in cruds"
            :key="i"
            @click=""
          >
            <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="crud[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>

  </div>
</template>

<script>
  export default {
    methods:{
      navigateTo(route){
        this.$router.push(route)
      }
    },
    data: () => ({
      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings']
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete']
      ]
    })
  }
</script>

<style scoped>
.home{
  cursor:pointer;
}
</style>
