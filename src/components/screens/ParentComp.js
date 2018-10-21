import React, { Component } from "react";
import { Text } from "react-native";
import { Container, Content, Tabs, Tab, Card, Body } from "native-base";
import { Tab1, Tab2, CardTab1 } from "./";
import { connect } from "react-redux";
import { selectTab, unlockTab } from "../Actions";

//parent for both Tabs
class ParentComp extends Component {
  //which tab to show
  _setTab(value) {
    this.props.dispatch(selectTab(value));
    this.props.dispatch(unlockTab(false));
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.showCard != nextProps.showCard ||
      this.props.selectedTab != nextProps.selectedTab
    )
      return true;
    else return false;
  }
  render() {
    //diable next tab untill first filled out
    let Tab2Display = this.props.lockedTab ? (
      <Body>
        <Text>Please Fill Deal Creation</Text>
      </Body>
    ) : (
      <Tab2
        navigation={this.props.navigation}
        setTab={this._setTab.bind(this)}
      />
    );

    //showm cardBox when user comes back to Tab1
    let Cardtabshow = this.props.showCard ? <CardTab1 /> : null;
    return (
      <Container style={{ backgroundColor: "#DCDCDC" }}>
        <Content padder>
          <Tabs page={this.props.selectedTab}>
            <Tab heading="STEP 1">
              {Cardtabshow}
              <Tab1
                navigation={this.props.navigation}
                onPress={this._setTab.bind(this)}
              />
            </Tab>
            <Tab heading="STEP 2">{Tab2Display}</Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    //map state variable to props to access in this component
    showCard: state.invoice.showCard,
    lockedTab: state.tabSelect.lockedTab,
    selectedTab: state.tabSelect.selectedTab
  };
};
const ParentCompComponent = connect(
  mapStateToProps,
  null
)(ParentComp);
export { ParentCompComponent as ParentComp };
