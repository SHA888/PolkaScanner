<template>
  <div class="content">
    <card>
      <template slot="header">
        <h5 class="title">Existing list</h5>
        <p class="category">vaccines hash  </p>
      </template>
      <div class="row">
        <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
          {{ blocknumber }}
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
      blocknumber: 0,
      events: [],
    };
  },
  methods: {
    getBlockNumber() {

const lastHeader =  api.rpc.chain.getHeader();
this.blocknumber=lastHeader.hash;



      // api.then((api) => {
      //   api.rpc.chain.getBlock().then((block) => {
      //     this.blocknumber = api.rpc.chain.getHeader();
      //   });
      // });
    },
  },
  created() {
    this.getBlockNumber();
  },
};
</script>
<style></style>
