import { Card, Media, Image, Heading, Content } from "react-bulma-components"

const Product = (props) => {
    return(
        <Card style={{ width: 300, margin: 'auto' }}>
        <Card.Image
          size="4by3"
          src={props.imagen}
        />
        <Card.Content>
          <Media>
            <Media.Item renderAs="figure" align="left">
              <Image
                size={64}
                alt="64x64"
                src="http://bulma.io/images/placeholders/128x128.png"
              />
            </Media.Item>
            <Media.Item>
              <Heading size={4}>John Smith</Heading>
              <Heading subtitle size={6}>
                @johnsmith
              </Heading>
            </Media.Item>
          </Media>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
            iaculis mauris. <a>@bulmaio</a>.<a href="#1">#css</a>{' '}
            <a href="#2">#responsive</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </Content>
        </Card.Content>
      </Card>
    )

}

export default Product