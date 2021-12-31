import { observable } from 'mobx'

const globalStore = observable({
    info: {}
})

export default globalStore
