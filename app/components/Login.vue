
<template>
  <Page>
    <ActionBar title="Login" class="action-bar"/>
    <Gradient direction="to right" colors="#39B994, #337FC7">
      <FlexboxLayout flexDirection="column" justifyContent="center" class="full-height">
        <Image src="~/assets/images/nsvue_logo.png" class="logo-container"/>
        <StackLayout class="container">
          <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/assets/images/icon_user.png" width="16" height="16" class="icon-margin"/>
            <TextField v-model="usernameInput" hint="Username" class="form-input"/>
          </FlexboxLayout>
          <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/assets/images/icon_lock.png" width="16" height="16" class="icon-margin"/>
            <TextField v-model="passwordInput" hint="Password" secure="true" class="form-input"/>
          </FlexboxLayout>
          <Button text="Login" @tap="onButtonTap" class="my-button"/>
          <FlexboxLayout alignItems="center" justifyContent="space-between" class="auth-buttons">
            <Label horizontalAlignment="left" text="Create Accountt"/>
            <Label horizontalAlignment="right" text="Forgot Password"/>
          </FlexboxLayout>
        </StackLayout>
      </FlexboxLayout>
    </Gradient>
  </Page>
</template>

<script>
import List from "./List";
import users from "../data/users";

export default {
  data() {
    return {
      usernameInput: "",
      passwordInput: ""
    };
  },
  methods: {
    onButtonTap: function() {
      const { usernameInput, passwordInput } = this;
      const loginSucces = users.some(
        user => user.name === usernameInput && user.pass === passwordInput
      );
      if (loginSucces) this.$navigateTo(List);
      else
        alert({
          title: "Datos incorrectos!",
          message: ""
        });
    }
  }
};
</script>

<style lang="scss">
.border-bottom {
  border-bottom-width: 1;
  border-bottom-color: white;
  margin-bottom: 40;
  padding-bottom: 8;
}
.form-input {
  color: white;
  placeholder-color: white;
}
.icon-margin {
  margin-right: 10;
}
.auth-buttons {
  color: white;
  font-size: 14;
}
.full-height {
  height: 100%;
}
.logo-container {
  width: 150;
  margin-bottom: 60;
}
.container {
  margin-left: 34;
  margin-right: 34;
}
</style>