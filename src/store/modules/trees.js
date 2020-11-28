import firebase from "../../firebaseConfig";
const db = firebase.firestore();
const state = {
    loadingTrees: true,
    creatingTree: false,
    trees:[],
};
const getters = {
    loadingTrees: (state) => state.loadingTrees,
    creatingTree: (state) => state.creatingTree,
    trees:(state) => state.trees,
};
const actions = {
    async createTree({ commit }, newObj) { 
        

        try {
            commit('setCreatingTree', true); 
            let obj = {
                    voluntieer: newObj.email ,
                    species: newObj.especie,
                    data: newObj.dataPlantio,
                    planted_number: newObj.quantidadeMudas,
                    planted_area: newObj.raioPlantio,
                    location: {
                        lat: newObj.latitude,
                        lng: newObj.longitude,
                    },
                    local_type: newObj.localDePlantio,
                    isSavanna: newObj.especieNativaCerrado
            }; 
            
            await db.collection("trees").add(obj);
            
            commit('addTree', obj);
            
         }
        catch (error) { 
            console.log(error.response)
        }
        finally { 
            commit('setCreatingTree', false);
        }
    },
    async fetchTrees( { commit  }) { 
        try {
            commit('setLoadingTree', true);
            let trees = [];
            const querySnapshot = await db.collection("trees").get();
            querySnapshot.forEach((doc) => {
                trees.push({id:doc.id, ...doc.data()  }); 
            });
            commit('setTrees', trees);
            
          
        } catch (error) {
           console.log(error.response)
        } finally { 
            commit('setLoadingTree', false);
        }
    }
};
const mutations = {
    setLoadingTree(state, newValue) { 
        state.loadingTrees = newValue;
    },
    setCreatingTree(state, newValue) { 
        state.creatingTree = newValue;
    },
    setTrees( state , newValue) { 
        state.trees = newValue;
    },
    addTree(state, newTree) { 
        state.trees.push(newTree) ;
    },
};

export default {
  state,
  getters,
  actions,
  mutations
};