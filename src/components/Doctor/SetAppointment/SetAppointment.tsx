import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!


const SetAppointment = () => {
    return(
        <div>
            <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        weekends={true}
        events={[
    { title: 'event 1', date: '2023-06-15' },
    { title: 'event 2', date: '2023-06-10' }
  ]}
      />
        </div>
    )
};
export default SetAppointment;