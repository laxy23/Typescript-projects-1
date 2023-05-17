interface ListProps {
  list: (string | undefined)[];
  handleDelete: (item: string) => void;
}

function List({ list, handleDelete }: ListProps) {
  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const parentElement = (e.target as HTMLElement).parentElement;
    if (parentElement) {
      handleDelete(parentElement.id);
    }
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i} id={item}>
            {item}{" "}
            <span className="close" onClick={handleClick}>
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
