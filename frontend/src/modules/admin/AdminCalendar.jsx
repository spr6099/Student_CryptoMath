import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const localizer = momentLocalizer(moment)


function AdminCalendar() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalShow, setModalShow] = React.useState(false);

  const toggleOffcanvas = () => {
    setModalShow(!modalShow);
  };

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    setModalShow(false);
  };

  const handleEditEvent = (updatedEvent) => {
    setEvents(events.map(event => (event.id === updatedEvent.id ? updatedEvent : event)));
    setModalShow(false);
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
    setModalShow(false);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setModalShow(true);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onAddEvent={handleAddEvent}
        onEditEvent={handleEditEvent}
        onDeleteEvent={handleDeleteEvent}
        selectedEvent={selectedEvent}
      />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={handleSelectEvent}

      />
    </>
  )
}

function MyVerticallyCenteredModal({show,onHide, onAddEvent, onEditEvent, onDeleteEvent, selectedEvent}) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  useEffect(() => {
    if (selectedEvent) {
      setTitle(selectedEvent.title || '');
      setDate(selectedEvent.start || '');
      setStartTime(selectedEvent.start ? moment(selectedEvent.start).format('HH:mm') : '');
      setEndTime(selectedEvent.end ? moment(selectedEvent.end).format('HH:mm') : '');
    } else {
      setTitle('');
      setDate('');
      setStartTime('');
      setEndTime('');
    }
  }, [selectedEvent]);

  const handleSubmit = () => {
    if (selectedEvent) {
      const updatedEvent = {
        ...selectedEvent,
        title,
        start: moment(date).set({ hour: startTime.split(':')[0], minute: startTime.split(':')[1] }).toDate(),
        end: moment(date).set({ hour: endTime.split(':')[0], minute: endTime.split(':')[1] }).toDate(),
      };
      onEditEvent(updatedEvent);
    } else {
      const newEvent = {
        id: Math.random(),
        title,
        start: moment(date).set({ hour: startTime.split(':')[0], minute: startTime.split(':')[1] }).toDate(),
        end: moment(date).set({ hour: endTime.split(':')[0], minute: endTime.split(':')[1] }).toDate(),
      };
      onAddEvent(newEvent);
    }
  };

  // Function to handle date change and disable past dates
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const today = new Date().toISOString().split('T')[0];
    
    // Only update date state if selected date is not in the past
    if (selectedDate >= today) {
      setDate(selectedDate);
    }
  };

  const handleDelete = () => {
    if (selectedEvent) {
      onDeleteEvent(selectedEvent.id);
    }
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>{selectedEvent ? 'Edit Event' : 'Add Event'}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="sidebar-body">
          <label>Title</label>
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Date</label>
          <input
            type="date"
            value={moment(date).format('YYYY-MM-DD')}
            onChange={handleDateChange}
          />
          <label>Start Time</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <label>End Time</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
          {/* <button className="btn btn-primary" onClick={handleSubmit}>{selectedEvent ? 'Update' : 'Submit'}</button>
          {selectedEvent && <button className="btn btn-danger" onClick={handleDelete}>Delete</button>} */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>{selectedEvent ? 'Update' : 'Submit'}</Button>
        {selectedEvent && <Button className="btn btn-danger" onClick={handleDelete}>Delete</Button>}
      </Modal.Footer>
    </Modal>
  );
}


export default AdminCalendar