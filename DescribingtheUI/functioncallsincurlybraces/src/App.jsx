const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-Us',
     {weekday: 'long'}
  ).format(date);
}

export default function TodoList() {
  return(
    <h1>To do List for {formatDate(today)}</h1>
  )
}