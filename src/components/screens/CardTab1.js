import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CardItem, Card, Body } from "native-base";
import { connect } from "react-redux";
import moment from "moment";

class CardTab1 extends Component {
  //@init constructor
  constructor(props) {
    super(props);
    this.state = { showBox: false };
  }

  render() {
    //issueDate variable
    let displayIssueDate =
      typeof this.props.invoiceValue.issueDate == "undefined"
        ? ""
        : JSON.stringify(
            moment(this.props.invoiceValue.issueDate).format("DD-MM-YYYY")
          );
    //repaymentDate variable
    let displayRepaymentDate =
      typeof this.props.invoiceValue.repaymentDate == "undefined"
        ? ""
        : JSON.stringify(
            moment(this.props.invoiceValue.repaymentDate).format("DD-MM-YYYY")
          );
    //Toggle card box on click
    let cardDetails = this.state.showBox ? (
      <View style={{ backgroundColor: "	#00FFFF" }}>
        <CardItem>
          <Body>
            <Text>ISSUE DATE *</Text>
            <Text>{displayIssueDate}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text>REPAYMENT DATE *</Text>
            <Text>{displayRepaymentDate}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text>AMOUNT *</Text>
            <Text>{this.props.invoiceValue.amount}</Text>
          </Body>
        </CardItem>
      </View>
    ) : null;

    return (
      <View>
        <Card>
          <TouchableOpacity //make it a button to click on
            onPress={() => this.setState({ showBox: !this.state.showBox })}
          >
            <CardItem Header>
              <Body>
                <Text style={{ fontSize: 20, fontWeight: "600" }}>
                  VALUES IN INVOICE FORM
                </Text>
              </Body>
            </CardItem>
          </TouchableOpacity>
          {cardDetails}
        </Card>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    invoiceValue: state.invoice.invoiceValue
  };
};
const CardTab1Component = connect(
  mapStateToProps,
  null
)(CardTab1);
export { CardTab1Component as CardTab1 };
