<template>
  <div class="content">
    <card>
      <template slot="header">
        <h5 class="title">Upload Barcode</h5>
        <p class="category">Upload your barcode here</p>
      </template>
      <div class="row">
        <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
          Placeholder
        </div>
      </div>
    </card>
  </div>
</template>
<script>
import { Card } from "@/components/index";

import api from "../connection.js";

export default {
  components: {
    Card,
  },
  data() {
    return {
      upload: 0,
    };
  },
  methods: {
    getBlockNumber() {
      api.then((api) => {
        api.rpc.chain.getBlock().then((block) => {
          this.blocknumber = block.block.header.number.toNumber();
        });
      });
    },
  },
  created() {
    this.getBlockNumber();
  },
};
</script>
<style></style>
