interface Title {
  title: string;
}

function PageTitle({ title }: Title) {
  return (
    <div className="page-title">
      <h3>{title}</h3>
    </div>
  );
}

export default PageTitle;
