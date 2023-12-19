import { EmojiRating } from "@/components/EmojiRating";

export default function page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <EmojiRating rate ={3.2}/>
    </div>
  );
}
