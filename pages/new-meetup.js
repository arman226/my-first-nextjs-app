import styles from "../styles/Home.module.css";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
export default function NewMeetup() {
  const addMeetupHandler = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>New-Meetup Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}
