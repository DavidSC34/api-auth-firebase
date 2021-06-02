import { createStore } from 'vuex'
import router from '../router/index'

export default createStore({
    state: {
        tareas: [],
        tarea: { id: '', nombre: '', categorias: [], estado: '', numero: 0 },
        user: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        cargar(state, payload) {
            state.tareas = payload;
        },
        set(state, payload) {
            state.tareas.push(payload);

        },
        eliminar(state, payload) {
            state.tareas = state.tareas.filter(item => item.id !== payload);

        },
        tarea(state, payload) {

            if (!state.tareas.find(item => item.id === payload)) {
                router.push('/');
                return;
            }
            state.tarea = state.tareas.find(item => item.id === payload);
        },
        update(state, payload) {
            state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item);

            router.push('/');
        }
    },
    actions: {
        async registrarUsuario({ commit }, usuario) {
            try {
                const resp = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]', {
                    method: 'POST',
                    body: JSON.stringify({

                    })
                })
            } catch (error) {
                console.log(error);
            }
            console.log(usuario);
        },
        async cargarLocalStorage({ commit }) {
            try {
                const res = await fetch('https://udemy-api-be9b7-default-rtdb.firebaseio.com/tareas.json');
                const dataDB = await res.json();
                // console.log(dataDB);
                const arrayTareas = [];
                for (let id in dataDB) {

                    arrayTareas.push(dataDB[id]);
                }
                commit('cargar', arrayTareas);
            } catch (error) {
                console.log(error);
            }
        },
        async setTareas({ commit }, tarea) {
            try {
                const rest = await fetch(`https://udemy-api-be9b7-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(tarea)
                });
                const dataDB = await rest.json();
                console.log(dataDB);
            } catch (error) {
                console.log(error);
            }

            commit('set', tarea);
        },
        async deleteTareas({ commit }, id) {
            try {
                await fetch(`https://udemy-api-be9b7-default-rtdb.firebaseio.com/tareas/${id}.json`, {

                    method: 'DELETE'
                });
                commit('eliminar', id);

            } catch (error) {
                console.log(error);
            }
        },
        setTarea({ commit }, id) {
            commit('tarea', id)
        },
        async updateTarea({ commit }, tarea) {

            try {
                const res = await fetch(`https://udemy-api-be9b7-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
                    method: 'PATCH',
                    body: JSON.stringify(tarea)
                });
                const dataDB = await res.json();
                console.log(dataDB);
                commit('update', dataDB);

            } catch (error) {
                console.log(error);
            }
        }
    },
    modules: {}
})