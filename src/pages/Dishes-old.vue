<template>
  <div class="content">
    <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100" >
      <nav-tabs-card style="height: 50vh">
        <template slot="content">
          <span class="md-nav-tabs-title"></span>
          <md-tabs md-sync-route class="md-success" md-alignment="left">

            <md-tab id="tab-supa" md-label="Felul 1">
              <nav-tabs-table :items="firstDishItems" @editItem='editItem'></nav-tabs-table>
            </md-tab>

            <md-tab id="tab-garnitura" md-label="Felul 2">
              <nav-tabs-table :items="secondDishItems"></nav-tabs-table>
            </md-tab>

            <md-tab id="tab-salata" md-label="Salata">
              <nav-tabs-table :items="saladItems"></nav-tabs-table>
            </md-tab>

            <md-tab id="tab-paine" md-label="Paine">
              <nav-tabs-table :items="paineItems"></nav-tabs-table>
            </md-tab>
          </md-tabs>
        </template>
      </nav-tabs-card>
    </div>

    <md-button id="add-button" class="md-primary md-just-icon" @click="addItem()"><md-icon >plus_one</md-icon></md-button>

  </div>
</template>

<script>
import { NavTabsCard, NavTabsTable, SimpleTable, AddEditItem } from "@/components";

export default {
  components: {
    NavTabsCard,
    NavTabsTable,
    AddEditItem
  },
  data() {
    return {
      showDialog: false,
      currentItem: {},
      firstDishItems: [
        {
          id: '109',
          name: "Supa de pui",
          type: "Felul 1"
        },
        {
          id: '189',
          name: "Supa de cartofi",
          type: "Felul 1"
        },
        {
          id: '108',
          name: "Supa de carne",
          type: "Felul 1"
        },
        {
          id: '108',
          name: "Supa de carne",
          type: "Felul 1"
        },
        {
          id: '108',
          name: "Supa de carne",
          type: "Felul 1"
        },
        {
          id: '108',
          name: "Supa de carne",
          type: "Felul 1"
        },
        {
          id: '108',
          name: "Supa de carne",
          type: "Felul 1"
        },
        {
          id: '108',
          name: "Supa de carne",
          type: "Felul 1"
        },
        {
          id: '108',
          name: "Supa de carne",
          type: "Felul 1"
        }
      ],
      secondDishItems: [
        {
          name: "Cartofi taranesti cu pui"
        },
        {
          name: "Paste Alfredo",
          description: "oua, smantana, etc"
        }
      ],
      saladItems: [
        {
          name: "Salata de varza",
          description: "O simpla salata de varza"
        },
        {
          name: "Salata de cruditati"
        }
      ],
      paineItems: [
        {
          name: "Crutoane"
        }
      ]
    };
  },
  methods: {
    editItem(item) {
      this.showDialog = true;
      this.currentItem = item;
      console.log(item);
    },
    addItem() {
      this.currentItem = {};
      this.showDialog = true;
    }
  }
};
</script>


<style>
#add-button {
  position: absolute !important;
  right: 50px;
  bottom: 50px;
}
</style>
