import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Slider, Image } from '@tarojs/components'
import { AtButton, AtNavBar, AtTabBar } from 'taro-ui'
import './index.less'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      num: 0,
      imgUrls: [
        'https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180',
        'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180',
        'https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180'
      ]
    }
  }
  handleClick = (e) => {
    this.state.num ++;
    this.setState({
      num: this.state.num
    })
  }
  handleTab = (value) => {
    this.setState({
      current: value
    })
  }

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { imgUrls } = this.state;
    return (
      <View className='index'>
        <AtNavBar
          onClickRgIconSt={this.handleClick}
          onClickRgIconNd={this.handleClick}
          onClickLeftIcon={this.handleClick}
          color='#000'
          title={this.state.num}
          leftText='返回'
          rightFirstIconType='bullet-list'
          rightSecondIconType='user'
        />
        <Swiper
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical
          circular
          indicatorDots
          autoplay>
          {
            imgUrls.map((item, idx) => (
              <SwiperItem key={idx}>
                <Image mode='widthFix' src={item} className='slide-image' width='355' height='150' />
              </SwiperItem>
            ))
          }
        </Swiper>
        <AtButton className="btn-item" type='primary'>按钮</AtButton>
        <AtTabBar
          fixed
          tabList={[
            { title: '待办事项', iconType: 'bullet-list', text: 'new' },
            { title: '拍照', iconType: 'camera' },
            { title: '文件夹', iconType: 'folder', text: '100', max: '99' }
          ]}
          onClick={this.handleTab}
          current={this.state.current}
        />
      </View>
    )
  }
}

