<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>VueJS ile gelen Directive Tanımları</h3>
        <p v-text="'Deneme yanilma metodu her zaman iyidir..'"></p>
        <p v-html="'<strong>Bu da v-html</strong>'"></p>
        
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Custom Directive</h3>
        <p v-color:background.delay="'green'">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          aspernatur beatae culpa doloribus, ex facilis fugiat, fugit magni
          molestiae mollitia, nesciunt nihil perspiciatis quaerat quam quas
          ratione sequi unde ut!
        </p>
        <p v-color.flash="'red'">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          aspernatur beatae culpa doloribus, ex facilis fugiat, fugit magni
          molestiae mollitia, nesciunt nihil perspiciatis quaerat quam quas
          ratione sequi unde ut!
        </p>
        <p v-fontsize="{fontSize:'15px',color:'red',marginTop:'50px'}">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          aspernatur beatae culpa doloribus, ex facilis fugiat, fugit magni
          molestiae mollitia, nesciunt nihil perspiciatis quaerat quam quas
          ratione sequi unde ut!
        </p>
         <p v-fontsize.bold="'25px'">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          aspernatur beatae culpa doloribus, ex facilis fugiat, fugit magni
          molestiae mollitia, nesciunt nihil perspiciatis quaerat quam quas
          ratione sequi unde ut!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //local directive tanımlama
  directives:{
    "fontsize":{
      bind(el,binding,vnode){
        if(binding.modifiers["bold"]){
          el.style.fontWeight="bold";
          el.style.fontSize = binding.value;
        }
        else{
          el.style.fontSize = binding.value.fontSize;
          el.style.color=binding.value.color;
          el.style.marginTop=binding.value.marginTop;
        }
        
      }
    },


  },
};
</script>

<style></style>
