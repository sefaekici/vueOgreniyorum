import Home from "./components/Home";
import Header from "./components/Header";


//Buradaki İşlmeler Lazy Load Sağlar Yani Componenetler Kullanılacağı Zaman Yüklenirler Bu da ciddi bir performans kazancı sağlar.
//Webpack tarafından çözülür.
const User=(resolve)=>{
    require.ensure(["./components/user/User"],()=>{
        resolve(require("./components/user/User"));
    })
}
const UserStart=(resolve)=>{
    require.ensure(["./components/user/UserStart"],()=>{
        resolve(require("./components/user/UserStart"));
    })
}
const UserDetail=(resolve)=>{
    require.ensure(["./components/user/UserDetail"],()=>{
        resolve(require("./components/user/UserDetail"));
    })
}
const UserEdit=(resolve)=>{
    require.ensure(["./components/user/UserEdit"],()=>{
        resolve(require("./components/user/UserEdit"));
    })
}


//Aşağıdaki Örnekte İse 3.Parametre Olarak Verilen User Sayesinde User Kullanıldığı Anda Hepsi Yüklenir.
/*const User=(resolve)=>{
    require.ensure(["./components/user/User"],()=>{
        resolve(require("./components/user/User"));
    },"User")
}
const UserStart=(resolve)=>{
    require.ensure(["./components/user/UserStart"],()=>{
        resolve(require("./components/user/UserStart"));
    },"User")
}
const UserDetail=(resolve)=>{
    require.ensure(["./components/user/UserDetail"],()=>{
        resolve(require("./components/user/UserDetail"));
    },"User")
}
const UserEdit=(resolve)=>{
    require.ensure(["./components/user/UserEdit"],()=>{
        resolve(require("./components/user/UserEdit"));
    },"User")
}*/




export const routes=[
    //name parametresi sayesinde routelar isimlendirilebilir.
    {path:'',name:"anasayfa",components:{
        default:Home,
        "header-top":Header,
        } },
    //children routes
    {path:'/user',components: {
        default:User,"header-bottom":Header,
        }, name: "kullanici",children:[
            {path:"",component:UserStart,name:"userStart"},//user
            {path:":id",component: UserDetail,
                beforeEnter:(to,from,next)=>{
                    console.log("Route Seviyesinde Kontrol...");
                    next();
                },
            },//user/12
            {path:":id/edit",component: UserEdit,name:"userEdit"},// user/12/edit
        ]},     // /user/:id olduğunda user pathi artık id alır.
    //redirect pathi geldiğinde yönlendirilecel pathi belirler.
    {path:"/redirect", redirect:"/"},
    //yukarıdakiler dışında gelen bütün pathlerde nerelere yönlendireleceğini belirler.
    {path:"*",redirect: {name:"userStart"}},
];

