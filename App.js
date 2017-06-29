import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import { Avatar, Button, Text } from 'react-native-elements'

import CardSet from './CardSet.js'
import ButtonSet from './ButtonSet.js'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      cardSelected: null,

      ace: null,
      king: null,
      queen: null,
      jack: null,
      ten: null,
      nine: null,

      plusMinus: null,
      plusMinusSelected: false
    }
  }

  // callback for when a card is clicked
  // sets that as the current selected card in state
  handleCardClick = (card) => {
    this.setState({ cardSelected: card })
  }

  // callback for when a suit is clicked
  // adds that card with that suit to state
  // and sets cardSelected to null
  handleSuitClick = (suit) => {
    switch (this.state.cardSelected) {
      case ('ace'):
        this.setState({ace: suit })
        break
      case ('king'):
        this.setState({ king: suit })
        break
      case ('queen'):
        this.setState({ queen: suit })
        break
      case ('jack'):
        this.setState({ jack: suit })
        break
      case ('ten'):
        this.setState({ ten: suit })
        break
      case ('nine'):
        this.setState({ nine: suit })
        break
    }

    this.setState({ cardSelected: null })
  }

  // adds plus/minus to state
  handlePlusMinusClick = (sign) => {
    this.setState({ plusMinus: sign, plusMinusSelected: true })
  }

  handleSubmitClick = () => {
    this.setState({ 
      cardSelected: null,

      ace: null,
      king: null,
      queen: null,
      jack: null,
      ten: null,
      nine: null,

      plusMinus: null,
      plusMinusSelected: false
    })
  }

  render() {
    console.log(this.state)
    return (
      <View style={styles.mainContainer}>
        <Text h3 style={{color: 'white'}}>Euchre Call</Text>
        <CardSet 
          card='ace'
          handleCardClick={this.handleCardClick}
          handleSuitClick={this.handleSuitClick}
          cardSelected={this.state.cardSelected}
        />
        <CardSet 
          card='king'
          handleCardClick={this.handleCardClick}
          handleSuitClick={this.handleSuitClick}
          cardSelected={this.state.cardSelected}
        />
        <CardSet 
          card='queen'
          handleCardClick={this.handleCardClick}
          handleSuitClick={this.handleSuitClick}
          cardSelected={this.state.cardSelected}
        />
        <CardSet 
          card='jack'
          handleCardClick={this.handleCardClick}
          handleSuitClick={this.handleSuitClick}
          cardSelected={this.state.cardSelected}
        />
        <CardSet 
          card='ten'
          handleCardClick={this.handleCardClick}
          handleSuitClick={this.handleSuitClick}
          cardSelected={this.state.cardSelected}
        />
        <CardSet 
          card='nine'
          handleCardClick={this.handleCardClick}
          handleSuitClick={this.handleSuitClick}
          cardSelected={this.state.cardSelected}
        />
        <ButtonSet 
          handlePlusMinusClick={this.handlePlusMinusClick}
          handleSubmitClick={this.handleSubmitClick}
          plusMinusSelected={this.state.plusMinusSelected}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})
