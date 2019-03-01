
<template>
  <Page class="page">
    <ActionBar>
      <GridLayout width="100%" columns="auto, *">
        <Image
          src="~/assets/images/menu.png"
          width="30"
          height="30"
          class="icon-margin"
          @tap="$refs.drawer.nativeView.showDrawer()"
        />
        <Label class="title" text="Listado de StartUps" col="1"/>
      </GridLayout>
    </ActionBar>
    <!--<PullToRefresh @refresh="refreshList">-->
    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent backgroundColor="#ffffff">
        <Label class="drawer-header" text="Menu"/>
        <Label class="drawer-item" text="Home" android:clickable="true"/>
        <Label
          class="drawer-item"
          text="Favoritos"
          android:background="?attr/selectableItemBackground"
          android:clickable="true"
          @tap="goFavorites"
        />
        <Label class="drawer-item" @tap="goRelations" text="Relaciones"/>
      </StackLayout>
      <StackLayout ~mainContent class="home-panel">
        <SearchBar hint="Buscar.." v-model="search" class="search-bar"/>
        <ListView
          class="list-group"
          for="startup in filteredList"
          @itemTap="onItemTap"
          flexGrow="1"
          height="550"
        >
          <v-template>
            <StackLayout class="list-group-item">
              <Label :text="startup.gsx$nombre.$t" class="list-group-item-heading"/>
              <FlexboxLayout flexDirection="row" class="list-group-item">
                <Label
                  :text="`#${startup.gsx$industria.$t}`"
                  style="width: 30%;"
                  class="list-group-item-text"
                />
                <Label
                  :text="`#${startup.gsx$tipodesolución.$t}`"
                  style="width: 30%;"
                  class="list-group-item-text"
                />
                <Label
                  :text="`#${startup.gsx$país.$t}`"
                  style="width: 30%;"
                  class="list-group-item-text"
                />
              </FlexboxLayout>
            </StackLayout>
          </v-template>
        </ListView>
      </StackLayout>
    </RadSideDrawer>
    <!--</PullToRefresh>-->
  </Page>
</template>

<script>
import axios from "axios";
import Detail from "./Detail";
import Favorites from "./Favorites";
import Relations from "./Relations";

export default {
  data() {
    return {
      startups: [],
      search: "",
      dataCountries: [],
      dataIndustries: [],
      dataSolutions: []
    };
  },
  mounted() {
    axios
      .get(
        "https://spreadsheets.google.com/feeds/list/1KSe1V27k_RY4cE7gIcUJD0Kaca9uRyQKNdoTLLVisj0/od6/public/values?alt=json"
      )
      .then(response => {
        this.startups = response.data.feed.entry;
        const countries = [...new Set(this.startups.map(st => st.gsx$país.$t))];
        const solutions = [
          ...new Set(this.startups.map(st => st.gsx$tipodesolución.$t))
        ];
        const industries = [
          ...new Set(this.startups.map(st => st.gsx$industria.$t))
        ];
        this.dataCountries = this.setStadistics(countries, "gsx$país");
        this.dataIndustries = this.setStadistics(industries, "gsx$industria");
        this.dataSolutions = this.setStadistics(
          solutions,
          "gsx$tipodesolución"
        );

        console.log(dataCountries, "PAISES");
      });
  },
  methods: {
    onItemTap: function(args) {
      this.$navigateTo(Detail, {
        props: {
          data: args.item
        }
      });
    },
    setStadistics: function(array, key) {
      return array.map(c => {
        const count = this.startups.filter(st => st[key].$t === c);
        return { key: c, value: count.length };
      });
    },
    goFavorites: function() {
      this.$navigateTo(Favorites);
    },
    goRelations: function() {
      this.$navigateTo(Relations, {
        props: {
          countries: this.dataCountries,
          industries: this.dataIndustries,
          solutions: this.dataSolutions
        }
      });
    }
  },
  computed: {
    filteredList() {
      const searchWord = this.search.toLowerCase();

      return this.startups.filter(startup => {
        let condition =
          startup.gsx$nombre.$t.toLowerCase().includes(searchWord) ||
          startup.gsx$país.$t.toLowerCase().includes(searchWord) ||
          startup.gsx$industria.$t.toLowerCase().includes(searchWord);

        return condition;
      });
    }
  }
};
</script>

<style scoped>
.search-bar {
  background-color: #ffffff;
}
label {
  color: #ffffff;
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
