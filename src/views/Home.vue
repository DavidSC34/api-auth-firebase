<template>
  <form @submit.prevent="procesarFormulario">
     <Input :tarea="tarea"/>
  </form>
  <hr>
<ListaTareas />
</template>

<script>
import Input from "../components/Input";
import ListaTareas from '../components/ListaTareas';
import { mapActions } from "vuex";

const shortid = require('shortid');


export default {
  name: 'Home',
  components: {
    Input,
    ListaTareas
    
  },
  data(){
    return{
      tarea:{
        id:'',
        nombre:'',
        categorias:[],
        estado:'',
        numero:0
      }
    }
  },
  methods: {
    ...mapActions(['setTareas']),
    procesarFormulario() {
    
      if(this.tarea.nombre.trim() ===""){
        console.log('Campo vacio');
        return;
      }
     this.tarea.id =shortid.generate();
     console.log(this.tarea.id);
      //enviar los datos
      this.setTareas(this.tarea);

      this.tarea={id:'',nombre:'',categorias:[],estado:'', numero:0};
    }
  },
  
}
</script>
