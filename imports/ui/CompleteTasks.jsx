import { Meteor } from 'meteor/meteor';
import React from 'react';

export const CompleteTasks = () => {
  const handleClick = e => {
    Meteor.call('tasks.completeAll');
    console.log("pillin")
  };

  return (
    <button onClick={handleClick}>Complete All Tasks</button>
  );
};