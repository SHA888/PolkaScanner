<template>
  <div class="content">
    <card>
      <template slot="header">
        <h5 class="title">Events</h5>
        <p class="category">Outputs the events as they come in</p>
      </template>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xs-6">
          <card v-for="(event, block) in events">
            {{ block }}
            <p v-for="e in event">
              {{ e }}
            </p>
          </card>
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
      events: {},
      unsub: null
    };
  },
  methods: {
    subscribe: async function() {
      let myapi = await api;
      
      myapi.query.system.events(async (events) => {
        let header = await myapi.rpc.chain.getHeader();
        let blockNumber = header.toJSON.number;

        let eventArray = [];

        console.log(`Received ${events.length} events: `);

        events.forEach((record) => {
          const {event, phase} = record;
          eventArray.push(`${event.section}: ${event.method}:: (phase=${phase.toString()}`);
        });
        this.$set(this.events, blockNumber, eventArray);
      }).then((_unsub) => (this.unsub = _unsub));
    },
    unsubscribe: function() {
      if(this.unsub) {
        this.unsub();
        console.log("Unsubbed");
      }
    }
  },
  created() {
    this.subscribe();
  },
  beforeDestroy() {
    this.unsubscribe();
  }
};
</script>
<style></style>
