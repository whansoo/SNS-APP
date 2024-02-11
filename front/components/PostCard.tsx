import React from 'react'
import { Card, Popover, Button } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined,  } from '@ant-design/icons';
import ButtonGroup from 'antd/es/button/button-group';

function PostCard() {
  return (
   
      <Card
        // cover={post.Images[0] && <PostImages images={post.Images} />}
        style={{ padding: 10 }}
        cover={
            <img
            //   style={{ height: '100rem' }}
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        actions={[
            <>
            <RetweetOutlined  key="retweet"/>,
              <HeartOutlined  key="heart" />
            <MessageOutlined  key="comment" />,
            <Popover key="more" content={(
              <Button.Group>
                 <Button>수정</Button>
                 <Button>삭제</Button>
                 <Button>신고</Button>
              </Button.Group>
            )}>
                <EllipsisOutlined />
            </Popover>
            </>
        ]}
      >
        
      </Card>
   
  )
}

export default PostCard