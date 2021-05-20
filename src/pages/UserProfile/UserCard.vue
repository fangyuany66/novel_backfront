<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">CEO / Co-Founder</h6>
      <h4 class="card-title">{{billboard.name}}</h4>
      <p class="card-description">
<!--        Don't be scared of the truth because we need to restart the human-->
<!--        foundation in truth And I love you like Kanye loves Kanye I love Rick-->
<!--        Owens’ bed design but the back is...-->
        {{billboard.alias}}
      </p>
      <md-button class="md-round md-success">Follow</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
  import { myGetters } from 'vuex'
  import { getBillboard1 } from "@/api/billboard";
export default {
  name: "user-card",
  // computed: {
  //   ...mapGetters(['token', 'user'])
  // },
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg")
    }
  },

  data() {
    return {
      logoUrl: require('@/assets/logo.png'),
      //doubaoImg: require('@/assets/image/doubao.png'),
      searchKey: '',
      billboard: {
        content: ""
      },
    };
  },


  created() {
    this.fetchBillboard();
  },
  methods: {
    async fetchBillboard() {
      getBillboard1().then((value) => {
        const { data } = value;
        this.billboard = data;
      });
    },
  },
};
</script>
<style></style>
