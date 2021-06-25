import MeetupDetail from "../components/meetups/MeetupDetail";
import { useRouter } from "next/router";

const MeetupDetails = (props) => {
  const router = useRouter();
  const { meetupId } = router.query;

  return (
    <MeetupDetail
      title='test'
      address='Some City in the Philippines'
      description='Meetup Description'
      image='https://upload.wikimedia.org/wikipedia/en/e/e1/Iglesia_ni_Cristo_Central_Temple_%28Commonwealth_Avenue%2C_Quezon_City%29%282018-02-07%29.jpg'
    />
  );
};

export default MeetupDetails;
