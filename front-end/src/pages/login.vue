<template>
  <div class="content">
    <card>
      <template slot="header">
         <div class="vue-tempalte">
        <form>
            <h3> Manufacuterer log In</h3>

            <div class="form-group">
                  <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <!-- <router-link to="/forgot-password">Forgot password ?</router-link> -->
            </p>

            <div class="social-icons">
                <ul>
                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>

        </form>
    </div>
      </template>
      <div class="row">
        <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
          <a  href="https://polkadot.js.org/apps/#/explorer?rpc=ws://127.0.0.1:9944"> upload hash on blockchain</a>

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
