<template>
  <div id="words">
    <div class="text-area">
      <div class="first-textarea">
        <textarea  v-model="words" placeholder="请输入文本"></textarea>
        <button v-show="words" class="gg-close-o" @click="purgeText()" ></button>
      </div>
      <div class="second-textarea" v-show="words"  v-for="index in alphabet" :key="index">
          <textarea disabled="true"  v-text="showWords(index)"></textarea>
          <button class="gg-copy" @click="copyText($event)"></button>
      </div>

    </div>
  </div>
</template>

<script>


import Toast from "@/common/toast"
import {toWords} from "@/common/w2w";

export default {
  components: {} ,
  name: 'Words',
  alphabet:0,
  data(){
    return{
      words: "",
      alphabet:[0,1,2,3,4,5,6,7,8,9,10]
  }
  },
  computed:{
    showWords(){
      return function(index){
        return toWords(this.words,index)
      }
    }
  },
  methods:{
    copyText(event){
      let content = event.target.previousElementSibling.innerHTML
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
          setTimeout(()=>Toast.success('一切都是命运石之门的选择!',5000),1000)
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>


.text-area{
  margin: 0.5rem;
  display: flex;
  flex-flow: column wrap;
  list-style: none;
}

.text-area textarea{
  margin-top: 20px;
  color: #1f2f3e;
  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 5px;
}
.first-textarea{
  display: flex;
  flex-direction: column;
}
.second-textarea{
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
}


.gg-close-o {
  align-self: flex-end;
  margin-right: 15px;
  margin-top: 35px;
  box-sizing: border-box;
  position: absolute;
  display: block;
  transform: scale(var(--ggs,1));
  width: 22px;
  height: 22px;
  border: 2px solid;
  border-radius: 40px;
  cursor: pointer;
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
  z-index: 99;
    margin-right: 20px;
    margin-bottom: 20px;
  box-sizing: border-box;
  display: block;
  width: 14px;
  height: 18px;
  border: 2px solid;
  cursor: pointer;
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
/* @media screen and (max-width: 1024px) {
  .text-area {
    flex-flow: column wrap;
    margin: 80px;
    justify-content: space-around;
  }
  .text-area textarea{
    width:70vw;
    height: 30vh;
  }
} */
/* @media only screen and (max-width: 768px) {
  .text-area {
    flex-flow: column wrap;
    margin: 30px 10px 10px 10px;
    justify-content: space-around;
  }
  .text-area textarea{
    width:70vw;
    height: 5vh;
  }
} */
.foo{
  position: relative;
  margin-top: 6vh;
}
</style>
