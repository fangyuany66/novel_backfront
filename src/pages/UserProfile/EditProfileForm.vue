<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Edit Profile</h4>
        <p class="category">Complete your profile</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Company</label>
              <md-input v-model="disabled" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>UserName: {{billboard.name}}</label>
              <md-input v-model="ruleForm.name" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Email: {{billboard.email}}</label>
              <md-input v-model="ruleForm.email" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>{{billboard.createTime}}</label>
              <md-input v-model="disabled" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>{{billboard.modifyTime}}</label>
              <md-input v-model="disabled" disabled></md-input>
            </md-field>
          </div>
<!--          <div class="md-layout-item md-small-size-100 md-size-100">-->
<!--            <md-field>-->
<!--              <label>Adress</label>-->
<!--              <md-input v-model="address" type="text"></md-input>-->
<!--            </md-field>-->
<!--          </div>-->
<!--          <div class="md-layout-item md-small-size-100 md-size-33">-->
<!--            <md-field>-->
<!--              <label>City</label>-->
<!--              <md-input v-model="city" type="text"></md-input>-->
<!--            </md-field>-->
<!--          </div>-->
<!--          <div class="md-layout-item md-small-size-100 md-size-33">-->
<!--            <md-field>-->
<!--              <label>Country</label>-->
<!--              <md-input v-model="country" type="text"></md-input>-->
<!--            </md-field>-->
<!--          </div>-->
<!--          <div class="md-layout-item md-small-size-100 md-size-33">-->
<!--            <md-field>-->
<!--              <label>Postal Code</label>-->
<!--              <md-input v-model="code" type="number"></md-input>-->
<!--            </md-field>-->
<!--          </div>-->
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>About Me</label>
              <md-textarea v-model="ruleForm.alias">{{billboard.alias}}</md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" @click="submitForm('ruleForm')">Update Profile</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
  import { setBillboard } from "@/api/billboard";
  import { getBillboard1 } from "@/api/billboard";
export default {

  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      ruleForm: {
        name: '', // 标题
        email: [], // 标签
        alias: '' // 内容
      },
      billboard: {},
      username: null,
      disabled: null,
      emailadress: null,
      lastname: null,
      firstname: null,
      address: null,
      city: null,
      country: null,
      code: null,
      aboutme:
              "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
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

  submitForm(formName) {
    alert('标签不可以为空')
    // this.$refs[formName].validate((valid) => {
    //   if (valid) {
    //     if (this.ruleForm.name == null) {
    //       alert('标签不可以为空')
    //       return false
    //     }
    //     //this.ruleForm.alias = this.ruleForm.alias
    //     setBillboard(this.ruleForm).then((response) => {
    //       const { data } = response
    //       setTimeout(() => {
    //         this.$router.push({
    //           name: 'user',
    //           params: { id: data.id }
    //         })
    //       }, 800)
    //     })
    //   } else {
    //     console.log('error submit!!')
    //     return false
    //   }
    // })
  },


};
</script>
<style></style>
