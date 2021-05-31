<template>
<div class="content text-left">
    <card>
      <template slot="header">
        <h2 class="title">Home</h2>
      </template>
      <template>
        <div class="row text-left">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xs-12">
            <p>
              <strong>VACCHAIN</strong> 
            </p>

<p>
          Supply chain for avoiding counterfiting of  vaccines.
           
    
              applying to that one applies to this one as well.

            </p>
            
          </div>
        </div>
      </template>
    </card>
    <card>
      <template slot="header">
        <h2 class="title">Features</h2>
      </template>
      <card>
        <template slot="header">
          <h3>Scanning</h3>
        </template>
        <div class="row text-left">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xs-12">
            <p>
              The manufacturers scan their product's barcodes and store them in
              the Substrate-based blockchain using PolkaScanner.
            </p>
          </div>
        </div>
      </card>
      <card>
        <template slot="header">
          <h3>Verifying</h3>
        </template>
        <div class="row text-left">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xs-12">
            <p>
              Buyer scan the 2D barcode on the product they wish to buy using
              their smartphone, and PolkaScanner wil confirm whether the barcode
              is present or not on the blockchain and then show this on their
              smartphone.
            </p>
          </div>
        </div>
      </card>
   
    </card>
  </div>
</template>
<script>
import { Card } from "@/components/index";

 import header from "@/pages/header.vue";


export default {
  components: {
    'app-header':header,
     Card,

  },
  data() {
    return {
      blocknumber: 0,
      events: [],
    };
  },
};
</script>
<style></style>
