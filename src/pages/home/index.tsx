import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { Button } from "@taroify/core"
import { PageStateProps } from '@/interface'

import './index.module.scss'

interface Index {
  props: PageStateProps;
}

@inject('store')
@observer
class Index extends Component {
    componentWillMount () { }

    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        return (
            <View className='home-page'>
                主页
            </View>
        )
    }
}

export default Index
