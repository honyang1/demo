<template>
  <div>
    <el-steps :active="active" align-center finish-status="success">
      <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
    </el-steps>
    <form1 v-if="active===0" @next="Fnext" ></form1>
    <form2 v-if="active===1" @next="next" @back="back"></form2>
    <form3 v-if="active===2" @next="next"></form3>
  </div>
</template>


<script>
import form1 from "./form1.vue";
import form2 from "./form2.vue";
import form3 from "./form3.vue";
export default {
  components: {
    form1,
    form2,
    form3
  },
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      active: 0
    };
  },
  methods: {
    Fnext() {
      if (this.active++ > 2) this.active = 2;
    },
    back() {
      if (this.active-- < 0) this.active = 0;
    }
  }
};
</script>

<style >
</style>