<template>
    <auth-form action='login' v-on:process="login($evnet)"/>
    
 </template>
 <script>
    import AuthForm from "@/forms/Auth";
    export default{
        name: "login",
        components:{AuthForm},
        methods:{
            register(user){
                console.log(user);
            }
        }
    }
 </script>
 