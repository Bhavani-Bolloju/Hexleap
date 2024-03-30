import Sports from "@/components/sports/Sports";
import { data } from "@/components/data/data";
export default function Home() {
  return (
    <main className=" bg-dark-1  py-10">
      <section className="w-[1444px] m-auto">
        <Sports data={data}></Sports>
      </section>
    </main>
  );
}
