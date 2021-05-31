<template>
  <div class="content">
    <card>
      <template slot="header">
        <h5 class="title">Scan Barcode</h5>
        <p id="category">Scan your barcode here</p>
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
      scan: 0,
    };
  },
  methods: {
    signedBlock() {
      api.then((api) => {
        api.rpc.chain.getBlock().then((block) => {
    

         

// Retrieve the chain name
const chain =  api.rpc.system.chain();

// Retrieve the latest header
const lastHeader =  api.rpc.chain.getHeader();

// Log the information
console.log(`${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`);
                  
                   document.getElementById("category").innerHTML = $;{lastHeader.hash};



        });
      });
    },
  },
  created() {
    this.signedBlock();
  },

};
</script>
<style></style>
