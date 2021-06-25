import MeetupList from "../components/meetups/MeetupList";

export default function Home({ meetups, test }) {
  return (
    <>
      <h1>The Home Page {test}</h1>
      <MeetupList meetups={meetups} />
    </>
  );
}

// this will not run during the build process, but instead,
// always on the server after deployment
export const getServerSideProps = async (context) => {
  const { req, res } = context;
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const baseUrl = req ? `${protocol}://${req.headers.host}` : "";
  const meetups = await fetch(baseUrl + "/api/meetups", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await meetups.json();
  console.log("heeey", data);

  //fetch date from the API
  return {
    props: {
      meetups: data.meetups,
      test: "server",
    },
  };
};

// export const getStaticProps = async () => {
//   const meetups = await fetch("https:localhost:3000/api/meetups", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const { data } = await meetups;
//   return {
//     props: {
//       meetups: data,
//       test: "come to me",
//     },
//     //regenerates the code whenever there is an incoming change a
//     //according to the time value set by the developer
//     //the time unit is seconds (s)
//     revalidate: 1,
//   };
// };
