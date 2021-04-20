<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>

        <select class="form-control" v-model="activeEffect">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>

        <hr />
        <button @click="show = !show" class="btn btn-primary">
          Kutuyu Göster/Gizle
        </button>
        <br /><br />

        <!--transition elementi vue js tarafından bize sunulan özel bir elementtir(template gibi)
        animasyon işlemlerimizi kolaylaştırır.
        Animasyon vermek istediğimiz elementleri transition içinde tanımlamalıyız.
        Transition  içerisine sadece bir element alır.
        Çoklu olması için transition-group kullanılmalıdır.
        -->
        <!--
          name değeri bind edilerek select işlemi ile gelen değer name e atandığı için 
          o değere karşılık gelen animasyonu dinamik olarak almış oluruz.
        -->
        <transition :name="activeEffect">
          <div v-if="show" class="alert alert-success">
            Bu bir alert kutusudur...Dinamik Alert!
          </div>
        </transition>

        <hr />

        <button @click="show2 = !show2" class="btn btn-danger">
          Kutuyu Göster/Gizle
        </button>
        <br /><br />
        <transition name="slide">
          <div v-if="show2" class="alert alert-danger">
            Bu bir alert kutusudur2
          </div>
        </transition>

        <hr />

        <button @click="show3 = !show3" class="btn btn-info">
          Kutuyu Göster/Gizle
        </button>
        <br /><br />
        <!--
          burada bulunan type proptyisi sayesinde hangisi bittiğinde işlemleri tamamen bitireceğimizi 
          seçeriz yani animasyon bittiğinde transiton işlemlerini de bitir deriz ya da tam tersi sağlarız.
          bu sayede çakışmalar önlenmiş olur 
        -->
        <!--
          v-if gibi v-show da kullanılabilir.
          vue js v-if ile yapıldığında attach veya dieattach işlemlerini kontrol ederken 
          v-show display özelliğini kontrol eder.
        -->
        <transition name="slidefade" type="animation">
          <div v-show="show3" class="alert alert-info">
            Bu bir alert kutusudur2
          </div>
        </transition>

        <hr />
        <!--
            transitona eklenen appear attiributesi sayesinde 
            gerekli şartlar sağlandığında animasyon çalışır.
            Sayfa yüklendiği anda şartlar sağlanmış ise sayfa yüklendiği anda çalışır.
          -->
        <transition name="slidefade" type="animation" appear>
          <div v-show="!show3" class="alert alert-info">
            Bu bir alert kutusudur3
          </div>
        </transition>

        <!--Animate.css-->
        <hr />

        <!--
          Animate.css kütüphanesi yardımı ile animasyonların kullanılması bu şekilde olur 
          active classları kullanmak yeterlidir.
          Sayfasaına girip kullanılabilir. Her klasın başında animate__aanimated etiketi olmalıdır.
        -->
        <transition
          enter-class=""
          enter-active-class="animate__animated  animate__shakeY"
          leave-class=""
          leave-active-class="animate__animated animate__swing"
          appear
        >
          <div class="alert alert-warning" v-show="!show">
            Bu bir alerttir.Animate.css
          </div>
        </transition>

        <!--
          iki elementin gösterimi esnasında yani 1.elementten 2.elemente geçişte animasyon 
          olmasısnı istiyorsak isek bu elementlere key eklememiz gerekmektedir.
          Key eklemediğimiz taktirded animasyon ya da transition çalışmaz.
        -->
        <!--
          mode attirubtesi sayesinde element silinme ve oluşma işlemleri esnasında oluşan 
          zıplamalar konum değişimleri vb şeyler animasyuonların hangi sırayla çalışacağını belirterek
          engellenebilir.Örneğin burada önce silme sonra ekleme işlemi yapılacağonı belirten out-in değeri 
          mode a atanmıştır.
        -->
        <transition name="fade" mode="out-in">
          <div v-if="show4" class="alert alert-info" key="info">
            Bu bir alert kutusudur3
          </div>
          <div v-else class="alert alert-danger" key="danger">
            Bu bir alert kutusudur4
          </div>
        </transition>

        <button class="btn btn-success btn-lg" @click="show4 = !show4">Göster/Gizle</button>

        <hr>

        <!--JS ANİMATİONS-->

        <!--
          :css="false" işlemiyle beraber transition içinde otomatik oluşturulan enter-class gibi 
          classların oluşturulması engellenmiştir.
        -->
        <transition
          :css="false"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @after-enter-cancelled="afterEnterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @after-leave-cancelled="afterLeaveCancelled"
        >
          <div  style="width:100px;height:100px; background-color:#fbbd08; border:1px solid #666 " v-show="showJS">
            Bu bir alerttir JS.
          </div>
        </transition>
       <button class="btn btn-primary" @click="showJS=!showJS">Göster/Gizle</button>
        

      <hr>
       <!--Dinamik Comppnenetlere Animasyon Eklemek-->
      <h3>Dinamik Componentlerle Animasyon İşlemleri</h3>
      <button class="btn btn-danger" @click="activeComponent='appHome'">HOME</button>
      <button class="btn btn-primary" @click="activeComponent='appPost'">POST</button>

      <transition name="fade" mode="out-in">
        <component :is="activeComponent"></component>
      </transition>
      
      <hr>
      <!--Transition Group-->

      <button class="btn btn-primary" @click="addNewItem(7)">Yeni Elemen Ekle</button>

      <ul class="list-group">
        
        <!--
          transition groyp içerisinde bulunan li lerde key olmak zorundadır.

        -->
        <transition-group name="slide">
          <li class="list-group-item" v-for="(item,index) in numberList" :key="item" @click="deleteItem(index)">Number: {{item}}</li>
        </transition-group>
        
      </ul>


      <br><br>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "./components/Home";
