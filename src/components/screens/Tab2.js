import React, { Component } from "react";
import { Text, View } from "react-native";
import { MyForm } from "../common/MyForm";
import moment from "moment";
import { Button } from "native-base";
import t from "tcomb-form-native";
import { invoiceChanged, showCard, submitForm, setWarning } from "../Actions";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

class Tab2 extends Component {
  //handle submission of Form
  handleSubmit() {
    const value = this.invoice.getValue();
    if (value) this.props.dispatch(submitForm());
  }
  //Look for changes
  async _onChange(value) {
    //wait for this action to finish
    await this.props.dispatch(invoiceChanged(value));
    //then check for these conditions
    if (
      this.props.invoiceValue.issueDate.setHours(0, 0, 0) <
        this.props.dealValue.date.setHours(0, 0, 0) &&
      this.props.dealValue.date.setHours(0, 0, 0) <
        this.props.invoiceValue.repaymentDate.setHours(0, 0, 0)
    ) {
      //if conditon right no need for warning
      this.props.dispatch(setWarning(false));
    } else {
      //else show him warning
      this.props.dispatch(setWarning(true));
    }
  }
  //for parent component to decide which tab to display and whether to show cardbox or not
  displayCard(value, setTab) {
    this.props.dispatch(showCard(value));
    setTab(0);
  }

  render() {
    //Warning variable
    let warningDisplay = this.props.warning ? (
      <Text note>NOTE: LISTING DATE NOT BETWEEN REPAYMENT AND ISSUED DATE</Text>
    ) : null;
    //name validator
    const Name = t.refinement(t.String, name => {
      //No numerals and special chracter
      const reg = /^[a-zA-Z ]+$/;
      return reg.test(name);
    });
    //issueDate validator
    const checkIssueDate = t.refinement(t.Date, date => {
      const tempDate = new Date();
      //must be fiture date
      return new Date(date).setHours(0, 0, 0) <= tempDate.setHours(0, 0, 0);
    });
    //repaymentDate validator
    const checkRepaymentDate = t.refinement(t.Date, date => {
      const tempDate = new Date();
      //not a past date and after issue date
      return (
        new Date(date).setHours(0, 0, 0) >
          new Date(this.props.invoiceValue.issueDate).setHours(0, 0, 0) &&
        date.setHours(0, 0, 0) >= tempDate.setHours(0, 0, 0)
      );
    });
    //Form fields
    const Invoice = t.struct({
      name: Name,
      issueDate: checkIssueDate,
      repaymentDate: checkRepaymentDate,
      amount: t.Number
    });
    //Date format to display
    let myFormatFunction = (format, date) => {
      return moment(date).format(format);
    };
    //config for Form
    const options = {
      fields: {
        name: {
          label: "INVOICE NAME *",
          error: "Error Message"
        },
        issueDate: {
          label: "ISSUE DATE *",
          mode: "date",
          error: "Error Message",
          config: {
            format: date => myFormatFunction("DD-MM-YYYY", date)
          }
        },
        repaymentDate: {
          label: "REPAYMENT DATE *",
          mode: "date",
          error: "Error Message",
          config: {
            format: date => myFormatFunction("DD-MM-YYYY", date)
          }
        },
        amount: {
          label: "AMOUNT *",
          error: "Error Message"
        }
      }
    };

    return (
      <View style={{ padding: 12 }}>
        <MyForm //pass props to functional component MyForm
          type={Invoice}
          _ref={c => (this.invoice = c)}
          options={options}
          value={this.props.invoiceValue}
          onChange={this._onChange.bind(this)}
        />
        {warningDisplay}
        <Button
          block
          iconLeft
          style={{ margin: 10 }}
          onPress={this.displayCard.bind(this, true, this.props.setTab)}
        >
          <Icon name="arrow-left" size={20} color="white" />
          <Text style={{ fontSize: 20, color: "white", fontWeight: "600" }}>
            Previous
          </Text>
        </Button>
        <Button
          block
          style={{ margin: 10 }}
          onPress={this.handleSubmit.bind(this)}
        >
          <Text style={{ fontSize: 20, color: "white", fontWeight: "600" }}>
            Submit
          </Text>
        </Button>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    //map state variable to props to access in this component
    invoiceValue: state.invoice.invoiceValue,
    dealValue: state.deal.dealValue,
    warning: state.warningSet.warning
  };
};
const Tab2Component = connect(
  mapStateToProps,
  null
)(Tab2);
export { Tab2Component as Tab2 };
