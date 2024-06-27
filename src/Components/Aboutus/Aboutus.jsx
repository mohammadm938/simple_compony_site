import imgSrc from "../../imgs/eiffel-tower-night.avif";

const Aboutus = () => {
  return (
    <main class="flex items-center justify-between w-full space-y-2">
      <div class="flex-col space-y-5 w-3/6">
        <h2 class="text-4xl font-bold">About</h2>
        <h4 class="text-gray-500 text-xs">
          Subheading for description or instructions
        </h4>
        <p>
          Body text for your whole article or post. We’ll put in some lorem
          ipsum to show how a filled-out page might look:
        </p>
        <p>
          Excepteur efficient emerging, minim veniam anim aute carefully curated
          Ginza conversation exquisite perfect nostrud nisi intricate Content.
          Qui international first-class nulla ut. Punctual adipisicing,
          essential lovely queen tempor eiusmod irure. Exclusive izakaya
          charming Scandinavian impeccable aute quality of life soft power
          pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et
          Porter destination Toto remarkable officia Helsinki excepteur Basset
          hound. Zürich sleepy perfect consectetur.
        </p>
      </div>

      <div class="w-2/5 h-full">
        <img
          class="w-8/12 h-full rounded-md shadow-lg"
          src={imgSrc}
          alt="eiffel tower"
        />
      </div>
    </main>
  );
};

export default Aboutus;
