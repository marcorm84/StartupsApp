<template>
  <Page>
    <ActionBar title="Relaciones" android:flat="true"/>
    <TabView
      android:tabBackgroundColor="#53ba82"
      android:tabTextColor="#c4ffdf"
      android:selectedTabTextColor="#ffffff"
      androidSelectedTabHighlightColor="#ffffff"
    >
      <TabViewItem title="Paises">
        <Chart :items="countries" title="Paises"/>
      </TabViewItem>
      <TabViewItem title="Industrias">
        <Chart :items="industries" title="Industrias"/>
      </TabViewItem>
      <TabViewItem title="Soluciones">
        <Chart :items="solutions" title="Soluciones"/>
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script>
import { ObservableArray } from "tns-core-modules/data/observable-array";
import Chart from "./Chart";

export const getCountriesData = data => {
  return new ObservableArray(data);
};

export default {
  components: { Chart },
  props: ["countries", "industries", "solutions"],
  data() {
    const { countries, industries, solutions } = this;
    return {
      countries: getCountriesData(solutions),
      industries: getCountriesData(industries),
      solutions: getCountriesData(solutions)
    };
  }
};
</script>