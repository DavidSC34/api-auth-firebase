<template>
   <input type="text" class="form-control my-2" placeholder="Ingrese su nombre" v-model.trim="tarea.nombre">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="check-1" v-model="tarea.categorias" value="javascript" >
        <label class="form-check-label" for="check-1">Javascript</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="check-2" v-model="tarea.categorias" value="nodejs">
        <label class="form-check-label" for="check-2">NodeJs</label>
      </div>
      
      <div class="mt-2">

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="radio-1" value="urgente" v-model="tarea.estado">
            <label class="form-check-label" for="radio-1">Urgente</label>
          </div>
          <div class="form-check form-check-inline">
           <input class="form-check-input" type="radio" id="radio-2" value="relax" v-model="tarea.estado">
           <label class="form-check-label" for="radio-2">Relax</label>
        </div>
      </div>
      <div class="mt-2">
        <input class="form-control" type="number" v-model.number="tarea.numero">
      </div>
      <button class="btn btn-dark mt-2 btn-block" type="submit" :disabled="bloquear">Procesar</button>
</template>

<script>
export default {
    props:{
            tarea:Object
    },
    computed: {
        bloquear() {
        return this.tarea.nombre.trim() ==="" ? true : false;      
        
        }
    },

}
</script>

