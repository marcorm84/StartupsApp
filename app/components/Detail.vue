
<template>
  <Page class="page">
    <ActionBar title="Detalle" android:flat="true"/>
    <ScrollView>
      <StackLayout class="home-panel">
        <StackLayout class="container">
          <Label :text="data.gsx$nombre.$t" class="title"/>
          <FlexboxLayout alignItems="center" class="border-bottom">
            <Label text="Industria:" style="width: 40%;"/>
            <Label :text="data.gsx$industria.$t" style="width: 60%;"/>
          </FlexboxLayout>
          <FlexboxLayout alignItems="center" class="border-bottom">
            <Label text="País:" style="width: 40%;"/>
            <Label :text="data.gsx$país.$t" style="width: 60%;"/>
          </FlexboxLayout>
          <FlexboxLayout alignItems="center" class="border-bottom">
            <Label text="Tipo de solución:" style="width: 40%;"/>
            <Label :text="data.gsx$tipodesolución.$t" style="width: 60%;"/>
          </FlexboxLayout>
          <FlexboxLayout alignItems="center" class="border-bottom">
            <Label text="Fecha de contacto:" style="width: 40%;"/>
            <Label :text="data.gsx$fechadecontacto.$t" style="width: 60%;"/>
          </FlexboxLayout>
          <FlexboxLayout alignItems="center" class="border-bottom">
            <Label text="Univ. incubadora:" style="width: 40%;"/>
            <Label :text="data.gsx$universidadincubadora.$t" style="width: 60%;"/>
          </FlexboxLayout>
          <Button text="Agregar a Favoritos" @tap="addFavorites" class="my-button"/>
          <Button text="Ir a Web" @tap="openWeb" class="my-button"/>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
var utilsModule = require("tns-core-modules/utils/utils");
import { FAV_TOKEN } from "../constants";

export default {
  props: ["data"],
  methods: {
    openWeb: function() {
      utilsModule.openUrl(this.data.gsx$páginaweb.$t);
    },
    addFavorites: function() {
      const favorites = localStorage.getItem(FAV_TOKEN) || [];
      let title;
      if (favorites.find(fav => fav.gsx$nombre.$t === this.data.gsx$nombre.$t))
        title = "Ya esta en tus favoritos";
      else {
        title = "Se agregó a tus favoritos";
        favorites.push(this.data);
        localStorage.setItemObject(FAV_TOKEN, favorites);
      }
      alert({
        title,
        message: ""
      });
    }
  }
};
</script>

<style scoped>
label {
  color: #ffffff;
}
.container {
  margin: 35;
}
.title {
  font-size: 25;
  font-weight: bold;
  margin-bottom: 30;
}
</style>
