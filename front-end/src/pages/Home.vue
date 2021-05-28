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
              <strong>PolkaScanner</strong> is a mobile-friendly decentralized
              application (dApp) 2D barcode scanner for a Substrate-based
              blockchain, as part of A Fake Product Identification System.
            </p>

            <p>
              Every popular brand has fake manufacturers selling a counterfeited
              item at cheaper rates. Even the company experts may not be able to
              distinguish between fake ones and real ones. What if the original
              manufacturer has embedded a 2D barcode on the product which is
              tied to a blockchain system.
            </p>

            <p>
              This UI is based on
              <a href="https://demos.creative-tim.com/vue-white-dashboard"
                >Creative Tim's Vue White Dashboard</a
              >, so any
              <a
                href="https://demos.creative-tim.com/vue-white-dashboard/documentation"
                >documentation</a
              >
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
      <!-- <card>
        <template slot="header">
          <h3>Endpoint selector</h3>
        </template>
        <div class="row text-left">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xs-12">
            <p>
              Clicking the top right connection URL lets you pick another
              endpoint or enter your custom one. To add custom endpoints or
              modify the default list, edit
              <code>pages/Layout/TopNavbar.vue</code>. The default endpoint is
              <code>wss://kusama-rpc.polkadot.io</code> . This can be modified
              in <code>config.js</code> (rename <code>config.example.js</code>).
            </p>
          </div>
        </div>
      </card> -->
      <!-- <card>
        <template slot="header">
          <h3>Connection singleton</h3>
        </template>
        <div class="row text-left">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xs-12">
            <p>
              The file <code>connection.js</code> exports the API object which
              you can import and use in your components to interact with the
              chain. In a Vue component's script part:
            </p>
            <pre><code class="language-js">import api from &quot;../kusama.js&quot;;
</code></pre>
            <p>
              Then use the <code>api</code> promise in your components' methods
              and properties.
            </p>
            <p>
              For more complex but reusable interaction with the chain, it's a
              good idea to abastract such functionality into a separate file
              that consumes this singleton connection, and export that complex
              function instead.
            </p>
          </div>
        </div>
      </card> -->
    </card>
  </div>
</template>
<script>
import { Card } from "@/components/index";

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
};
</script>
<style></style>
