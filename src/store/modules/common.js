import {getArrIndex, reqFullScreen, exitFullScreen} from '@/util/tool'
const common = {
    namespaced: true,
    state: {
        isCollapse: false,
        tagList: JSON.parse(sessionStorage.getItem('tagList')) || [],
        tag: JSON.parse(sessionStorage.getItem('tag')) || {},
        keepAlive: [],
        isFullScreen: false
    },
    getters: {
        
    },
    mutations: {
        SET_COLLAPSE (state, params) {
            state.isCollapse = !state.isCollapse
        },
        ADD_TAG (state, params) {
            state.tag = params
            sessionStorage.setItem('tag', JSON.stringify(params))
            // console.log(state.tagList)
            state.tagList.forEach((item, index, array) => {
                if (item.value === params.value) {
                    state.tagList[index].query = params.query
                }
            })
            var bool = state.tagList.some((item, index, array) => {
                return item.value == params.value
            })
            if (bool) {
                return false
            } else {
                state.tagList.push(params)
                sessionStorage.setItem('tagList', JSON.stringify(state.tagList))
            }   
        },
        CLOSE_TAG (state, params) {
            var i = getArrIndex(state.tagList, params.value)
            state.tagList.splice(i, 1)
            sessionStorage.setItem('tagList', JSON.stringify(state.tagList))
        },
        KEEP_ALIVE (state, params) {
            state.keepAlive = params
        },
        SET_FULL_SCREEN (state, params) {
            state.isFullScreen = !state.isFullScreen
            if (state.isFullScreen) {
                reqFullScreen()
                state.isCollapse = true
            } else {
                exitFullScreen()
                state.isCollapse = false
            }
        }
    },
    actions: {

    }
}
export default common