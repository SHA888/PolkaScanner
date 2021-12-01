<template slot="header">

<div class="content text-left">


    <card>


<app-header></app-header>

    
    </card>
</div>

</template>
<script>
import { Card } from "@/components/index";

 import header from "@/pages/header.vue";


export default {
  components: {
    'app-header':header,

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
