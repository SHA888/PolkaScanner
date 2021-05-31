<template>
  <div class="content">
    <card>
      <template slot="header">
         <div class="vue-tempalte">
        <form>
            <h3> Distributers LOG IN  </h3>

            <div class="form-group">
                  <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

          <button type="submit" class="btn btn-dark btn-lg btn-block" 
           

            >    <li> <router-link to="/Events"> Sign  in</router-link> </li>
            
            
            
            </button>




         

        

        </form>
    </div>
      </template>
      <div class="row">
        <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">

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
