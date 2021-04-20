<template>
  <div>
    <!--Diğer taraftan gelicek olan html elemanlarını slot sayesinde burada otomatik kullanır.-->


    <div class="deneme">
      <!--name propytisi yardımı ile isimler alınır ve hangi slot hangi içeriği göstericek belilenebilir-->
      <slot name="heading"></slot>
    </div>

    <div class="deneme">
      <slot name="content"></slot>
    </div>
    <div class="deneme">
      <slot></slot>
    </div>

    <div class="deneme">
      <slot name="author">
        <!--Karşı taraftan authora ait olan slot gelmediği zamanlarda gösterilicek olan default değerler bu şekilde atanır-->
        <h3>Author verisi gelmedi...</h3>
      </slot>
    </div>
  </div>
</template>


<script>

export default {

}
</script>


<style scoped>
div.deneme{
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px #666;
  padding: 20px 20px;
  margin-top: 20px;
}
</style>
