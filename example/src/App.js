import React, { Component } from 'react'

import Banners from 'react-banners'

export default class App extends Component {
  render() {
    return (
      <div>
        <Banners py={80} style={{ overflow: 'hidden' }}>
          <Banners.Blocks textWidth={'40%'}>
            <Banners.Block imageAlign="right">
              <Banners.Title>供应链前端开发指南</Banners.Title>
              <Banners.SubTitle>从无到有、从0到1、从新开始</Banners.SubTitle>
              <Banners.Description>快速开始</Banners.Description>
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
        <Banners>
          <Banners.Blocks
            imageAlign="left"
            textColor="#fff"
            py={10}
            style={{ backgroundColor: 'rgb(42, 55, 95)' }}
          >
            <Banners.Block>
              <Banners.Title>这是主标题</Banners.Title>
              <Banners.SubTitle>这是副标题</Banners.SubTitle>
              <Banners.Description>这是描述文案</Banners.Description>
              <Banners.Image src="https://img.alicdn.com/tfs/TB17iSmr_tYBeNjy1XdXXXXyVXa-200-200.png" />
            </Banners.Block>
            <Banners.Block>
              <Banners.Title>这是主标题</Banners.Title>
              <Banners.SubTitle>这是副标题</Banners.SubTitle>
              <Banners.Description>这是描述文案</Banners.Description>
              <Banners.Image src="https://img.alicdn.com/tfs/TB17iSmr_tYBeNjy1XdXXXXyVXa-200-200.png" />
            </Banners.Block>
            <Banners.Block>
              <Banners.Title>这是主标题</Banners.Title>
              <Banners.SubTitle>这是副标题</Banners.SubTitle>
              <Banners.Description>这是描述文案</Banners.Description>
              <Banners.Image src="https://img.alicdn.com/tfs/TB17iSmr_tYBeNjy1XdXXXXyVXa-200-200.png" />
            </Banners.Block>
            <Banners.Block>
              <Banners.Title>这是主标题</Banners.Title>
              <Banners.SubTitle>这是副标题</Banners.SubTitle>
              <Banners.Description>这是描述文案</Banners.Description>
              <Banners.Image src="https://img.alicdn.com/tfs/TB17iSmr_tYBeNjy1XdXXXXyVXa-200-200.png" />
            </Banners.Block>
          </Banners.Blocks>
        </Banners>
        <Banners pt={80} px={[0,0,20,100]}>
          <Banners.Cards>
            <Banners.Card>
              <Banners.Title>这是主标题</Banners.Title>
              <Banners.SubTitle>这是副标题</Banners.SubTitle>
              <Banners.Description>这是描述文案</Banners.Description>
              <Banners.Image src="https://img.alicdn.com/tfs/TB17iSmr_tYBeNjy1XdXXXXyVXa-200-200.png" />
            </Banners.Card>
            <Banners.Card>
              <Banners.Title>这是主标题</Banners.Title>
              <Banners.SubTitle>这是副标题</Banners.SubTitle>
              <Banners.Description>这是描述文案</Banners.Description>
              <Banners.Image src="https://img.alicdn.com/tfs/TB17iSmr_tYBeNjy1XdXXXXyVXa-200-200.png" />
            </Banners.Card>
            <Banners.Card>
              <Banners.Title>这是主标题</Banners.Title>
              <Banners.SubTitle>这是副标题</Banners.SubTitle>
              <Banners.Description>这是描述文案</Banners.Description>
              <Banners.Image src="https://img.alicdn.com/tfs/TB17iSmr_tYBeNjy1XdXXXXyVXa-200-200.png" />
            </Banners.Card>
          </Banners.Cards>
        </Banners>
        <Banners>
          <Banners.Title pt={60} pb={20}>
            这是主标题
          </Banners.Title>
          <Banners.Cards textWidth={'40%'}>
            <Banners.Card>
              <Banners.Title>这是主标题</Banners.Title>
              <Banners.SubTitle>这是副标题</Banners.SubTitle>
              <Banners.Description>
                这是描述文案这是描述文案这是描述文案这是描述文案这是描述文案这是描述文案这是描述文案这是描述文案这是描述文案这是描述文案这是描述文案
              </Banners.Description>
              <Banners.Image
                width={'25%'}
                src="https://img.alicdn.com/tfs/TB17iSmr_tYBeNjy1XdXXXXyVXa-200-200.png"
              />
            </Banners.Card>
          </Banners.Cards>
          <Banners.Texture>
            <div
              style={{
                height: 2000,
                width: 1500,
                background: '#eee',
                transform: 'rotate(50deg) translate(300px,-500px)',
                borderRadius:40
              }}
            />
          </Banners.Texture>
        </Banners>
        <Banners>
          <Banners.Title pt={60} pb={20}>
            这是主标题
          </Banners.Title>
          <Banners.Cards>
            <Banners.Card>
              <Banners.Title>这是主标题</Banners.Title>
              <Banners.SubTitle>这是副标题</Banners.SubTitle>
              <Banners.Description>这是描述文案</Banners.Description>
              <Banners.Image
                width={'25%'}
                src="https://img.alicdn.com/tfs/TB17iSmr_tYBeNjy1XdXXXXyVXa-200-200.png"
              />
            </Banners.Card>
          </Banners.Cards>
        </Banners>
        <Banners pb={50}>
          <Banners.Title pt={60} pb={20}>
            这是主标题
          </Banners.Title>
          <Banners.Cards>
            <Banners.Card>
              <Banners.Title>这是主标题</Banners.Title>
              <Banners.SubTitle>这是副标题</Banners.SubTitle>
              <Banners.Description>这是描述文案</Banners.Description>
              <Banners.Image
                width={'25%'}
                src="https://img.alicdn.com/tfs/TB17iSmr_tYBeNjy1XdXXXXyVXa-200-200.png"
              />
            </Banners.Card>
          </Banners.Cards>
        </Banners>
        
      </div>
    )
  }
}
