<template>
  <div class="about">
    <table border="1">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key">
            <div>
              <!-- 在这里先判断 type -->
              <template v-if="col.type === 'selection'">
                <input
                  ref="allCheckbox"
                  type="checkbox"
                  :checked="isSelectAll"
                  @change="selectAll($event)"
                />
              </template>
              <template v-else>{{ col.title }}</template>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data" :key="row.key">
          <td v-for="col in columns" :key="col.key">
            <div>
              <!-- 在这里先判断 type -->
              <template v-if="col.type === 'selection'">
                <input
                  type="checkbox"
                  :checked="row.select"
                  @change="toggleSelect($event, row)"
                />
              </template>
              <template v-else>{{ row[col.key] }}</template>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  methods: {
    selectAll(e) {
      console.log(e.target.checked);
      if (e.target.checked) {
        this.data.forEach(res => {
          res.select = true;
        });
      } else {
        this.data.forEach(res => {
          res.select = false;
        });
      }
    },
    toggleSelect(e, row) {
      row.select = !row.select;
      console.log(e, row.select);
    }
  },
  computed: {
    isSelectAll() {
      let n = 0;
      let key;
      this.data.forEach(res => {
        if (res.select) {
          ++n;
        }
      });
      if (n === this.data.length) {
        key = true;
      } else {
        key = false;
      }
      return key;
    }
  },
  data() {
    return {
      columns: [
        {
          type: "selection" // 这个地方可以不用写 key，type 就相当于 key
        },
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "年龄",
          key: "age"
        },
        {
          title: "职位",
          key: "job"
        }
      ],
      data: [
        {
          id: 1,
          name: "Jasmine",
          age: 18,
          job: "产品",
          desc: "这是展开的描述啊1",
          select: false
        },
        {
          id: 2,
          name: "Mango",
          age: 18,
          job: "设计",
          desc: "这是展开的描述啊2",
          select: false
        },
        {
          id: 3,
          name: "Aking",
          age: 24,
          job: "前端",
          desc: "这是展开的描述啊3",
          select: false
        },
        {
          id: 4,
          name: "Dick",
          age: 30,
          job: "后端",
          desc: "这是展开的描述啊4",
          select: false
        },
        {
          id: 5,
          name: "Lucy",
          age: 18,
          job: "测试",
          desc: "这是展开的描述啊5",
          select: false
        }
      ]
    };
  }
};
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #e9e9e9;
}
table th {
  background: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
  white-space: nowrap;
}
table td,
table th {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}
</style>
