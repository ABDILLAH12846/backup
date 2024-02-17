"use client"
import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
export default function Absenssi() {
  const mark:string[] = [
    '04-03-2020',
    '03-03-2020',
    '05-03-2020'
]

  const [value, onChange] = React.useState<Value>(new Date());
  const [marka,setMarka] = React.useState<String>('')
  return (
    <div>
      <Calendar onChange={onChange} value={value} tileClassName={({ activeStartDate, date, view }) => view === 'month' && mark.find()}/>
      {String(value)}
    </div>
  )
}
