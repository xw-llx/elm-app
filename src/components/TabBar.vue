<template>
  <div class="tabbar">
    <router-link :to="item.path" class="tabbarItem" v-for="(item,index) in data" :key="index" active-class="isActive">
      <div class="tabbarIcon">
        <i :class="'fa fa-'+item.icon"></i>
      </div>
      <div class="tabbarP">{{item.title}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  props:{
    data:Array
  }
};
</script>

<style scoped>
.tabbar {
  height: 50px;
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-size: 100% 10px;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-color: #fafafa;
  display: flex;
  text-align: center;
}
.tabbarItem {
  display: block;
  padding: 3px 0;
  flex: 1;
}
.tabbarIcon {
  width: 20px;
  height: 20px;
  margin: 0 auto 5px;
}
.tabbarIcon i {
  font-size: 16px;
}
.tabbarP {
  color: inherit;
  font-size: 10px;
  line-height: 1;
}
a {
  text-decoration: none;
  color: #999;
}
.isActive {
  color: #009eef;
}
</style>