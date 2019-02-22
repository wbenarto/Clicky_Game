import React, { Component } from "react";
import Navbar from "./components/Navbar";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import friends from "./friends.json";
import "./App.css";

const shuffleFriends = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0,
    result: "",
    clickedChar: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) })
    } else {
      this.handleReset();
    }
  }

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      result: ""
    });

    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    } else if (newScore === 12) {
      this.setState({ result: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      score: 0,
      topScore: 0,
      result: "Glaven",
      clickedChar: []
    })
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (

      <Wrapper>
        <Navbar
          title="Clicky Game"
          score={this.state.score}
          topScore={this.state.topScore}
          result={this.state.result}
        />
        <Title>
          You click and don't click the same image. Simple?
        </Title>

        <Container>
          <Row>
            {this.state.friends.map(friend => (
              <Column size="md-3 sm-6">
                <FriendCard
                  key={friend.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={friend.id}
                  image={friend.image}
                  name={friend.name}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>


    );
  }
}

export default App;