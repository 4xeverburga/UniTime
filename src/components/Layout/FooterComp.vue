<template>
    <!-- A footer with 3 columns, a big flex logo brand in the left, social networks in the middle and contact info in the right-->
    <!-- use vue-material-desing-icons-->
    <!-- <footer class="footer"> -->
    <!--     <div class="container-fluid"> -->
    <!--         <div class="row"> -->
    <!--             <div class="col-5"> -->
    <!--                 <img src="@/assets/logo.png" alt="" width="60" height="48" class="d-inline-block align-text-top"> -->
    <!--             </div> -->
    <!--             <div class="col-4"> -->
    <!--                 <div class="social__networks"> -->
    <!--                     <v-btn v-for="net in networks" :key="net.id" class="mx-2 white--text" icon> -->
    <!--                         <v-icon size="24px"> -->
    <!--                         {{ net.icon }} -->
    <!--                         </v-icon> -->
    <!--                     </v-btn> -->
    <!--                 </div> -->
    <!--             </div> -->
    <!--             <div class="col-4"> -->
    <!--                 <div class="contact__info"> -->
    <!--                     <p> en blanco </p> -->
    <!--                 </div> -->
    <!--             </div> -->
    <!--         </div> -->
    <!--     </div> -->
    <!---->
    <!---->
    <!-- </footer> -->

  <v-footer app color="black" padless absolute>
    <v-col cols="12">
      <v-item-group>
        <v-container fill-height fluid>
          <v-row align="center">
            <v-col cols="12" sm="6">
              <v-item>
                <v-card class="white--text text-center" color="transparent" flat tile>
                  <v-card-text>
                        <v-btn v-for="net in networks" :key="net.id" class="mx-2 white--text" icon>
                            <v-icon size="24px">
                            {{ net.icon }}
                            </v-icon>
                        </v-btn>
                  </v-card-text>
                  <v-card-text class="white--text">
                    <contactoForm></contactoForm>
                  </v-card-text>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" sm="6">
              <v-item>
                <v-card flat tile class="white--text" color="transparent">
                  <!-- <v-card v-for="contact in contacts" :key="contact.id" class="d-flex justify-center" color="transparent" outlined tile > -->
                    <v-card class="white--text" outlined tile color="transparent">
                      <v-card-text class="white--text">
                        <!-- <v-icon size="24px" color="white" class="pr-4"> -->
                        <!--   {{ contact.icon }} -->
                        <!-- </v-icon> -->
                        <span class="text-subtitle-1 font-weight-medium">{{contact.description}}</span>
                      </v-card-text>
                      <v-divider dark></v-divider>
                    </v-card>
                  </v-card>
                <!-- </v-card> -->
              </v-item>
            </v-col>
            <v-col cols="12">
              <v-card flat tile class="white--text text-center" color="transparent">
                <v-divider dark></v-divider>
                <v-card-text class="white--text">
                  {{ new Date().getFullYear() }} — <strong>CCAT</strong>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </v-col>
  </v-footer>

</template>

<script setup>
// import { mdiFacebook, mdiInstagram, mdiTwitter, mdiYoutube } from '@mdi/js'
import FacebookIcon from 'vue-material-design-icons/Facebook.vue';
import InstagramIcon from 'vue-material-design-icons/Instagram.vue';
import TwitterIcon from 'vue-material-design-icons/Twitter.vue';
import YoutubeIcon from 'vue-material-design-icons/Youtube.vue';
import linkedinIcon from 'vue-material-design-icons/Youtube.vue';
import { ref } from 'vue'
const networks = ref(
    [[
        {id: 1, icon: FacebookIcon, link: 'https://www.facebook.com/ccat.pe'},
        {id: 2, icon: linkedinIcon, link: 'https://www.linkedin.com/company/ccatpe/'},
        {id: 3, icon: YoutubeIcon, link: 'https://www.youtube.com/user/CCATFIIS'},
        {id: 4, icon: InstagramIcon, link: 'https://www.instagram.com/ccat.pe/'},
        {id: 5, icon: TwitterIcon, link: 'https://twitter.com/ccat_pe'},

    ]]
)

</script>

<style scoped>
.footer {
    background-color: #D9E8F6;
    color: #01225E;
    size: 1cm;
    list-style: none;
}

/* img {
  display: block;
  max-width: 20%;
  height: auto;
} */

.social__networks {
    padding: auto;
}
</style>