import Post from "./components/Post";
export default {
  data() {
    return {
      show: false,
      show2: false,
      show3: false,
      activeEffect: null,
      show4: false,
      showJS:false,
      elementWidth:100,
      activeComponent:"",
      numberList:[1,2,3,4,5],
    };
  },
  components:{
    appHome:Home,
    appPost:Post,
  },
  methods: {
    addNewItem(element){
      const position=Math.floor(Math.random()*this.numberList.length);
      this.numberList.splice(position,0,this.numberList.length+1);
    },
    deleteItem(item){
      this.numberList.splice(item,1);
    },
    beforeEnter(el){
      el.style.width=this.elementWidth+"px";
      console.log("beforeEnter");
    },
    //done paremetresi js e animasyonun bittiğini belirtir.Yani animasyonun sorunsuz çalışmasını sağlar.bir call back functiondır.çağırılması gerekir.
    enter(el,done){
      console.log("enter");
      let round=1;
      const interval=setInterval(()=>{
        el.style.width=(this.elementWidth+round*10)+"px";
        round+=1;

        //animasyonun bitmesi gereken süre sonunda intervalTemizlendi ve js e done fonksiyonuyla animasyonun bittiği mesajı verildi.
        if(round>20){
          clearInterval(interval);
          done();
        }
      },50);
      
    },
    afterEnter(el){
      console.log("afterEnter");
    },
    afterEnterCancelled(el){
      console.log("afterEnterCancelled");
    },
    beforeLeave(el){
      this.elementWidth=300;
      el.style.width=this.elementWidth+"px";
      console.log("beforeLeave");
    },
    leave(el,done){
      let round=1;
      const interval=setInterval(()=>{
        el.style.width=(this.elementWidth-round*10)+"px";
        round+=1;

        //animasyonun bitmesi gereken süre sonunda intervalTemizlendi ve js e done fonksiyonuyla animasyonun bittiği mesajı verildi.
        if(round>20){
          clearInterval(interval);
          done();
        }
      },50);
      console.log("leave");
    },
    afterLeave(el){
      console.log("afterLeave");
    },  
    afterLeaveCancelled(el){
      console.log("afterEnterCancelled");
    },

  },
 
};
</script>

<style>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

/*animationların active lerde çağırılması yeterlidir*/
.slide-enter {
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-in 1s alternate-reverse backwards;
  /*absolute özelliği eleman silinirken konumlarının kaymamasaı için yapılmıştır.*/
  position: absolute;
}

/*bu class bize transition group tarafından gelir.*/
.slide-move{
  transition: transform 1s;
}

.slidefade-enter {
  opacity: 0;
}
.slidefade-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1s;
}
.slidefade-leave {
  opacity: 1;
}
.slidefade-leave-active {
  animation: slide-in 1s alternate-reverse backwards;
  transition: opacity 1s;
  opacity: 0;
}

/*animasyon isimlendirme yani oluşturma
animation proprtysi ile beraber kullanılır.
*/
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}
</style>
