<template>
  <div id="app">
    <words />
    <div class="content-box">
      <h2>说明</h2>
      <blockquote>
        <p>某年某月某日</p>
        <p>
          我在某友圈看到一段 ᴴᵉˡˡᵒ ᵂᵒʳˡᵈ
          的特殊字体英文，因为它长得太特殊了，跟周围的文字格格不入，我把它复制到我的记事本里面，拿来当我的签名。又因为我这个人是个收集控，
          所以我就费了9🐮2🐯之力找齐了其他的字母。然后我又顺便找到𝙃𝙚𝙡𝙡𝙤
          𝙒𝙤𝙧𝙡𝙙，ℍ𝕖𝕝𝕝𝕠 𝕎𝕠𝕣𝕝𝕕 等各种花体。
          但是让我难受的是，我每次只能一个字母一个字母的复制粘贴。我淦，于是就有了这个网页。还有一件事，我写这玩意儿先后用了四种算法，最后发现最快的居然是原始版本。。
        </p>
        <p>@送报少年</p>
      </blockquote>

      <h2>为什么做这东西？</h2>
      <p>因为我懒🙄</p>

      <h2>怎么使用这玩意儿？</h2>
      <p>你可以以任何姿势使用它，你可以躺着使用，坐着使用，站着使用。</p>

      <h2>你有新的花体想添加？</h2>
      <p>
        请用任意方式发我！😖 比如
        <a href="https://weibo.com/u/6331216566" target="_blank">@送报少年</a>
      </p>

      <h2>还有什么补充？</h2>
      <p>
        我还埋藏了一个小彩蛋，如果你也是石头门的粉丝的话。对了这玩意儿也有微信小程序版本，搜索《花体转换器》
      </p>

      <h2>支付宝打赏</h2>
      <p>
        <img width="200" src="@/assets/alipay.jpg" alt="支付宝打赏" />
      </p>

      <h2>仓库地址</h2>
      <p>
        <a href="https://github.com/Okarin1/w2w-project" target="_blank"
          >https://github.com/Okarin1/w2w-project</a
        >
      </p>

      <h2>鸣谢</h2>
      <p><a href="https://weibo.com/reiove" target="_blank">@卜卜口</a></p>
    </div>
  </div>
</template>

<script>
import Words from "./components/Words.vue";

export default {
  name: "App",
  components: {
    Words,
  },
};
</script>

<style>
@import "assets/css/base.css";
@import "assets/css/word.css";

.cpt-toast {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 20vh;
  text-align: center;
}
.success {
  font-size: 15px;
  color: white;
  padding: 10px;
  border-radius: 30px;
  background-color: rgba(14, 13, 13, 0.6);
}
</style>
