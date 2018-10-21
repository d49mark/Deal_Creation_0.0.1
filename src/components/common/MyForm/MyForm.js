//Common functional component for making Form
import React from "react";
import { View } from "react-native";
import t from "tcomb-form-native";
const Form = t.form.Form;

const MyForm = props => {
  return (
    <View>
      <Form
        type={props.type} //assign your Form values
        ref={props._ref} //supply ref here
        options={props.options} //Config options for form
        handleSubmit={props.handleSubmit} //check for validations
        value={props.value} //Values in form
        onChange={props.onChange} //check for changes in Form
      />
    </View>
  );
};
export { MyForm };
