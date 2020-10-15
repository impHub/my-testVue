<template>
  <div> 
    <h2 :class="['name', type, n === 1 ? 'age' : 'id']">{{ 2 | filterA }}</h2>
  </div>
</template>

<script>
// import { filter } from "vue/types/umd";
export default {
  data() {
    return {
      type: "dkijl",
      n: 2
    };
  },
  mounted() {
    let arr = [
      { id: 1, name: "yu" },
      { id: 2, name: "yu2" },
      { id: 3, name: "yu3" },
      { id: 4, name: "yu4" }
    ];
    let n = [];
    arr.forEach(res => {
      if (res.id === 4) {
        // console.log(res);
        n.push(res);
      }
    });
    console.log(n);
    let b = arr.find(res => {
      console.log("aaa");
      return res.id > 10;
    }); // 返回元素-5
    console.log(b);
  },
  filters: {
    filterA: function(val) {
      let n;
      switch (val) {
        case 1:
          n = "男1";
          break;
        case 2:
          n = "男2";
          break;
        case 3:
          n = "男3";
          break;
        case 4:
          n = "男4";
          break;
      }
      return n;
    }
  }
};
</script>

<style></style>
