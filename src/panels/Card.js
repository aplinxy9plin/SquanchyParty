import React from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";

import Button from '@vkontakte/vkui/dist/components/Button/Button'

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, data } = this.props;
    const { name, lang, username, text, pics } = data[i];

    return (
      <animated.div
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          {...bind(i)}
          style={{
            transform: interpolate([rot, scale], trans)
          }}
        >
          <div className="card">
            <Carousel>
              {pics.map((pic, index) => (
                // https://mysterious-plateau-80675.herokuapp.com/telega_ava.php?img=aplinxy9plin
                <img src={pic} key={index} alt="profilePicture" />
              ))}
            </Carousel>
            <h2>{name}</h2>
            {/* <h2>{age}</h2> */}
            {lang && <h5>Language: {lang}</h5>}
            {/* <h5>{text}</h5> */}
            <Button size="xl" component="a" href="https://t.me/mts_music">Получить промокод</Button>
            <Button style={{marginTop: "5px"}} size="xl" component="a" href={"https://teleg.run/"+username}>Написать</Button>
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  distance: PropTypes.string,
  text: PropTypes.string,
  pics: PropTypes.array
};

export default Card;
