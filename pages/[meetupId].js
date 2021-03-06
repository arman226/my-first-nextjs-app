import MeetupDetail from "../components/meetups/MeetupDetail";
import { useRouter } from "next/router";

const MeetupDetails = ({ title, address, description, image }) => {
  return (
    <MeetupDetail
      title={title}
      address='Some City in the Philippines'
      description='Meetup Description'
      image='https://upload.wikimedia.org/wikipedia/en/e/e1/Iglesia_ni_Cristo_Central_Temple_%28Commonwealth_Avenue%2C_Quezon_City%29%282018-02-07%29.jpg'
    />
  );
};

// it tells nextJS which parameter this page must be pre-generated
export const getStaticPaths = async () => {
  return {
    // if fallback is set to false,
    // it will return a 404 (NOT FOUND) error whenever an undetected parameter is indicated by the user
    // if you set the value to "blocking", next JS will not respond to 404 page immediately
    //
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "sm1",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const { meetupId } = context.params;
  // here you can fetch data from the API
  // after fetching, you can assign the selected response values to the props so the component/page can use 'em
  return {
    props: {
      title: "testing the getStatic Props",
      address: "Some City in the Philippines",
      description: "Describe the Meetup",
      id: meetupId,
      image:
        "https://upload.wikimedia.org/wikipedia/en/e/e1/Iglesia_ni_Cristo_Central_Temple_%28Commonwealth_Avenue%2C_Quezon_City%29%282018-02-07%29.jpg",
    },
  };
};

export default MeetupDetails;
