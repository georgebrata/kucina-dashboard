<template>
  <md-dialog :md-active.sync="showDialog" style="width: 800px;">
    <md-dialog-title>{{this.currentItem.id ? 'Edit item' : 'Add item'}}</md-dialog-title>
    <div class="md-layout">
      <div class="md-layout-item md-small-size-100 md-size-65">
        <md-field>
          <label>Title</label>
          <md-input type="text" v-model="currentItem.name" placeholder="Title"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item md-small-size-100 md-size-30">

        <drop-down>
          <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
            <p>Type</p>
          </a>
          <ul class="dropdown-menu dropdown-menu-right">
            <li><a href="#">Mike John responded to your email</a></li>
            <li><a href="#">You have 5 new tasks</a></li>
            <li><a href="#">You're now friend with Andrew</a></li>
            <li><a href="#">Another Notification</a></li>
            <li><a href="#">Another One</a></li>
          </ul>
        </drop-down>
      </div>

      <div class="md-layout-item md-small-size-100 md-size-100">
        <md-field>
          <label>Details (optional)</label>
          <md-textarea v-model="currentItem.description"></md-textarea>
        </md-field>
      </div>



    </div>

    <md-dialog-actions>
      <md-button class="md-primary" @click="showDialog = false">Close</md-button>
      <md-button class="md-primary" @click="showDialog = false">Save</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
export default {
  name: 'add-edit-item',
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    currentItem: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      type: 'Felul 1'
    }
  }
}
</script>
