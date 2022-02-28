<template>
  <header class="container mx-auto border-b-2 border-green-400 bg-gray-900">
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <a href="http://localhost:8080/welcome">
          <img width="158" height="78" src="../assets/icon-white.png" alt="groupomania-logo"/>
        </a>
      </div>
      
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <router-link 
            to="/feed"
            v-if="isConnected"
            href="http://localhost:8080/feed"
            class="block mt-4 lg:inline-block lg:mt-0 text-lg text-teal-lighter text-green-400 hover:text-white mr-4"
            aria-label="Accéder aux articles">
            Groupomania
          </router-link>
          <router-link 
            to="/profile/:id"
            v-if="isConnected"
            href="http://localhost:8080/profile/:id"
            class="block mt-4 lg:inline-block lg:mt-0 text-lg text-teal-lighter text-white hover:text-green-400"
            aria-label="Accéder à mon compte">
            Mon compte
          </router-link>
          <router-link 
            to="/Users"
            v-if="isConnected"
            href="http://localhost:8080/Users"
            class="block ml-4 mt-4 lg:inline-block lg:mt-0 text-lg text-teal-lighter text-white hover:text-green-400"
            aria-label="Accéder à la page membres">
            Membres
          </router-link>
        </div>
        <div>
          <a
            v-if="isConnected"
            @click="logout()"
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:text-green-400 mt-4 lg:mt-0"
            aria-label="Se déconnecter">
            Se déconnecter
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    isConnected: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      window.location.href='/'
    }
  },
}
</script>