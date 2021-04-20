<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3 mt-4">

        <button @click="selectedComponent='memory'" class="btn btn-m btn-primary">memory</button>
        <button @click="selectedComponent='newMemory'" class="btn btn-m btn-primary">newMemory</button>
        <button @click="selectedComponent='author' " class="btn btn-m btn-primary">author</button>

        <p class="mt-3">Selected Component: {{selectedComponent}}</p>


        <!--keep-alive elementi aşağıda bahsedilen destroy işlemini engeller
        bunu newMemory de bulunan counter sayesinde anlayabiliriz değeri arttırıldığı zaman
        eğer keep-alive içerisinde olmasaydı component değişiminde counter sıfırlanacaktı
        ancak keep-alive içerisinde bulunduğu için componentin değişkenleri yani data sı sıfırlanmamaış oldu
        kısacası destroy işlemi engellenmiş oldu.
        -->

       <keep-alive>
         <!--Burada yer alan component elementi vue js e ait bir elementtir
       :is attiributesi sayesinde karşına gelen değerdeki isimli componenti çağırır
       isim değiştikten sonra önceki compıonenti destroy eder her seferinde yenden oluşturur.
       -->

         <component :is="selectedComponent">
           <!--Burada gönderilen değerler memory de yer alan slotlara karşılık geldiği için sadece onlarda çalışırlar-->
           <h1 slot="heading">Güzel bir gün....</h1>
           <p slot="content">Güzel bir anıydı.</p>

           <p>Güzel bir gün müydü acaba?</p>
         </component>
       </keep-alive>



        <!--Buradan gönderdiğimiz elementler componentte slot elementi sayesinde yakalanır.-->
        <!--slot propytisi yardımı ile elementler hangi slota gidicek belirlenebilir.-->
        <!--Burada slota isim verilmediği için gönderilen tarafta isimsiz olan slot için bu etiketin içeriği kullanılır-->
        <!-- <memory>

         <h1 slot="heading">Güzel bir gün....</h1>
         <p slot="content">Güzel bir anıydı.</p>

          <p>Güzel bir gün müydü acaba?</p>
        </memory> -->


      </div>
    </div>
  </div>
</template>

<script>
import Memory from "./components/Memory";
import NewMemory from "./components/NewMemory";
import Author from "./components/Author";
export default {
  data(){
    return{
      selectedComponent:"memory",
    }
  },
  components:{
    memory:Memory,
    newMemory:NewMemory,
    author:Author,
  },

}
</script>


