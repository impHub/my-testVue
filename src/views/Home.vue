<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      arr: [
        { age: 12, id: 1 },
        { age: 14, id: 2 },
        { age: 16, id: 3 }
      ]
    };
  },
  mounted() {
    // 返回第一查找到的值，并停止循环
    // findIndex返回查询到的下标;无法查询到返回-1
    const arr = this.arr.find(res => {
      console.log("hh");
      return res.id === 3;
    });
    console.log(arr);
    // 创建长度100的数组，并且每一项内容为abc
    // 之传一个参数就是长度，多个参数就是一个数组
    const abcArr = new Array(100);
    // 用abc填充数组
    abcArr.fill("abc");
    //
    const numArr = [1, 2, 4554, 55657, 31, 5543, 321, 34, 6];
    // includes代替indexOf方法直接返回true false
    console.log(numArr.includes(321));
  }
};
</script>
