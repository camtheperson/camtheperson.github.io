interface DetailProps {
  title: string;
  description: string;
}

export default function Detail(props: DetailProps) {
  const { title, description } = props;

  return (
    <div className="mb-6">
      <p className="font-bold">{title}</p>
      <p>{description}</p>
    </div>
  );
}