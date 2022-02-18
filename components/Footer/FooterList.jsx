import ListItem from "./ListItem";

const FooterList = ({ title, listItems }) => {
  return (
    <div className="text-center md:text-left">
      <h2 className="font-bold md:mt-[78px] my-[24px]">{title}</h2>
      <ul className="text-[#858388] text-[14px] space-y-[12px] whitespace-nowrap">
        {listItems.map((item) => (
          <ListItem key={item} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
