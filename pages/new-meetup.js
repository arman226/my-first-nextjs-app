import { useRouter } from "next/router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
export default function NewMeetup() {
  const router = useRouter();
  const addMeetupHandler = async (data) => {
    const response = await fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.replace("/");
  };
  return (
    <div>
      <h1>New-Meetup Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}
