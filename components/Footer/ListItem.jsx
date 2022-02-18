const ListItem = ({ item }) => {
  return (
    <li className="cursor-pointer md:hover:text-[hsl(180,66%,49%)] md:duration-300">
      <a>{item}</a>
    </li>
  );
};

export default ListItem;
