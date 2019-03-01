<template>
  <Page>
    <StackLayout>
      <RadPieChart height="350" allowAnimation="true" row="1">
        <DonutSeries
          v-tkPieSeries
          selectionMode="DataPoint"
          expandRadius="0.4"
          outerRadiusFactor="0.8"
          innerRadiusFactor="0.4"
          valueProperty="value"
          legendLabel="key"
          :items="items"
        />
        <RadLegendView
          v-tkPieLegend
          position="Right"
          :title="title"
          offsetOrigin="TopRight"
          width="110"
          enableSelection="true"
        ></RadLegendView>
      </RadPieChart>
    </StackLayout>
  </Page>
</template>

<script>
export default {
  props: ["items", "title"]
};
</script>