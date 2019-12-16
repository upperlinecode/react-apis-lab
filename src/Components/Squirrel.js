import React from 'react';

const Squirrel = (props) => {
  // determine if squirrel is a juvenile
  let juvenile = (props.data.age == "Juvenile") ? ' 🍼' : '';
  
  // make className for color
  let colorClassName = 'Color';
  if (props.data.primary_fur_color) {
    colorClassName += ' '+props.data.primary_fur_color;
  }
  let actions = ''
  actions += (props.data.running) ? 'running ' : '';
  actions += (props.data.chasing) ? 'chasing ' : '';
  actions += (props.data.climbing) ? 'climbing ' : '';
  actions += (props.data.eating) ? 'eating ' : '';
  actions += (props.data.foraging) ? 'foraging ' : '';
  actions = actions.trim().replace(/ /g,", ")
  
  // format the date
  let date = props.data.date;
  let formattedDate = new Date(Date.UTC(date.substring(4,8), date.substring(0,2)-1, date.substring(2,4), 12, 0, 0))
  let options = {weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'};
  let newDate = formattedDate.toLocaleString('en-US', options)
  
  return (
    <div className="Squirrel">
      <p className="Date">{newDate}</p>
      <p className="Unique">id: {props.data.unique_squirrel_id}{juvenile}</p>
      <div className={colorClassName}></div>
      <p className="Actions">{actions}</p>
    </div>
  )
}

export default Squirrel;
