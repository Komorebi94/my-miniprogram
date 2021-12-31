import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { Button } from "@taroify/core"
import { PageStateProps } from '@/interface'

import './index.module.scss'

type PageStateProps = {
  store: {
    counterStore: {
      counter: number,
      increment: Function,
      decrement: Function,
      incrementAsync: Function
    }
  }
}

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

  increment = () => {
      const { counterStore } = this.props.store
      counterStore.increment()
  }

  decrement = () => {
      const { counterStore } = this.props.store
      counterStore.decrement()
  }

  incrementAsync = () => {
      const { counterStore } = this.props.store
      counterStore.incrementAsync()
  }

  render () {
      const { counterStore: { counter } } = this.props.store
      return (
          <View className='home-page'>

          </View>
      )
  }
}

export default Index
