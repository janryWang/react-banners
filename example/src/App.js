import React, { Component } from 'react'

import Banners from 'react-banners'

export default class App extends Component {
  render() {
    return (
      <div>
        <Banners>
          <Banners.Title color="#666">这是主标题</Banners.Title>
          <Banners.Cards>
            <Banners.Card>这是一个卡片这是一个卡片这是一个卡片这是一个卡片这是一个卡片这是一个卡片这是一个卡片</Banners.Card>
          </Banners.Cards>
        </Banners>
      </div>
    )
  }
}
