import Feature from "./Feature";
import MidLine from "./MidLine";

const Features = () => {
  return (
    <div className="md:flex md:max-w-[1110px] m-auto">
      <Feature
        img="/icon-brand-recognition.svg"
        alt="icon brand recognition"
        h2="Brand Recognition"
        width={40}
        height={40}
        p="Boost your brand recognition with each click Generic links don't mean a thing.
        Branded links help instil confidence in your content."
      />
      <MidLine />
      <Feature
        img="/icon-detailed-records.svg"
        alt="icon Detailed Records"
        h2="Detailed Records"
        width={40}
        height={40}
        p="Gain insights into who is clicking your links. Knowing when and where
        people engage with your content help inform better decisions."
      />
      <MidLine />
      <Feature
        img="/icon-fully-customizable.svg"
        alt="icon Fully Customizable"
        h2="Fully Customizable"
        width={48}
        height={48}
        p="Improve brand awareness and content discoverability through customizable
        links, supercharging audience engagement."
      />
    </div>
  );
};

export default Features;
