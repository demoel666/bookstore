<template>
    <auth-form action='register' v-on:process="register($evnet)"/>
    
 </template>
 <script>
    import AuthForm from "@/forms/Auth";
    import {db} from '@/main'
    export default{
        name: "Register",
        components:{AuthForm},
        methods:{
            register(user){
                console.log(user);
                this.$store.dispatch('firebaseRegister',user)
                .then((userRegistered)=>{
                    const data={
                        uid:userRegistered.uid,
                        email:user.email,
                        role:'customer'
                    };
                    db.collection('users')
                        .doc(userRegistered.uid).set(data).
                        then(()=>{
                            this.$store.commint('setRole',data.role);
                            this.$router.push('/');
                        });
                }).catch((error)=>{
                    console.log(error);
                })
            }
        }
    }
 </script>
 
