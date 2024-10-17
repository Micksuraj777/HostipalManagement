import { Button } from "./Button";
import Bg from "../assets/images/bg.png";
import Man1 from "../assets/images/man1.png";
import Man2 from "../assets/images/man2.png";
import Doc from "../assets/images/doc.png";
import Input from "./input";
const Home = () => {
  return (
    <main className="w-full max-w-screen-xl mx-auto">
      <section className="flex justify-between w-full pb-10">
        <div className="w-1/2 mt-20 flex flex-col gap-5">
          <h1 className="text-black text-6xl font-bold">
            We help people to get appoint in online
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            repudiandae unde expedita repellendus, saepe et nulla recusandae sit
            eaque reprehenderit vero error dicta enim maiores maxime. Eos,
            consequuntur velit, illum aspernatur molestiae debitis ex cum, ipsa
            maxime omnis eius quae. Culpa, neque sequi. Saepe iure quisquam
            similique, id beatae ex hic assumenda et eaque, laboriosam voluptate
            accusantium placeat! Quam sequi ipsam aut repellat magni,
            praesentium qui quod adipisci ex aspernatur neque ut, rem sunt ab
            reprehenderit perspiciatis facere nihil unde placeat beatae sit
            alias asperiores? Voluptatibus unde vitae fugit quibusdam nisi,
            consequuntur tempora explicabo quas cupiditate ipsum praesentium
          </p>
          <Button
            href="/register"
            bgColor="#9083D5"
            className="text-white w-fit"
          >
            Tour
          </Button>
        </div>
        <div className="w-1/2 flex justify-end relative -z-10">
          <img
            src={Bg}
            alt="bg"
            className="bg-cover absolute -top-16 -right-14 h-screen"
          />
          <img
            src={Man1}
            alt="bg"
            className="bg-cover absolute top-10 mr-32 h-[400px]"
          />
          <img
            src={Man2}
            alt="bg"
            className="bg-cover absolute top-10  h-[400px]"
          />
        </div>
      </section>
      <section className="flex justify-center w-full items-center py-10">
        <div className="w-1/2">
          <img src={Doc} alt="doc" />
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <h2 className="text-black font-medium">Biography</h2>
          <h3 className="text-4xl font-medium text-black">Who Are We</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            repudiandae unde expedita repellendus, saepe et nulla recusandae sit
            eaque reprehenderit vero error dicta enim maiores maxime. Eos,
            consequuntur velit, illum aspernatur molestiae debitis ex cum, ipsa
            maxime omnis eius quae. Culpa, neque sequi. Saepe iure quisquam
            similique, id beatae ex hic assumenda et eaque, laboriosam voluptate
            accusantium placeat! Quam sequi ipsam aut repellat magni,
            praesentium qui quod adipisci ex aspernatur neque ut, rem sunt ab
            reprehenderit perspiciatis facere nihil unde placeat beatae sit
            alias asperiores? Voluptatibus unde vitae fugit quibusdam nisi,
            consequuntur tempora explicabo quas cupiditate ipsum praesentium
          </p>
          <Button bgColor="#9083D5" className="w-fit text-white font-semibold">
            See More
          </Button>
        </div>
      </section>
      <section className="flex flex-col max-w-screen-lg mx-auto gap-5 py-10">
        <h2 className="text-center font-bold text-black text-4xl mb-5">Send us a message</h2>
        <div className="flex gap-20">
          <div className="w-1/2 flex flex-col gap-5">
            <Input placeholder="First Name" type="text" />
            <Input placeholder="Mobile Number" type="tel" />
          </div>
          <div className="w-1/2 flex flex-col gap-5">
            <Input placeholder="Last Name" type="text" />
            <Input placeholder="Email" type="email" />
          </div>
        </div>
        <div>
          <Input placeholder="Message" variant="textarea" type="tel" className="h-[100px]" />
        </div>
        <div className="flex justify-center pt-3">
        <Button bgColor="#9083D5" className="w-fit text-white font-semibold px-14">
            Send
        </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
