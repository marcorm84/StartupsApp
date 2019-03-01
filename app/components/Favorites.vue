
<template>
  <Page class="page">
    <ActionBar title="Favoritos" android:flat="true"/>
    <!--<PullToRefresh @refresh="refreshList">-->
    <ScrollView>
      <StackLayout class="home-panel">
        <ListView
          class="list-group"
          for="startup in favorites"
          @itemTap="onItemTap"
          flexGrow="1"
          height="550"
        >
          <v-template>
            <StackLayout class="list-group-item">
              <Label :text="startup.gsx$nombre.$t" class="list-group-item-heading"/>
              <FlexboxLayout flexDirection="row" class="list-group-item">
                <Label text="Industria:" style="width: 30%;" class="list-group-item-text"/>
                <Label
                  :text="startup.gsx$industria.$t"
                  style="width: 70%;"
                  class="list-group-item-text"
                />
              </FlexboxLayout>
              <FlexboxLayout flexDirection="row" class="list-group-item">
                <Label text="País:" style="width: 30%;" class="list-group-item-text"/>
                <Label
                  :text="startup.gsx$país.$t"
                  style="width: 70%;"
                  class="list-group-item-text"
                />
              </FlexboxLayout>
            </StackLayout>
          </v-template>
        </ListView>
      </StackLayout>
    </ScrollView>
    <!--</PullToRefresh>-->
  </Page>
</template>

<script>
import axios from "axios";
import Detail from "./Detail";
import { FAV_TOKEN } from "../constants";
var utilsModule = require("tns-core-modules/utils/utils");

export default {
  data() {
    return {
      favorites: [],
      search: ""
    };
  },
  mounted() {
    this.favorites = localStorage.getItem(FAV_TOKEN) || [];
  },
  methods: {
    onItemTap: function(args) {
      this.$navigateTo(Detail, {
        props: {
          data: args.item
        }
      });
    }
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.search-bar {
  background-color: #ffffff;
}

.title {
  text-align: left;
  padding-left: 16;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}

.drawer-header {
  padding: 50 16 16 16;
  margin-bottom: 16;
  background-color: #53ba82;
  color: #ffffff;
  font-size: 24;
}

.drawer-item {
  padding: 8 16;
  color: #333333;
  font-size: 16;
}
</style>
