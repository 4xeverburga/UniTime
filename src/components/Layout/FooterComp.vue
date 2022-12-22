<template>
  <v-footer
    color="primary lighten-1"
    padless
  >

    <v-row
      justify="left"
      no-gutters
    >

    <v-btn
      <v-for="link in links"
        :key="link"
        color="red"
        text
        rounded
        class="my-2"
      >
      {{ link.icon }}
    </v-btn>
    >


  </v-footer>
</template>

<script>
import FacebookIcon from 'vue-material-design-icons/Facebook.vue';
import InstagramIcon from 'vue-material-design-icons/Instagram.vue';
import TwitterIcon from 'vue-material-design-icons/Twitter.vue';
import YoutubeIcon from 'vue-material-design-icons/Youtube.vue';
import LinkedinIcon from 'vue-material-design-icons/Youtube.vue';
import { ref } from 'vue'
const links = ref(
    [[
        {id: 1, icon: FacebookIcon, link: 'https://www.facebook.com/ccat.pe'},
        {id: 2, icon: LinkedinIcon, link: 'https://www.linkedin.com/company/ccatpe/'},
        {id: 3, icon: YoutubeIcon, link: 'https://www.youtube.com/user/CCATFIIS'},
        {id: 4, icon: InstagramIcon, link: 'https://www.instagram.com/ccat.pe/'},
        {id: 5, icon: TwitterIcon, link: 'https://twitter.com/ccat_pe'},

    ]]
)
</script>
