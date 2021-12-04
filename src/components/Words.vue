<template>
  <div id="words">
    <h1 style="margin-top: 80px">英文花体转换器</h1>
    <div class="text-area">

      <div class="first-textarea">
        <textarea  v-model="words" placeholder="请输入文本"></textarea>
        <button v-show="words" class="gg-close-o" @click="purgeText()" ></button>
      </div>

      <div class="second-textarea">
        <textarea disabled="true" ref="second" v-model="showWords"></textarea>
        <button class="gg-copy" @click="copyText()" ></button>
      </div>

    </div>

     <div class="foo"><h3>Power by Okarin</h3></div>
  </div>
</template>

<script>

import Toast from "@/common/toast"
import {toWords} from "@/common/w2w";
export default {
  name: 'Words',
  props: {
    msg: String
  },
  data(){
    return{
      words: "",
  }
  },
  computed:{
    showWords(){
     return toWords(this.words)
    }
  },
  methods:{
    copyText(){
      let content = this.$refs.second.value
      console.log(content)
      if (content) {
        const el = document.createElement('textarea');  //创建一个textarea
        el.value = content;                //textarea的内容
        el.setAttribute('readonly', '');   //添加相应的属性，不影响整体布局
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy') //拷贝当前选中内容到剪贴板
        Toast.success('文本已复制')
      }
    },
    purgeText(){
      this.words=''
    }
  },
  watch:{
    words(){
        if(this.words === 'EL PSY CONGROO' ||this.words === 'el psy congroo'){
          setTimeout("alert('一切都是命运石之门的选择')", 1000 )
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.text-area{
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  justify-content: space-around;
  align-content: center;
  margin: 0 40px 0 40px;
}

.text-area textarea{
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  padding: 10px;
  font-size: 22px;
  resize: none;
  flex-shrink: 0;
  margin-top: 20px;
  width: 40vw;
  height: 50vh;
  color: #1f2f3e;
  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 5px;
}
.first-textarea{
  display: flex;
  flex-direction: row-reverse;
}
.second-textarea{
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
}


 .gg-close-o {
  margin-right: 15px;
  margin-top: 40px;
 box-sizing: border-box;
 position: absolute;
 display: block;
 transform: scale(var(--ggs,1));
 width: 22px;
 height: 22px;
 border: 2px solid;
 border-radius: 40px
}

.gg-close-o::after,
.gg-close-o::before {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute;
 width: 12px;
 height: 2px;
 background: currentColor;
 transform: rotate(45deg);
 border-radius: 5px;
 top: 8px;
 left: 3px
}

.gg-close-o::after {
 transform: rotate(-45deg)
} 

.gg-copy {
  position: absolute;
  align-self: flex-end;
  margin-right: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  display: block;
  width: 14px;
  height: 18px;
  border: 2px solid;

}

.gg-copy::after,
.gg-copy::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute
}

.gg-copy::before {
  background:
      linear-gradient( to left,
      currentColor 5px, transparent 0)
      no-repeat right top/5px 2px,
      linear-gradient( to left,
      currentColor 5px, transparent 0)
      no-repeat left bottom/ 2px 5px;
  box-shadow: inset -4px -4px 0 -2px;
  bottom: -6px;
  right: -6px;
  width: 14px;
  height: 18px
}

.gg-copy::after {
  width: 6px;
  height: 2px;
  background: currentColor;
  left: 2px;
  top: 2px;
  box-shadow: 0 4px 0,0 8px 0
}
@media screen and (max-width: 1024px) {
  .text-area {
    flex-flow: column wrap;
    margin: 80px;
    justify-content: space-around;
  }
  .text-area textarea{
    width:70vw;
    height: 30vh;
  }
}
@media only screen and (max-width: 768px) {
  .text-area {
    flex-flow: column wrap;
    margin: 10px;
    justify-content: space-around;
  }
  .text-area textarea{
    width:70vw;
    height: 30vh;
  }
}
.foo{
  position: relative;
  margin-top: 80px;
}
</style>
