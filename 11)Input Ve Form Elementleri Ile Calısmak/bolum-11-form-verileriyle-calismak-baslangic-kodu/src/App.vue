<template>
  <div class="container">
    <h3>Form Verileriyle Çalışmak</h3>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <div class="panel panel-warning">
          <div class="panel-heading">
            <h4>Başvuru Formu</h4>
          </div>
          <div class="panel-body">
            <form>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="username">Kullanıcı Adı</label>
                    <!--lazy modifieri sayesinde başka bir ınput alanına geçiş yapılmadan değer değişkene atanmaz.-->
                    <input v-model.lazy="user.userName" type="text" id="username" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="password">Şifre</label>
                    <!--trim modifieerı değerin sonuna gelicek boşlukları engeller.-->
                    <input v-model.trim="user.userPassword" type="password" id="password" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="age">Yaş</label>
                    <!-- number ve trim modifierdır ve number sayesinde alınan değer number olur ve trim sonuna konan boşlukları engeller -->
                    <input v-model.number.trim="user.userAge" type="number" id="age" class="form-control">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label for="message">Açıklama</label><br>
                  <textarea v-model="user.userDescription" id="message" rows="3" class="form-control"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>
                      <input v-model="user.userInterests" type="checkbox" value="yazilim"> Yazılım
                    </label>
                    <label>
                      <input v-model="user.userInterests" type="checkbox" value="donanim"> Donanım
                    </label>
                  </div>

                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label>
                    <input v-model="user.userGender" type="radio" value="Erkek"> Erkek
                  </label>
                  <label>
                    <input v-model="user.userGender" type="radio" value="Kadın"> Kadın
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 from-group">
                  <label>Şehir</label>
                  <!--optionlarda v-model ile değer alma işlemi select üzerinden yapılır.-->
                  <select v-model="user.userCity" class="form-control">
                    <!--:selected bind işleminde default olarak seçili şehir belirlenmiştir.-->
                    <option
                        :selected="citie==='Adana'"
                        v-for="citie in cities">
                        {{citie}}
                    </option>
                  </select>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 form-group">
                      <appSwitch v-model="switched"></appSwitch>
                </div>
              </div>

              <hr>
              <div class="row">
                <div class="col-md-12">
                  <button
                      @click.prevent="submit()"
                      class="btn btn-primary">Gönder!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6" v-if="isSubmited">
          <div class="panel panel-info">
            <div class="panel-heading">
              <h4>Form Verileri</h4>
            </div>
            <div class="panel-body">
              <p>Kullanıcı Adı:{{user.userName}}</p>
              <p>Şifre:{{user.userPassword}}</p>
              <p>Yaş:{{user.userAge}}</p>
              <!-- white-space pre sayesinde gelen değerde bulunan boşluklar alt satıra inmeler olduğu gibi durur yani textin formatı bozulmaz. -->
              <p style="white-space: pre">Açıklama: {{user.userDescription}}</p>
              <p><strong>İlgi Alanları</strong></p>
              <ul>
                <li v-for="element in user.userInterests">{{element}}</li>
              </ul>
              <p>Cinsiyet:{{user.userGender}}</p>
              <p>Şehir:{{user.userCity}}</p>
              <p>Toggle:{{switched}}</p>
            </div>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
import Switch from "./Switch";
  export default {
    data(){
      return {
        user:{
          userName:"",
          userPassword:"",
          userAge:0,
          userDescription:"",
          userInterests:[],
          userGender:"",
          userCity:"",
        },
        cities:["Ankara","Istanbul","Izmir","Adana","Samsun","Edirne","Tokat"],
        switched:true,
        isSubmited:false,
      }
    },
    components:{
      appSwitch:Switch,
    },
    methods:{
      submit(){
          this.isSubmited=true;
      },
    },
  }
</script>

<style>

</style>
