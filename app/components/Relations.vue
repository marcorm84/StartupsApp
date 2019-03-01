<template>
  <Page>
    <StackLayout>
      <RadPieChart height="300" allowAnimation="true" row="0">
        <PieSeries
          v-tkPieSeries
          selectionMode="DataPoint"
          expandRadius="0.4"
          outerRadiusFactor="0.7"
          valueProperty="value"
          legendLabel="key"
          :items="items"
        />

        <RadLegendView
          v-tkPieLegend
          position="Right"
          title="Brands"
          offsetOrigin="TopRight"
          width="110"
          enableSelection="true"
        ></RadLegendView>
      </RadPieChart>

      <RadPieChart height="300" allowAnimation="true" row="1">
        <DonutSeries
          v-tkPieSeries
          selectionMode="DataPoint"
          expandRadius="0.4"
          outerRadiusFactor="0.7"
          innerRadiusFactor="0.4"
          valueProperty="value"
          legendLabel="key"
          :items="items"
        />

        <RadLegendView
          v-tkPieLegend
          position="Right"
          title="Brands"
          offsetOrigin="TopRight"
          width="110"
          enableSelection="true"
        ></RadLegendView>
      </RadPieChart>
    </StackLayout>
  </Page>
</template>

<script>
import { ObservableArray } from "tns-core-modules/data/observable-array";

export const getCountriesData = data => {
  return new ObservableArray(data);
};

export default {
  props: ["data"],
  data() {
    return {
      items: getCountriesData(this.data)
    };
  }
};
</script>