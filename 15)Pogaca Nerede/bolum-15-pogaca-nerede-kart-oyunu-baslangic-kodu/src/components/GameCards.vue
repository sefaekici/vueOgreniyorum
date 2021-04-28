<template>
  <div class="game-area">
    <p>{{defaultCardElement}}</p>
    <h1 class="title">Poğaça <span>Nerede</span> <strong>?</strong></h1>
      <h4 class="description">Açık kartlardan birini seçtikten sonra,kapalı olan kartlara tıklayınız.</h4>

    <div class="container">

      <transition-group name="rotate-all" appear class="card-container">
        <app-card
            :class="{'selectedShadow':card.id===selectedCard}"
            @click.native="selectedCard=card.id"
            v-for="card in cards"
            :card="card"
            :key="card.id"

        ></app-card>
      </transition-group>

    </div>

    <div class="container">
      <transition name="rotate" mode="out-in">
        <component
            @click.native="showCard(defaultCardElement)"
            :card="defaultCardElement"
            :is="dynamicComponent"></component>
      </transition>

    </div>

  </div>
</template>

<script>
import Card from "./Card";
import DefaultCard from "./DefaultCard";
export default {
  components:{
    appCard:Card,
    appDefaultCard:DefaultCard,

  },
  data(){
    return{
      selectedCard:null,
      defaultCardElement: {},
      dynamicComponent:"appDefaultCard",
      cards:[
        {id:1,component:"appCard",image:"/src/assets/card-1.jpg"},
        {id:2,component:"appCard",image:"/src/assets/card-2.jpg"},
        {id:3,component:"appCard",image:"/src/assets/card-3.jpg"},
        {id:4,component:"appCard",image:"/src/assets/card-4.jpg"},
        {id:5,component:"appCard",image:"/src/assets/card-5.jpg"},
      ],

    }
  },
  methods:{
    showCard(defaultCardElement){

      if(this.selectedCard==null){
        alert("Lütfen kart seçiniz...");
      }
      else{
        this.dynamicComponent=defaultCardElement.component;
        setTimeout(()=>{
          if(defaultCardElement.id===this.selectedCard){
            this.$emit("isCorrectEvent","appCelebrate");
          }
          else{
            this.$emit("isCorrectEvent","appFailure");
          }
        },2000);
      }


    },
  },
  created() {
    let randomElement=Math.ceil(Math.random()*5);
    this.defaultCardElement=this.cards[randomElement-1];
  }

}
</script>

<style scoped>
  .title{
    text-align: center;
    color: rosybrown;
  }
  .title span{
    color: mediumpurple;
  }
  .title strong{
    color: mediumorchid;
  }
  .description{
    color: gray;
    text-align: center;
  }
  .container,.card-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;
  }
  .selectedShadow{
    box-shadow: 0 5px 48px #30969f !important;
    transition: box-shadow .8s;
  }


  /*********  Açık Kartların Animasyon İşlemleri  **********/
  /*
  Animasyon işleminde leave ve leave-activin kullanulmasına şu durumlarda gerek yoktur
  herhangi bir elemenaın ekranda silinmesi gibi durumlar yok ise yani deattach yok ise
  çıkış animasyonu belirlenmesine gerek yoktur.
  */
  .rotate-all-enter-active{
      /*animation*/
      animation: rotate-all ease-in-out 2s forwards;
  }
  @keyframes rotate-all {
    from{
      transform: rotateY(0);
    }
    to{
      transform: rotateY(720deg);
    }
  }

  /*Kapalı Kartın Animasyonu*/

  .rotate-enter-active{
      animation: rotate-in .5s ease-in-out forwards;
  }

  .rotate-leave-active{
      animation: rotate-out .5s ease-in-out forwards;
  }

  @keyframes rotate-in {
    from{
      transform: rotateY(90deg);
    }
    to{
      transform: rotateY(0deg);
    }
  }

  @keyframes rotate-out {
    from{
      transform: rotateY(0deg);
    }
    to{
      transform: rotateY(90deg);
    }
  }

  




</style>