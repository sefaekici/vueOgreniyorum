<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="currentComponent='app-blue'" class="btn btn-primary">Mavi Temayı Yükle</button>
                <button @click="currentComponent='app-green'" class="btn btn-success">Yeşil Temayı Yükle</button>
                <button @click="currentComponent='app-red'" class="btn btn-danger">Kırmızı Temayı Yükle </button>
                <hr>

             <keep-alive>
               <component :is="currentComponent">
                  <h3 slot="heading">Merhaba Ben Başlığım...</h3>
                  <p slot="description">Lorem ipsum dolor sit amet.</p>

                  <h5 slot="heading-green">Ben Yeşilin Başlığıyım...</h5>

                  <h5 slot="heading-red">Ben Kırmızının Başlığıyım...</h5>

               </component>
             </keep-alive>


            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
       data(){
          return{
            currentComponent:"",
          }
       }
    }
</script>

<style>
</style>
