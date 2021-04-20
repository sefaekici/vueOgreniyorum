<template>
    <div class="container">
        <form v-if="!isSubmited">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Soru 1 -->
                    <!-- Aşağıdaki bilgileri içeren bir Üye Ol sayfası geliştiriniz. -->
                    

                  
                      <div class="form-group">
                          <label>Full Name</label>
                          <full-name-input v-model.trim="person.personFullName"></full-name-input>
                      </div>
                      
                      <div class="form-group">
                            <label for="personEmail">Email Address</label>
                            <input v-model="person.personEmail" type="email" class="form-control" id="personEmail"  placeholder="Enter email">
                      </div> 

                      <div class="form-group">
                            <label for="personPassword">Password</label>
                            <input v-model="person.personPassword" type="password" class="form-control" id="personPassword" placeholder="Password">
                      </div>

                     
                      <div class="col-md-12 form-group">
                          <label>
                            <input v-model="person.personGender" type="radio" value="Erkek"> Erkek        
                          </label>             
                          <label>   
                            <input v-model="person.personGender" type="radio" value="Kadın"> Kadın
                          </label>   
                     </div>
                      
                      

                    <button class="btn btn-primary btn-lg btn-block" @click.prevent="submitForm()">Save</button>


                    <!-- Tam Adı (Ad + Soyad) -->
                    <!-- E-mail -->
                    <!-- Şifre -->
                    <!-- Cinsiyet (Kadın/Erkek) -->

                    <!-- Soru 2 -->
                    <!-- Üye Ol formu, Submit EDİLMEDİĞİ SÜRECE ekranda gözükmelidir.-->
                    <!-- Üye Bilgileri Ekranı ise form Submit EDİLDİKTEN SONRA ekranda gözükecektir -->

                    <!-- Soru 3 -->
                    <!-- Yukarıdaki uygulamayı düzenleyerek Tam Ad (Ad + Soyad) alanı için bir Form Kontrol Elemanı üretiniz -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmited">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h4>Girdiğiniz Bilgier</h4>
                    </div>
                    <div class="panel-body">
                        <p>Tam Ad:{{person.personFullName}} </p>
                        <p>E-mail: {{person.personEmail}} </p>
                        <p>Şifre: {{person.personPassword}} </p>
                        <p>Cinsiyet:{{person.personGender}} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from "./FullName";
    export default {
        components:{
            fullNameInput:FullName,
        },
        data(){
            return{
                person:{
                    personFirstName:null,
                    personLastName:null,
                    personFullName:this.personFirstName+" "+this.personLastName,
                    personEmail:null,
                    personPassword:null,
                    personGender:null,
                },
                isSubmited:false,
                
            }
        },
        methods:{
            submitForm(){
                this.isSubmited=true;
            }
        }
    }
</script>

<style scoped>
    div{
        margin-top: 5px;
    }

</style>>

