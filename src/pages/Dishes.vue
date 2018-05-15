<template>
  <div class="content">
    <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
      <nav-tabs-card>
        <template slot="content">
          <span class="md-nav-tabs-title"></span>
          <md-tabs md-sync-route class="md-success" md-alignment="left">

            <md-tab id="tab-supa" md-label="Felul 1" md-icon="bug_report">
              <nav-tabs-table :items="firstDishItems"></nav-tabs-table>
            </md-tab>

            <md-tab id="tab-garnitura" md-label="Felul 2" md-icon="code">
              <nav-tabs-table :items="secondDishItems"></nav-tabs-table>
            </md-tab>

            <md-tab id="tab-salata" md-label="Salata" md-icon="cloud">
              <nav-tabs-table :items="saladItems"></nav-tabs-table>
            </md-tab>

            <md-tab id="tab-paine" md-label="Paine" md-icon="cloud">
              <nav-tabs-table :items="paineItems"></nav-tabs-table>
            </md-tab>
          </md-tabs>
        </template>
      </nav-tabs-card>
    </div>
  </div>
</template>

<script>
import {
  NavTabsCard,
  NavTabsTable
} from '@/components'

export default{
  components: {
    NavTabsCard,
    NavTabsTable
  },
  data () {
    return {
      firstDishItems: [
        {
          name: 'Supa de pui'
        },
        {
          name: 'Supa de cartofi'
        },
        {
          name: 'Supa de carne'
        }
      ],
      secondDishItems: [
        {
          name: 'Cartofi taranesti cu pui'
        },
        {
          name: 'Paste Alfredo',
          description: 'oua, smantana, etc'
        }
      ],
      saladItems: [
        {
          name: 'Salata de varza',
          description: 'O simpla salata de varza'
        },
        {
          name: 'Salata de cruditati',
        }
      ],
      paineItems: [
        {
          name: 'Crutoane',
        }
      ]
    }
  }
}
</script>
