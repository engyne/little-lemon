import {ReactComponent as Done} from '../../assets/done.svg';
import './BookingConfirmation.css';

export function BookingConfirmation({
  form: {
    name,
    email,
    phone,
    people,
    time,
    date,
    occasion,
    outdoorTable,
  }
}) {

  console.log(name);

return (
  <div className='booking-confirmation'>
    <section>
      <h1>Reservation confirmation:</h1>
      <dl>
        <dt>Name:</dt>
        <dd>{name}</dd>
        <dt>Email:</dt>
        <dd>{email}</dd>
        <dt>Phone number:</dt>
        <dd>{phone}</dd>
        <dt>People:</dt>
        <dd>{people}</dd>
        <dt>Date:</dt>
        <dd>{ new Date(date).toLocaleDateString() }</dd>
        <dt>Time:</dt>
        <dd>{ time }</dd>
        <dt>Outdoor table:</dt>
        <dd>{ outdoorTable ? 'Yes' : 'No' }</dd>
        <dt>Occasion:</dt>
        <dd>{ occasion || 'n/a' }</dd>
      </dl>
    </section>
    <Done className='done-svg' />
  </div>
);
}