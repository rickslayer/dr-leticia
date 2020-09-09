<template>
<v-flex>
    <v-container>
      <v-row v-scroll-reveal.reset="scrollOptions">
        <v-col col="12" sm="12">
            <div class="text-center">
            </div>
        </v-col>
      </v-row>
    </v-container>
<v-card height="50">
    <v-footer
      absolute
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
       <small>
        {{ new Date().getFullYear() }} — Feito com
        <v-btn icon color='red darken-4'>
            <v-icon>mdi-heart</v-icon>
        </v-btn> Por prra[dot]dev
      </small> 
      </v-col>
    </v-footer>
  </v-card>
</v-flex>
</template>
<script>
export default{
    components:{
    },
    computed: {
        images(){
            return this.$store.state.images_default
        },
        main_menu(){
             return this.$store.state.main_menu
        }
    },
    data(){
        return {
          scrollOptions:{
              delay: "500",
              distance: '50px',
              easing: 'ease-in',
              origin: 'bottom'
          }
        }
    },
}
</script>