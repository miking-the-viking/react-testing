import React from 'react'
import SingleInputForm from "./SingleInputForm";

export const WithDefault = () => {

  const copy = {
    input: {
      label: 'MyLabel',
      placeholder: 'MyPlaceholder',
      describe: 'MyDescribe',
    },
    submit: {
      text: 'Submit',
    },
  }
  return (
    <SingleInputForm copy={copy} submit={alert} identifier="Default" />
  )
};

export default {
  title: 'Single Input From'
}
