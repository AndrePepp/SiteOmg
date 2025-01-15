import EvenimenteTemplate from './EvenimenteTemplate';

export function Evenimente() {
  const data = [
    {
      title: (
        <div>
        Event 1
        </div>
    ),
      content: "This is the content of the first event",
    },
    {
        title: (
            <div>
            Event 2
            </div>
        ),
      content: "This is the content of the second event",
    },
    {
        title: (
            <div>
            Event 3
            </div>
        ),
      content: "This is the content of the third event",
    },
    {
        title: (
            <div>
            Event 4
            </div>
        ),
      content: "This is the content of the fourth event",
    },
  ];

  return (
    <div className="w-full">
      <EvenimenteTemplate data={data} />
    </div>
  );
}

export default Evenimente;
