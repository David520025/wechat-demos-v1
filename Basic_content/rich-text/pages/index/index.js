// 渲染的HTML定义使用了一对符号 ``
const htmlSnip =
`<div class="div_class">
  <h1>Title</h1>
  <p class="p">
    Life is&nbsp;<i>like</i>&nbsp;a box of
    <b>&nbsp;chocolates</b>.
  </p>
</div>
`

Page({
  data: {
     htmlSnip,
  },
})