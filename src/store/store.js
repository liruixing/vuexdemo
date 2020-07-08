import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state={
    name:'张三'
}
/**
 * mutations 是vuex中唯一修改store内容的地方   但是不能异步进行
 * @type {{changeNameWithParam(*, *): void, changeNameToZhangsan(*): void}}
 */
const mutations ={
    changeNameToZhangsan(state){
        state.name = 'lisi'
    },
    changeNameWithParam(state,payload){
        state.name = payload.name;
    }
}

const actions = {
    changeNameAsync(context){
        // let name = context.state.name;
        setTimeout(
            ()=>{
                context.commit('changeNameToZhangsan');
            },1000)
    },
    changeNameWithParamAsync(context,payload){
        setTimeout(
            ()=>{
                context.commit('changeNameWithParam',payload);
            },1000)
    }
}

const getters ={
    formatterName:state=>{
        let postfix ='';
        if(state.name == '张三'){
            postfix = '最棒';
        }
        return state.name + postfix;
    },
    customFormatterName:(state)=>(val)=>{
        let postfix='';
        if(state.name === '张三'){
            postfix = val;
        }
        return state.name + postfix;
    }

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})