<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         class="tab-control-item"
         :class="{active:index == currentIndex}"
         @click="itemClick(index)"
         :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      //console.log(this.currentIndex)
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>

 .tab-control{
   display: flex;
   text-align: center;
   font-size: 15px;
   background-color: white;
 }
 .tab-control-item{
   cursor:pointer;
   margin: 0 10px 0 10px;
 }
 .tab-control-item span {
   padding: 5px;
 }
 .active{
   font-weight: bold;
 }
 .active span{
   border-bottom:2px solid ;
 }
</style>