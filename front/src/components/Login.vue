<template>
  <div
    class="flex flex-col m-auto bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-11/12 max-w-md">
    <h1 class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
      Connectez-vous
    </h1>
    <div class="relative mt-10 h-px bg-gray-300">
      <h2 class="absolute left-0 top-0 flex justify-center w-full -mt-2">
        <span class="bg-white px-4 text-xs text-gray-500 uppercase"
          >Groupomania</span>
      </h2>
    </div>
    <div class="mt-10">
      <form action="#">
        <div class="flex flex-col mb-6">
          <label
            for="email"
            class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
            Adresse email :</label>
          <div class="relative">
            <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <svg
                class="h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
              </svg>
            </div>
            <input
              v-model="email"
              id="email"
              type="email"
              name="email"
              class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-green-400"
              placeholder="email@fournisseur.com"/>
          </div>
        </div>
        <div class="flex flex-col mb-6">
          <label
            for="password"
            class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
            Mot de passe :
          </label>
          <div class="relative">
            <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </span>
            </div>
            <input
              v-model="password"
              id="password"
              :type="show ? 'text' : 'password'"
              name="password"
              class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-green-400"
              placeholder="password 6-24 caracter"/>
          </div>
        </div>
        <div class="flex justify-center">
  <div>
 <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input ref="myRef" aria-describedby="policy" type="checkbox" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" checked>
    </div>
    <div class="ml-3 text-sm">
      <label for="policy" class="font-medium text-gray-900 dark:text-gray-300">J'ai pris connaissances des conditions d'utilisations</label>
    </div>
  </div>

  </div>
</div>
        <div class="flex w-full">
          <button
            @click.prevent="login"
            type="submit"
            aria-label="Se connecter"
            class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-green-700 hover:bg-green-900 rounded py-2 w-full transition duration-150 ease-in">
            <span class="mr-2 uppercase">Se connecter</span>
            <span>
              <svg
                class="h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
    <router-link to="/signup">
      <div class="flex justify-center items-center mt-6">
        <div
          aria-label="Cliquer sur inscription"
          class="inline-flex items-center text-green-700 hover:text-green-700 text-xs text-center">
          <span>
            <svg
              class="h-6 w-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
            </svg>
          </span>
          <span class="ml-1">Créer un nouveau compte</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import http from '../http'
import {mapMutations} from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      show: false
    }
  },
  methods: {
    ...mapMutations(['initUser']),
    login() {
      const payload = {
        email: this.email,
        password: this.password
      }
      const check = this.$refs.myRef;

      http
      .post('/auth/login', payload)
      .then(res => {
        this.initUser(res.data)
        if ( check.checked === true ) {
        localStorage.setItem('token', res.data.token);
        this.$router.push('feed');

        }
        else {
          localStorage.setItem('token', res.data.token);
          this.$router.push('welcome');
        }

      })
      .catch(() => {
        console.log('Échec de la connexion')
        localStorage.removeItem('vuex')
        localStorage.removeItem('token')
        alert('Adresse email ou mot de passe incorrect')
      })
    }
  }
}
</script>