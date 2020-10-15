<template>
  <div>
    <h2 @click="http">page2</h2>
  </div>
</template>

<script>
import { getListId } from "@/router/api";
export default {
  mounted() {
    // let arr = ["女生1", "女生2", "女生3"];
    // arr.forEach(item => {
    //   this.biaobai(item).then(res => {
    //     if (res && res === undefined) {
    //       console.log(`表白成功,停止表白1`);
    //       return;
    //     } else {
    //       console.log("失败继续表白");
    //       return this.biaobai(item);
    //     }
    //   });
    // });
    // this.biaobai("女生1")
    //   .then(res => {
    //     console.log(res, 1);
    //     if (res) {
    //       console.log("表白成功,停止表白1");
    //       return;
    //     } else {
    //       return this.biaobai("女生2");
    //     }
    //   })
    //   .then(res => {
    //     // res可能是1.女生1表白成功unfind,2.女生2表白成功true,3女生2表白失败false
    //     console.log(res, 2);
    //     if (res === undefined) {
    //       return;
    //     } else if (res) {
    //       console.log("女生2表白成功");
    //       return;
    //     } else {
    //       return this.biaobai("女生3");
    //     }
    //   })
    //   .then(res => {
    //     console.log(res, 3);
    //     if (res === undefined) {
    //       return;
    //     } else if (res) {
    //       console.log("女生3表白成功");
    //       return;
    //     } else {
    //       console.log("都失败了");
    //       return;
    //     }
    //   });
  },
  methods: {
    biaobai(god) {
      return new Promise(resolve => {
        console.log(`邓哥向${god}发出了表白短信`);
        setTimeout(() => {
          if (Math.random() < 0.3) {
            resolve(true);
          } else {
            resolve(false);
          }
        }, 1000);
      });
    },
    async http() {
      // promise方法
      getListId({ id: 1 })
        .then(res => {
          console.log(res, 1);
          return getListId({ id: 2 });
        })
        .then(res => {
          console.log(res, 2);
          return getListId({ id: 3 });
        })
        .then(res => {
          console.log(res, 3);
        });
      // async await
      // let n = await getListId({ id: 1 }).then(res => {
      //   console.log(res, 1);
      //   return { id: 2 };
      // });
      // n = await getListId(n).then(res => {
      //   console.log(res, 2);
      //   return { id: 3 };
      // });
      // await getListId(n).then(res => {
      //   console.log(res, 3);
      // });
      // 错误示范
      // let n = getListId({ id: 1 }).then(res => {
      //   console.log(res, 1);
      //   return { id: 2 };
      // });
      // n = getListId(n).then(res => {
      //   console.log(res, 2);
      //   return { id: 3 };
      // });
      // getListId(n).then(res => {
      //   console.log(res, 3);
      // });
    }
  }
};
</script>

<style></style>
