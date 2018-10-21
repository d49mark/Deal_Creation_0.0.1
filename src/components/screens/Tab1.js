import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { MyForm } from "../common/MyForm";
import moment from "moment";
import { Button } from "native-base";
import { dealChanged } from "../Actions";
import t from "tcomb-form-native";
import Icon from "react-native-vector-icons/FontAwesome";

class Tab1 extends Component {
  //handle Form submission
  handleSubmit(setTab) {
    const value = this.deal.getValue();
    if (value) setTab(1); //If from correct send user to next tab
  }
  //look for changes in form
  _onChange(value) {
    this.props.dispatch(dealChanged(value));
  }

  render() {
    //Name Validator
    const Name = t.refinement(t.String, name => {
      const reg = /^[a-zA-Z ]+$/;
      return reg.test(name);
    });
    //date Validator
    const checkDate = t.refinement(t.Date, date => {
      const tempDate = new Date();
      return new Date(date).getTime() <= tempDate.getTime();
    });
    //Fileds in Form
    const Deal = t.struct({
      name: Name,
      date: checkDate,
      amount: t.Number
    });
    //Format Date to display
    let myFormatFunction = (format, date) => {
      return moment(date).format(format);
    };
    //config for Form
    const options = {
      fields: {
        name: {
          label: "DEAL NAME *",
          error: "Error Message"
        },
        date: {
          label: "LISTING DATE *",
          mode: "date",
          error: "Error Message",
          config: {
            format: date => myFormatFunction("DD-MM-YYYY", date)
          }
        },
        amount: {
          label: "DEAL AMOUNT *",
          error: "Error Message"
        }
      }
    };

    return (
      <View style={{ backgroundColor: "transparent", padding: 12 }}>
        <MyForm //pass details to functional component
          type={Deal}
          _ref={c => (this.deal = c)}
          options={options}
          value={this.props.dealValue}
          onChange={this._onChange.bind(this)}
        />
        <Button
          block
          iconRight
          style={{ margin: 10 }}
          onPress={this.handleSubmit.bind(this, this.props.onPress)}
        >
          <Text style={{ fontSize: 20, color: "white", fontWeight: "600" }}>
            Next
          </Text>
          <Icon name="arrow-right" size={20} color="white" />
        </Button>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    //map state variable to props to access in this component
    dealValue: state.deal.dealValue
  };
};
const Tab1Component = connect(
  mapStateToProps,
  null
)(Tab1);
export { Tab1Component as Tab1 };
