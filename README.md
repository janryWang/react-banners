# react-banners

[![NPM](https://img.shields.io/npm/v/react-banners.svg)](https://www.npmjs.com/package/react-banners) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> React通用横幅组件，核心特性
>
> - 🌺 场景化解决方案，最大化屏蔽样式问题
> - 🌺 基于rebass框架，快速配置布局样式
> - 🌺 响应式布局，多终端适配
> - 🌺 图文布局多样化



## Install

```bash
npm install --save react-banners
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'react-banners'

class Example extends Component {
  render () {
    return (
      <div style={{ overflow: 'hidden' }}>
        <Banners py={80} style={{ overflow: 'hidden' }}>
          <Banners.Blocks textWidth={'40%'}>
            <Banners.Block imageAlign="right">
              <Banners.Title>这是主标题这是主标题</Banners.Title>
              <Banners.SubTitle>这是副标题这是副标题</Banners.SubTitle>
              <Banners.Description my={30}>
                <Banners.Button color="rgb(128, 111, 193)">
                  快速开始
                </Banners.Button>
                <Banners.Button color="rgb(128, 111, 193)" ghost>
                  查看文档
                </Banners.Button>
              </Banners.Description>
              <Banners.Image
                width={'33.5%'}
                src="//img.alicdn.com/tfs/TB1nchIg4jaK1RjSZKzXXXVwXXa-390-419.svg"
              />
            </Banners.Block>
          </Banners.Blocks>
          <Banners.Texture
            style={{
              width: '100%',
              height: '100%',
              backgroundRepeat: 'no-repeat',
              transform: 'scale(2.5)',
              backgroundSize: 'cover',
              backgroundPosition: '50%',
              backgroundImage:
                'url(//img.alicdn.com/tfs/TB1gqwCgSzqK1RjSZFjXXblCFXa-1141-1259.svg)'
            }}
          />
        </Banners>
      </div>
    )
  }
}
```



## API



`<Banners>`

> 横幅组件

| 属性           | 类型   | 示例                       |
| -------------- | ------ | -------------------------- |
| rebass基础属性 | any    | https://rebassjs.org/props |
| style属性      | object | `{color:"#eee"}`           |



`<Banners.Blocks>`

> 区块容器

| 属性                | 类型                  | 示例                       |
| ------------------- | --------------------- | -------------------------- |
| rebass基础属性      | any                   | https://rebassjs.org/props |
| style属性           | object                | `style={{color:"#eee"}}`   |
| imageWidth 图片宽度 | Number/String         | `imageWidth="40%"`         |
| imageAlign 图片布局 | left/top/right/bottom | `imageAlign="top"`         |
| textWidth 文本宽度  | Number/String         | `textWidth="40%"`          |
| textColor 文本颜色  | String                | `textColor="#eee"`         |
| children            | `<Block>`              |                            |


`<Banners.Block>`

> 区块

| 属性           | 类型   | 示例                       |
| -------------- | ------ | -------------------------- |
| rebass基础属性 | any    | https://rebassjs.org/props |
| style属性      | object | `{color:"#eee"}`           |
| href属性      | string | `href="//taobao.com"`           |
| children       | `<Title>/<SubTitle>/<Description>` |                            |


`<Banners.Cards>`

> 卡片容器

| 属性                | 类型                  | 示例                       |
| ------------------- | --------------------- | -------------------------- |
| rebass基础属性      | any                   | https://rebassjs.org/props |
| style属性           | object                | `style={{color:"#eee"}}`   |
| imageWidth 图片宽度 | Number/String         | `imageWidth="40%"`         |
| imageAlign 图片布局 | left/top/right/bottom | `imageAlign="top"`         |
| textWidth 文本宽度  | Number/String         | `textWidth="40%"`          |
| textColor 文本颜色  | String                | `textColor="#eee"`         |
| children            | `<Card>`              |                            |



`<Banners.Card>`

> 卡片

| 属性           | 类型                               | 示例                       |
| -------------- | ---------------------------------- | -------------------------- |
| rebass基础属性 | any                                | https://rebassjs.org/props |
| style属性      | object                             | `{color:"#eee"}`           |
| href属性      | string | `href="//taobao.com"`           |
| children       | `<Title>/<SubTitle>/<Description>` |                            |



`<Banners.Title>`

> 主标题文本

| 属性           | 类型   | 示例                       |
| -------------- | ------ | -------------------------- |
| rebass基础属性 | any    | https://rebassjs.org/props |
| style属性      | object | `{color:"#eee"}`           |
| children       | any    |                            |



`<Banners.SubTitle>`

> 副标题文本

| 属性           | 类型   | 示例                       |
| -------------- | ------ | -------------------------- |
| rebass基础属性 | any    | https://rebassjs.org/props |
| style属性      | object | `{color:"#eee"}`           |
| children       | any    |                            |



`<Banners.Description>`

> 描述文本

| 属性           | 类型   | 示例                       |
| -------------- | ------ | -------------------------- |
| rebass基础属性 | any    | https://rebassjs.org/props |
| style属性      | object | `{color:"#eee"}`           |
| children       | anry   |                            |



`<Banners.Texture>`

> 纹理

| 属性           | 类型   | 示例                       |
| -------------- | ------ | -------------------------- |
| rebass基础属性 | any    | https://rebassjs.org/props |
| style属性      | object | `{color:"#eee"}`           |
| children       | any    |                            |
| x 位置属性     | number |                            |
| y 位置属性     | number |                            |


`<Banners.Button>`

> 按钮

| 属性           | 类型   | 示例                       |
| -------------- | ------ | -------------------------- |
| rebass基础属性 | any    | https://rebassjs.org/props |
| style属性      | object | `{color:"#eee"}`           |
| children       | any    |                            |
| ghost 是否是幽灵按钮      | boolean    |                            |





## License

MIT © [Janry](https://github.com/Janry)
